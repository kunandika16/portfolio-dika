import { getTechLogo } from '../data/techLogos';

const techs = [
  "React",
  "NextJs",
  "Express",
  "PostgreSQL",
  "TailwindCSS",
  "Laravel",
  "Vue",
  "Angular",
  "Node.js",
  "Python",
  "PHP",
  "CodeIgniter",
  "MySQL",
  "MongoDB",
  "Firebase",
  "React Native",
  "Flutter",
  "Redis",
  "Kubernetes",
  "Docker",
  "GraphQL",
  "Prisma",
  "TypeScript",
  "JavaScript",
  "Framer Motion",
  "Vite",
  "Jenkins",
  "Cloudflare",
];

export default function Stats() {

  return (
    <section className="py-24 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 relative z-20">
      <div className="max-w-6xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <div className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-primary mb-3">
              5+
            </div>
            <div className="text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-widest text-sm">Years Experience</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-primary mb-3">
              50+
            </div>
            <div className="text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-widest text-sm">Finished Projects</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-primary mb-3">
              30+
            </div>
            <div className="text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-widest text-sm">Brands</div>
          </div>
        </div>
      </div>

      {/* Tech Stack Slider */}
      <div className="w-full overflow-hidden flex flex-col justify-center bg-slate-50/50 dark:bg-slate-800/50 py-12 border-y border-slate-100 dark:border-slate-800 relative bg-dots">
        <p className="text-center text-sm font-medium text-slate-400 dark:text-slate-400 mb-8 uppercase tracking-widest">Tech stack yang saya kuasai</p>
        
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50/50 dark:from-slate-800/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50/50 dark:from-slate-800/50 to-transparent z-10 pointer-events-none" />
        
        <div className="flex w-max animate-slide hover:pause">
          {[...techs, ...techs].map((tech, i) => {
            const logo = getTechLogo(tech);
            return (
              <div key={i} className="w-[180px] md:w-[220px] flex-shrink-0 flex flex-col items-center justify-center gap-3 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                {logo ? (
                  <img src={logo.url} alt={tech} className="w-9 h-9" loading="lazy" />
                ) : (
                  <div className="w-9 h-9 rounded-xl bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 font-bold text-xs">
                    {tech.slice(0, 1)}
                  </div>
                )}
                <span className="text-sm font-semibold text-slate-600 dark:text-slate-300 whitespace-nowrap">{tech}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}