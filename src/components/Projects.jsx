import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Play, X } from 'lucide-react';

const projectsData = {
  "Software Development": [
    { id: 1, title: "Fintech Dashboard UI", desc: "A modern financial dashboard with real-time analytics and beautiful charts.", stack: ["React", "Tailwind", "Node.js"], img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format" },
    { id: 2, title: "E-Commerce Platform", desc: "Full-stack scalable marketplace application with a smooth checkout flow.", stack: ["Next.js", "Prisma", "Stripe"], img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format" },
    { id: 3, title: "AI Content Generator", desc: "SaaS platform leveraging advanced LLMs for rapid copywriting.", stack: ["Vue", "FastAPI", "OpenAI"], img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format" }
  ],
  "Graphic Design": [
    { id: 4, title: "Neon Cyberpunk Brand", category: "Branding", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format" },
    { id: 5, title: "Minimalist Poster Series", category: "Print Design", img: "https://images.unsplash.com/photo-1583847268964-b28ce8f30026?q=80&w=800&auto=format" },
    { id: 6, title: "Fintech App UI Kit", category: "UI/UX", img: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=800&auto=format" }
  ],
  "Video Editing": [
    { id: 7, title: "Nike Promo Commercial", duration: "01:15", type: "Ad", img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format" },
    { id: 8, title: "Travel VLOG - Japan", duration: "08:20", type: "YouTube", img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format" },
    { id: 9, title: "Tech Product Launch", duration: "00:45", type: "Reels", img: "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=800&auto=format" }
  ]
};

export default function Projects() {
  const categories = ["Software Development", "Graphic Design", "Video Editing"];
  const [activeTab, setActiveTab] = useState(categories[0]);
  const [videoModal, setVideoModal] = useState({ isOpen: false, project: null });

  return (
    <section className="py-24 relative bg-slate-50/50" id="work">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-slate-900">Selected Work</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Explore my multidisciplinary portfolio bridging the gap between aesthetic design and robust engineering.</p>
        </div>

        {/* Tab Indicator System with Framer Motion (Equal Size Tabs) */}
        <div className="flex w-full max-w-3xl mx-auto bg-slate-100/80 p-1.5 rounded-full mb-16 border border-slate-200/60 backdrop-blur-md shadow-sm relative z-20">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`relative flex-1 py-3 md:py-3.5 rounded-full text-xs md:text-sm font-semibold transition-colors duration-300 outline-none ${activeTab === cat ? 'text-blue-900' : 'text-slate-500 hover:text-slate-800'}`}
            >
              {activeTab === cat && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-slate-200/50"
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
                onVideoClick={(p) => setVideoModal({ isOpen: true, project: p })}
              />
            ))}
          </motion.div>
        </AnimatePresence>
        
        {/* Empty State Fallback */}
        {projectsData[activeTab].length === 0 && (
          <div className="text-center py-20 text-slate-500">
             <p>More projects coming soon.</p>
          </div>
        )}

      </div>

      {/* Video Modal (Mock functionality) */}
      <AnimatePresence>
        {videoModal.isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4"
            onClick={() => setVideoModal({ isOpen: false, project: null })}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden relative shadow-2xl border border-slate-800"
              onClick={e => e.stopPropagation()}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400">
                <Play size={48} className="mb-4 opacity-50" />
                <p>Mock YouTube Embed for "{videoModal.project?.title}"</p>
                <p className="text-sm mt-2 opacity-50">Because this is a frontend prototype.</p>
              </div>
              <button 
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors border border-white/10 z-10"
                onClick={() => setVideoModal({ isOpen: false, project: null })}
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

function ProjectCard({ project, category, onVideoClick }) {
  if (category === "Software Development") {
    return (
      <motion.div 
        whileHover={{ y: -8 }}
        className="bg-white rounded-[20px] p-4 border border-slate-100 shadow-xl shadow-slate-200/40 group overflow-hidden flex flex-col h-full"
      >
        <div className="w-full h-48 rounded-xl overflow-hidden relative mb-5 border border-slate-100 group-hover:shadow-md transition-all">
           <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
        </div>
        <div className="px-1 flex flex-col flex-grow">
           <h3 className="font-bold text-lg mb-2 text-slate-900 group-hover:text-primary transition-colors">{project.title}</h3>
           <p className="text-sm text-slate-500 mb-5 line-clamp-2">{project.desc}</p>
           
           <div className="flex flex-wrap gap-2 mb-6 mt-auto">
             {project.stack.map(s => (
               <span key={s} className="px-2.5 py-1 text-[10px] font-semibold tracking-wide uppercase bg-blue-50/50 text-blue-600 rounded-md border border-blue-100/50">{s}</span>
             ))}
           </div>
           
           <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
             <button className="text-sm font-semibold text-primary flex items-center gap-1 hover:gap-2 transition-all">
               View Project <ExternalLink size={14} />
             </button>
           </div>
        </div>
      </motion.div>
    )
  }

  if (category === "Graphic Design") {
    return (
      <motion.div 
        whileHover={{ y: -6 }}
        className="relative w-full h-[340px] rounded-[20px] overflow-hidden group cursor-pointer border border-slate-200/50 shadow-lg"
      >
         <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
         
         <div className="absolute bottom-0 left-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <span className="px-2.5 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-semibold uppercase rounded-md mb-3 inline-block tracking-wider border border-white/20 shadow-sm">{project.category}</span>
            <h3 className="text-white font-bold text-xl leading-tight">{project.title}</h3>
         </div>
      </motion.div>
    )
  }

  if (category === "Video Editing") {
    return (
      <motion.div 
        whileHover={{ y: -6 }}
        className="relative w-full h-[340px] rounded-[20px] overflow-hidden group cursor-pointer border border-slate-200/50 shadow-lg bg-black"
        onClick={() => onVideoClick(project)}
      >
         <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-60" loading="lazy" />
         
         {/* Center Play Button Overlay */}
         <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300 shadow-xl">
               <Play className="text-white ml-1 w-7 h-7" fill="white" />
            </div>
         </div>
         
         {/* Bottom Details */}
         <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 to-transparent flex items-end justify-between z-10">
            <div>
               <h3 className="text-white font-bold text-lg mb-1">{project.title}</h3>
               <span className="text-slate-300 text-xs font-medium tracking-wide">{project.type}</span>
            </div>
            <div className="bg-black/60 backdrop-blur-sm text-white text-xs font-mono px-2 py-1 rounded border border-white/10">
               {project.duration}
            </div>
         </div>
      </motion.div>
    )
  }

  return null;
}