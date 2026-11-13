// Konfigurasi SEO bersama. Dipakai oleh useSeo (runtime) dan scripts/postbuild.js (HTML statis per route).
export const SITE_URL = 'https://andikakun.web.id';
export const SITE_NAME = 'Andika Rian Ansari';
export const DEFAULT_IMAGE = '/og-image.jpg';

export const pageMeta = {
  home: {
    path: '/',
    title: 'Andika Rian Ansari — Fullstack Developer',
    description: 'Portfolio Andika Rian Ansari, Fullstack Developer. Web app, dashboard, sistem informasi, dan aplikasi mobile: ITMS, Loyra, Pos Indonesia Hub, TemuHobi, dan lainnya.',
  },
  work: {
    path: '/work',
    title: 'Karya & Case Study — Andika Rian Ansari',
    description: 'Kumpulan project dan case study Andika Rian Ansari: web app, sistem informasi, ecommerce, dan aplikasi mobile untuk berbagai industri.',
  },
  about: {
    path: '/about',
    title: 'Tentang Andika Rian Ansari — Fullstack Developer',
    description: 'Kenali Andika Rian Ansari: Fullstack Developer di PT Pos Indonesia, pengalaman, skill frontend-backend-mobile, dan penghargaan yang pernah diraih.',
  },
};

function truncate(text = '', max = 155) {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  return clean.slice(0, max).replace(/\s+\S*$/, '') + '…';
}

export function articleMeta(id, article) {
  return {
    path: `/article/${id}`,
    title: `${article.title} — ${SITE_NAME}`,
    description: truncate(article.subtitle || article.overview),
    image: article.heroImage,
  };
}

export function absoluteUrl(pathOrUrl) {
  return /^https?:\/\//.test(pathOrUrl) ? pathOrUrl : SITE_URL + encodeURI(pathOrUrl);
}
