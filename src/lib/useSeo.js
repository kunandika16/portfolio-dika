import { useEffect } from 'react';
import { SITE_URL, DEFAULT_IMAGE, absoluteUrl } from './site';

function setTag(tag, attr, key, content) {
  let el = document.head.querySelector(`${tag}[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement(tag);
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute(tag === 'link' ? 'href' : 'content', content);
}

// Memperbarui title/meta/canonical saat navigasi SPA (tag default sudah ada di public/index.html).
export default function useSeo({ title, description, path, image = DEFAULT_IMAGE, noindex = false }) {
  useEffect(() => {
    const url = SITE_URL + path;
    const img = absoluteUrl(image);
    document.title = title;
    setTag('meta', 'name', 'description', description);
    setTag('meta', 'name', 'robots', noindex ? 'noindex,follow' : 'index,follow,max-image-preview:large');
    setTag('link', 'rel', 'canonical', url);
    setTag('meta', 'property', 'og:url', url);
    setTag('meta', 'property', 'og:title', title);
    setTag('meta', 'property', 'og:description', description);
    setTag('meta', 'property', 'og:image', img);
    setTag('meta', 'name', 'twitter:title', title);
    setTag('meta', 'name', 'twitter:description', description);
    setTag('meta', 'name', 'twitter:image', img);
  }, [title, description, path, image, noindex]);
}
