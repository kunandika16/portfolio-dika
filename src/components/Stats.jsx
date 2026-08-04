import { Shield, Target, Zap, Globe, Cpu, Cloud } from 'lucide-react';

export default function Stats() {
  const logos = [
    { name: "Acme Corp", icon: <Globe size={24} /> },
    { name: "Nexus", icon: <Zap size={24} /> },
    { name: "Apex", icon: <Target size={24} /> },
    { name: "Horizon", icon: <Cloud size={24} /> },
    { name: "Vanguard", icon: <Shield size={24} /> },
    { name: "Quantum", icon: <Cpu size={24} /> }
  ];

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
              500+
            </div>
            <div className="text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-widest text-sm">Finished Projects</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-primary mb-3">
              100+
            </div>
            <div className="text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-widest text-sm">Brands</div>
          </div>
        </div>
      </div>

      {/* Infinite Logo Slider */}
      <div className="w-full overflow-hidden flex flex-col justify-center bg-slate-50/50 dark:bg-slate-800/50 py-12 border-y border-slate-100 dark:border-slate-800 relative">
        <p className="text-center text-sm font-medium text-slate-400 dark:text-slate-400 mb-8 uppercase tracking-widest">Trusted by industry leaders</p>
        
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50/50 dark:from-slate-800/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50/50 dark:from-slate-800/50 to-transparent z-10 pointer-events-none" />
        
        <div className="flex w-max animate-slide hover:pause">
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div key={i} className="w-[200px] md:w-[250px] flex-shrink-0 flex justify-center items-center gap-2 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
              {logo.icon}
              <span className="text-xl font-bold text-slate-700 dark:text-slate-300">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}