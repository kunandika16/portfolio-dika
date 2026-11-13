// Setelah `craco build`: buat HTML statis per route (title/description/canonical/OG sudah benar
// tanpa perlu JavaScript, penting untuk crawler & preview WhatsApp/LinkedIn) dan sitemap.xml.
const fs = require('fs');
const path = require('path');
const Module = require('module');
const babel = require('@babel/core');

// Muat modul ESM di src/ lewat Babel agar data & konfigurasi tidak diduplikasi.
const srcDir = path.join(__dirname, '..', 'src') + path.sep;
const origJs = Module._extensions['.js'];
Module._extensions['.js'] = function (mod, filename) {
  if (filename.startsWith(srcDir)) {
    const { code } = babel.transformFileSync(filename, {
      babelrc: false,
      configFile: false,
      presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
    });
    return mod._compile(code, filename);
  }
  return origJs(mod, filename);
};

const { SITE_URL, pageMeta, articleMeta, absoluteUrl, DEFAULT_IMAGE } = require('../src/lib/site');
const caseStudies = require('../src/data/caseStudies').default;

const buildDir = path.join(__dirname, '..', 'build');
const template = fs.readFileSync(path.join(buildDir, 'index.html'), 'utf8');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function render({ path: route, title, description, image = DEFAULT_IMAGE }) {
  const url = SITE_URL + route;
  const img = absoluteUrl(image);
  const tags = {
    'meta[^>]*name="description"': `<meta name="description" content="${esc(description)}">`,
    'link[^>]*rel="canonical"': `<link rel="canonical" href="${url}">`,
    'meta[^>]*property="og:url"': `<meta property="og:url" content="${url}">`,
    'meta[^>]*property="og:title"': `<meta property="og:title" content="${esc(title)}">`,
    'meta[^>]*property="og:description"': `<meta property="og:description" content="${esc(description)}">`,
    'meta[^>]*property="og:image"': `<meta property="og:image" content="${img}">`,
    'meta[^>]*name="twitter:title"': `<meta name="twitter:title" content="${esc(title)}">`,
    'meta[^>]*name="twitter:description"': `<meta name="twitter:description" content="${esc(description)}">`,
    'meta[^>]*name="twitter:image"': `<meta name="twitter:image" content="${img}">`,
  };
  let html = template.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`);
  for (const [pattern, tag] of Object.entries(tags)) {
    const re = new RegExp(`<${pattern}[^>]*>`);
    if (!re.test(html)) throw new Error(`Tag tidak ditemukan di index.html: ${pattern}`);
    html = html.replace(re, tag);
  }
  return html;
}

const pages = [
  pageMeta.home,
  pageMeta.work,
  pageMeta.about,
  ...Object.entries(caseStudies).map(([id, a]) => articleMeta(id, a)),
];

for (const page of pages) {
  const html = render(page);
  if (page.path === '/') {
    fs.writeFileSync(path.join(buildDir, 'index.html'), html);
  } else {
    const dir = path.join(buildDir, page.path);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), html);
  }
}

const today = new Date().toISOString().slice(0, 10);
const priority = (p) => (p === '/' ? '1.0' : p.startsWith('/article/') ? '0.6' : '0.8');
const sitemap =
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  pages
    .map((p) => `  <url><loc>${SITE_URL}${p.path}</loc><lastmod>${today}</lastmod><priority>${priority(p.path)}</priority></url>`)
    .join('\n') +
  '\n</urlset>\n';
fs.writeFileSync(path.join(buildDir, 'sitemap.xml'), sitemap);
console.log(`postbuild: ${pages.length} halaman statis + sitemap.xml`);
