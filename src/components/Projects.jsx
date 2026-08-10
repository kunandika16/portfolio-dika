import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getTechLogo } from '../data/techLogos';

const projectsData = {
  "Web App": [
    { id: 15, title: "Travel Ikatte", desc: "Website penyedia jasa tour explore Sulawesi — pemesanan paket tour, penginapan, transportasi.", stack: ["NextJs", "Express", "PostgreSQL", "Cloudflare", "Redis"], img: "/images/cover/travel.webp" },
    { id: 16, title: "Hikmah Laundry", desc: "Sistem informasi laundry — pencatatan, management operasional, tracking orderan.", stack: ["NextJs", "TailwindCSS", "Express", "Postgres", "Minio"], img: "/images/cover/laundry.webp" },
    { id: 17, title: "Distro Muslim", desc: "Ecommerce pakaian muslim Makassar dengan WooCommerce, payment gateway, dan RajaOngkir.", stack: ["WordPress", "WooCommerce", "RajaOngkir"], img: "/images/cover/distro-makassar.webp" },
    { id: 18, title: "BisnesLab", desc: "Landing page produk digital + checkout screen dengan WooCommerce headless.", stack: ["React", "WooCommerce", "NextJs"], img: "/images/cover/bisneslab.webp" },
    { id: 1, title: "ITMS", desc: "Integrated Talent Management System with HR analytics.", stack: ["ReactJS", "MaterialUI", "Redis", "Express", "PostgreSQL",  ], img: "/images/projects/itms/itms.webp" },
    { id: 3, title: "Orlens", desc: "Organization and Job Management platform.", stack: ["ReactTS", "Go", "Postgres", "MaterialUI", "ReactFlow"], img: "/images/projects/orlen/cover.webp" },
    { id: 8, title: "Ansel Enamel", desc: "Calculator Tank: Rekomendasi Hitungan Kebutuhan Tank.", stack: ["NextJs", "AppScript", "Vercel", "Shadcn"], img: "/images/projects/ansal/gfst.webp" },
    { id: 9, title: "CGN Logistik", desc: "Sistem Informasi Management Logistik dan Landing Page.", stack: ["Laravel", "MySQL", "TailwindCSS"], img: "/images/projects/cgn-logistik/cgn-cover.webp" },
    { id: 10, title: "Ide Tour Travel", desc: "Landing Page Travel Umroh.", stack: ["React", "Framer Motion", "Tailwind"], img: "/images/projects/idetour/travel.webp" },
    { id: 11, title: "Sistem Informasi Dinas", desc: "Sistem Informasi Dinas Kelautan dan Perikanan Sulawesi Selatan.", stack: ["PHP", "CodeIgniter", "MySQL"], img: "/images/projects/sistem_dinas.webp" },
    { id: 14, title: "Uangku Web", desc: "Pencatatan keuangan dengan AI analytics, wallet, goals, dan recurring.", stack: ["NextJs", "Postgres", "LLM"], img: "/images/projects/uangku/uangku.webp" }
  ],
  "Mobile Apps": [
    { id: 6, title: "TemuHobi.com", desc: "Platform yang mempertemukan pegiat hobi dan komunitas, meraih penghargaan dari Kemenparekraf.", stack: ["ReactTS", "AntDesign", "Express", "PostgreSQL", "Cloudflare"], img: "/images/projects/temuhobi/temuhobi-cover.webp" },
    { id: 7, title: "Uangku", desc: "Aplikasi Pencatatan Keuangan berbasis WhatsApp.", stack: ["Meta WA Business Official"], img: "/images/projects/uangku/uangku-mobile.webp" },
    { id: 12, title: "MusicRent", desc: "Aplikasi penyewaan alat musik dengan sistem booking dan manajemen inventaris.", stack: ["React Native", "Firebase", "MySQL"], img: "/images/projects/musicrent.webp" },
    { id: 13, title: "NFC Absensi", desc: "Aplikasi absensi sekolah menggunakan NFC melalui mobile app.", stack: ["Flutter", "AppScript", "NFC"], img: "/images/projects/nfcPresensi.webp" }
  ],
  "UI/UX": []
};

