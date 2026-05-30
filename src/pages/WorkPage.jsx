import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = ["Web & dashboard", "Mobile App", "Brand identity"];

const projectsData = {
  "Web & dashboard": [
    {
      id: 1,
      title: "Streamlining AI app builder experience with cleaner UI",
      company: "Walturn",
      year: "2025",
      description: "Redesigning Vibe Studio to eliminate UI clutter, surface hidden features, streamline upgrades, and make credit information visible-directly addressing user frustrations that were blocking conversions.",
      tags: ["Redesign", "Web App", "Web Design"],
      images: [
        "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=800&auto=format",
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=800&auto=format",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format"
      ],
      bgColor: "bg-blue-50/60"
    },
    {
      id: 2,
      title: "Building Amartha 'Funds' design systems",
      company: "Amartha",
      year: "2024",
      description: "Amartha's Funds product faced scalability challenges with inconsistent UI patterns and fragmented components. Learn how we built a robust design system that unified the experience and improved team velocity.",
      tags: ["Design System", "UI/UX", "Dashboard"],
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format",
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format"
      ],
      bgColor: "bg-fuchsia-50/60"
    }
  ],
  "Mobile App": [
    {
      id: 3,
      title: "NexPay Mobile Banking Experience",
      company: "NexPay",
      year: "2023",
      description: "A complete overhaul of the NexPay mobile app focusing on seamless transactions, better financial visibility, and an intuitive user interface.",
      tags: ["Mobile App", "Fintech", "UX Research"],
      images: [
        "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=800&auto=format",
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format"
      ],
      bgColor: "bg-emerald-50/60"
    }
  ],
  "Brand identity": [
    {
      id: 4,
      title: "Modernizing Acme Corp Brand",
      company: "Acme Corp",
      year: "2023",
      description: "Redefined the brand identity for Acme Corp including a new logo, typography, and color palette to appeal to a younger demographic.",
      tags: ["Branding", "Logo Design", "Guidelines"],
      images: [
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format",
        "https://images.unsplash.com/photo-1583847268964-b28ce8f30026?q=80&w=800&auto=format"
      ],
      bgColor: "bg-amber-50/60"
    }
  ]
};

function ImageSlider({ images, bgColor }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={`relative w-full h-full rounded-[32px] overflow-hidden ${bgColor} group flex items-center justify-center p-8 md:p-12 min-h-[400px] md:min-h-[500px]`}>
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full object-cover rounded-2xl shadow-xl border border-slate-200/50"
          alt="Project mockup"
          loading="lazy"
        />
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/40 hover:bg-white/70 text-slate-800 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-sm z-10"
      >
        <ChevronLeft size={20} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/40 hover:bg-white/70 text-slate-800 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-sm z-10"
      >
        <ChevronRight size={20} />
      </button>
      
      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, idx) => (
          <div key={idx} className={`h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-slate-800 w-5' : 'bg-slate-800/30 w-2 hover:bg-slate-800/50'}`} />
        ))}
      </div>
    </div>
  );
}

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <div className="pt-36 pb-24 max-w-[1400px] mx-auto px-6 lg:px-12 min-h-screen bg-white rounded-[40px] md:rounded-[60px] m-4">
      <h1 className="text-4xl md:text-[44px] font-bold text-slate-900 mb-14 tracking-tight">Explore my latest works</h1>
      
      {/* Tabs */}
      <div className="flex gap-10 border-b border-slate-200/60 mb-16 relative">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`pb-5 relative text-[15px] font-semibold transition-colors ${activeTab === cat ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
          >
            {activeTab === cat && (
              <motion.div 
                layoutId="work-active-tab"
                className="absolute left-[-16px] top-[4px] bottom-[24px] w-[3px] bg-indigo-500 rounded-full"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            {cat}
          </button>
        ))}
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-16 md:gap-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-16 md:gap-24"
          >
            {projectsData[activeTab].map(project => (
              <div key={project.id} className="flex flex-col lg:flex-row gap-8">
                
                {/* Left Content */}
                <div className="w-full lg:w-[38%] bg-[#f8fafc] rounded-[32px] p-10 lg:p-12 flex flex-col border border-slate-100 shadow-sm">
                  <h2 className="text-2xl md:text-[28px] leading-[1.3] font-bold text-slate-900 mb-5">{project.title}</h2>
                  <div className="text-slate-500 text-[15px] font-medium mb-8">
                    {project.company} <span className="mx-2 text-slate-300">•</span> {project.year}
                  </div>
                  
                  <p className="text-slate-500 leading-relaxed mb-10 text-[15px]">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2.5 mb-14">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3.5 py-1.5 bg-white border border-slate-200/80 text-slate-500 text-[13px] font-medium rounded-full shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link to={`/article/${project.id}`} className="mt-auto text-slate-700 font-bold text-[15px] flex items-center gap-2 hover:gap-3 hover:text-indigo-600 transition-all w-max group">
                    Read case study <ArrowRight size={16} className="text-slate-400 group-hover:text-indigo-600 transition-colors" />
                  </Link>
                </div>

                {/* Right Slider */}
                <div className="w-full lg:w-[62%] min-h-[400px] lg:min-h-[560px]">
                  <ImageSlider images={project.images} bgColor={project.bgColor} />
                </div>

              </div>
            ))}
            
            {projectsData[activeTab].length === 0 && (
              <div className="text-center py-20 text-slate-500">
                More projects coming soon.
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  )
}