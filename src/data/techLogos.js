// Pemetaan tech stack -> slug & warna resmi Simple Icons (CDN)
// URL: https://cdn.simpleicons.org/{slug}/{color}

const techLogos = {
  React: { slug: "react", color: "61DAFB" },
  "React.js": { slug: "react", color: "61DAFB" },
  ReactJS: { slug: "react", color: "61DAFB" },
  "React Native": { slug: "react", color: "61DAFB" },
  "Next.js": { slug: "nextdotjs", color: "000000" },
  Vue: { slug: "vuedotjs", color: "4FC08D" },
  Angular: { slug: "angular", color: "DD0031" },
  "Node.js": { slug: "nodedotjs", color: "5FA04E" },
  Express: { slug: "express", color: "000000" },
  Tailwind: { slug: "tailwindcss", color: "06B6D4" },
  MaterialUI: { slug: "mui", color: "007FFF" },
  Laravel: { slug: "laravel", color: "FF2D20" },
  Python: { slug: "python", color: "3776AB" },
  PHP: { slug: "php", color: "777BB4" },
  CodeIgniter: { slug: "codeigniter", color: "EF4223" },
  Firebase: { slug: "firebase", color: "DD2C00" },
  MongoDB: { slug: "mongodb", color: "47A248" },
  PostgreSQL: { slug: "postgresql", color: "4169E1" },
  MySQL: { slug: "mysql", color: "4479A1" },
  Oracle: { slug: "oracle", color: "F80000" },
  Prisma: { slug: "prisma", color: "2D3748" },
  "Framer Motion": { slug: "framer", color: "0055FF" },
  Vite: { slug: "vite", color: "646CFF" },
};

export function getTechLogo(name) {
  const entry = techLogos[name];
  if (!entry) return null;
  return {
    name,
    url: `https://cdn.simpleicons.org/${entry.slug}/${entry.color}`,
  };
}

export default techLogos;
