// Pemetaan tech stack -> slug & warna resmi Simple Icons (CDN)
// URL: https://cdn.simpleicons.org/{slug}/{color}

const techLogos = {
  React: { slug: "react", color: "61DAFB" },
  "React.js": { slug: "react", color: "61DAFB" },
  ReactJS: { slug: "react", color: "61DAFB" },
  ReactTS: { slug: "react", color: "61DAFB" },
  AntDesign: { slug: "antdesign", color: "0170FE" },
  "React Native": { slug: "react", color: "61DAFB" },
  "Next.js": { slug: "nextdotjs", color: "000000" },
  NextJs: { slug: "nextdotjs", color: "000000" },
  AppScript: { slug: "googlesheets", color: "34A853" },
  Vercel: { slug: "vercel", color: "000000" },
  Shadcn: { slug: "shadcnui", color: "000000" },
  Vue: { slug: "vuedotjs", color: "4FC08D" },
  Angular: { slug: "angular", color: "DD0031" },
  "Node.js": { slug: "nodedotjs", color: "5FA04E" },
  Express: { slug: "express", color: "000000" },
  Tailwind: { slug: "tailwindcss", color: "06B6D4" },
  TailwindCSS: { slug: "tailwindcss", color: "06B6D4" },
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
  Redis: { slug: "redis", color: "FF4438" },
  Kubernetes: { slug: "kubernetes", color: "326CE5" },
  Jenkins: { slug: "jenkins", color: "D24939" },
  Cloudflare: { slug: "cloudflare", color: "F38020" },
  Flutter: { slug: "flutter", color: "02569B" },
  NFC: { slug: "nfc", color: "002E5B" },
  Docker: { slug: "docker", color: "2496ED" },
  GraphQL: { slug: "graphql", color: "E10098" },
  TypeScript: { slug: "typescript", color: "3178C6" },
  JavaScript: { slug: "javascript", color: "F7DF1E" },
  Postgres: { slug: "postgresql", color: "4169E1" },
  LLM: { slug: "openai", color: "412991" },
  "Meta WA Business Official": { slug: "whatsapp", color: "25D366" },
  "Tailwind CSS": { slug: "tailwindcss", color: "06B6D4" },
  "Spring Boot": { slug: "spring", color: "6DB33F" },
  Figma: { slug: "figma", color: "F24E1E" },
  Git: { slug: "git", color: "F05032" },
  Go: { slug: "go", color: "00ADD8" },
  ReactFlow: { slug: "react", color: "FF4154" },
  WordPress: { slug: "wordpress", color: "21759B" },
  WooCommerce: { slug: "woocommerce", color: "96588A" },
  Minio: { slug: "minio", color: "C72E49" },
  "RajaOngkir": { slug: "map", color: "4285F4" },
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