export default function Projects() {
  const categories = ["Web App", "Mobile Apps", "UI/UX"];
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section className="py-24 relative bg-slate-50/50 dark:bg-slate-900/40 bg-grid-fine" id="work">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">Selected Work</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">A collection of software projects — web applications, mobile apps, and interface design — built to solve real problems.</p>
        </div>

        {/* Tab Indicator System with Framer Motion (Equal Size Tabs) */}
        <div className="flex w-full max-w-3xl mx-auto bg-slate-100/80 dark:bg-slate-800/80 p-1.5 rounded-full mb-16 border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-md shadow-sm relative z-20">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`relative flex-1 py-3 md:py-3.5 rounded-full text-xs md:text-sm font-semibold transition-colors duration-300 outline-none ${activeTab === cat ? 'text-blue-900 dark:text-blue-100' : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'}`}
            >
              {activeTab === cat && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 bg-white dark:bg-slate-700 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-slate-200/50 dark:border-slate-600/50"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 block text-center truncate px-2">{cat}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid with smooth transition */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projectsData[activeTab].map(project => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                category={activeTab} 
              />
            ))}
          </motion.div>
        </AnimatePresence>
        
        {/* Empty State Fallback */}
        {projectsData[activeTab].length === 0 && (
          <div className="text-center py-20 text-slate-500 dark:text-slate-400">
             <p>More projects coming soon.</p>
          </div>
        )}

      </div>
    </section>
  )
}

function ProjectCard({ project, category }) {
  if (category === "Web App") {
    return (
      <Link to={`/article/${project.id}`} className="block h-full">
        <motion.div 
          whileHover={{ y: -8 }}
          className="bg-white dark:bg-slate-800/80 rounded-[20px] p-4 border border-slate-100 dark:border-slate-700 shadow-xl shadow-slate-200/40 dark:shadow-black/20 group overflow-hidden flex flex-col h-full"
        >
          <div className="w-full h-48 rounded-xl overflow-hidden relative mb-5 border border-slate-100 dark:border-slate-700 group-hover:shadow-md transition-all">
             <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          </div>
          <div className="px-1 flex flex-col flex-grow">
             <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white group-hover:text-primary transition-colors">{project.title}</h3>
             <p className="text-sm text-slate-500 dark:text-slate-400 mb-5 line-clamp-2">{project.desc}</p>
             
             <div className="flex flex-wrap gap-2 mb-6 mt-auto">
               {project.stack.map(s => {
                 const logo = getTechLogo(s);
                 return (
                   <span key={s} className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-semibold tracking-wide uppercase bg-blue-50/50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-md border border-blue-100/50 dark:border-blue-500/20">
                     {logo && <img src={logo.url} alt={s} className="w-3 h-3" loading="lazy" />}
                     {s}
                   </span>
                 );
               })}
             </div>
             
             <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
               <span className="text-sm font-semibold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                 View Project <ExternalLink size={14} />
               </span>
             </div>
          </div>
         </motion.div>
      </Link>
    )
  }

  // Mobile Apps & UI/UX — tampilkan dengan gaya yang sama (Link ke case study)
  return (
    <Link to={`/article/${project.id}`} className="block h-full">
      <motion.div 
        whileHover={{ y: -8 }}
        className="bg-white dark:bg-slate-800/80 rounded-[20px] p-4 border border-slate-100 dark:border-slate-700 shadow-xl shadow-slate-200/40 dark:shadow-black/20 group overflow-hidden flex flex-col h-full"
      >
        <div className="w-full h-48 rounded-xl overflow-hidden relative mb-5 border border-slate-100 dark:border-slate-700 group-hover:shadow-md transition-all">
           <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
        </div>
        <div className="px-1 flex flex-col flex-grow">
           <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white group-hover:text-primary transition-colors">{project.title}</h3>
           <p className="text-sm text-slate-500 dark:text-slate-400 mb-5 line-clamp-2">{project.desc}</p>
           
           <div className="flex flex-wrap gap-2 mb-6 mt-auto">
             {project.stack.map(s => {
               const logo = getTechLogo(s);
               return (
                 <span key={s} className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-semibold tracking-wide uppercase bg-blue-50/50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-md border border-blue-100/50 dark:border-blue-500/20">
                   {logo && <img src={logo.url} alt={s} className="w-3 h-3" loading="lazy" />}
                   {s}
                 </span>
               );
             })}
           </div>
           
           <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
             <span className="text-sm font-semibold text-primary flex items-center gap-1 hover:gap-2 transition-all">
               View Project <ExternalLink size={14} />
             </span>
           </div>
        </div>
      </motion.div>
    </Link>
  )
}