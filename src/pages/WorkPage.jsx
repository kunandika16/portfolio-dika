import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getTechLogo } from '../data/techLogos';

const categories = ["Web App", "Mobile Apps", "UI/UX"];

const projectsData = {
  "Web App": [
    {
      id: 1,
      title: "ITMS (Integrated Talent Management System)",
      company: "Internal",
      year: "2024",
      description: "Sistem manajemen bakat yang terintegrasi dengan HR analytics dan fitur pengelolaan karyawan yang modern dan efisien.",
      tags: ["Talent Management", "Dashboard", "Web App"],
      stack: ["ReactJS", "MaterialUI", "Redis", "Express", "PostgreSQL", "Kubernetes", "Jenkins"],
      images: ["/images/projects/itms/itms.png"],
      bgColor: "bg-blue-50/60"
    },
    {
      id: 2,
      title: "Explora",
      company: "PT Pos Indonesia",
      year: "2023",
      description: "Knowledge Management & Event Management untuk memfasilitasi pertukaran pengetahuan dan pengelolaan acara perusahaan.",
      tags: ["Knowledge Management", "Event Management", "Web App"],
      stack: ["ReactJS", "MaterialUI", "Express", "PostgreSQL"],
      images: ["/images/projects/explora/layar.png"],
      bgColor: "bg-fuchsia-50/60"
    },
    {
      id: 3,
      title: "Orlens",
      company: "Internal",
      year: "2023",
      description: "Sistem Organization and Job Management yang membantu perusahaan dalam memetakan struktur organisasi dan pekerjaan.",
      tags: ["Organization", "Management", "Dashboard"],
      stack: ["Vue", "Laravel", "MySQL"],
      images: ["/images/projects/orlens.png"],
      bgColor: "bg-emerald-50/60"
    },
    {
      id: 4,
      title: "ARMS",
      company: "Internal",
      year: "2024",
      description: "Attrition Retention Management System untuk menganalisis dan mengelola retensi karyawan di perusahaan.",
      tags: ["Retention", "Analytics", "Dashboard"],
      stack: ["React", "Python", "PostgreSQL"],
      images: ["/images/projects/arms.png"],
      bgColor: "bg-amber-50/60"
    },
    {
      id: 5,
      title: "SIMAsuransi",
      company: "Client",
      year: "2023",
      description: "Sistem Informasi Management Asuransi untuk mempermudah proses klaim dan pengelolaan polis asuransi.",
      tags: ["Insurance", "Management", "Web App"],
      stack: ["Angular", "Spring Boot", "Oracle"],
      images: ["/images/projects/simasuransi.png"],
      bgColor: "bg-blue-50/60"
    },
    {
      id: 8,
      title: "AnselEnamel Calculator Tank",
      company: "Client",
      year: "2024",
      description: "Aplikasi Rekomendasi Hitungan Kebutuhan Tank berdasarkan volume dan luas lahan dengan antarmuka yang user-friendly.",
      tags: ["Calculator", "Industrial", "Web App"],
      stack: ["React", "Tailwind", "Vite"],
      images: ["/images/projects/anselenamel.png"],
      bgColor: "bg-slate-50/60"
    },
    {
      id: 9,
      title: "CGN Logistik",
      company: "CGN",
      year: "2024",
      description: "Sistem Informasi Management Logistik dan Landing Page untuk perusahaan logistik modern.",
      tags: ["Logistics", "Management", "Landing Page"],
      stack: ["Next.js", "Prisma", "PostgreSQL"],
      images: ["/images/projects/cgn.png"],
      bgColor: "bg-indigo-50/60"
    },
    {
      id: 10,
      title: "IdeTravel.com",
      company: "Client",
      year: "2024",
      description: "Landing Page Travel Umroh yang elegan dan informatif untuk menarik calon jemaah.",
      tags: ["Landing Page", "Travel", "Web Design"],
      stack: ["React", "Framer Motion", "Tailwind"],
      images: ["/images/projects/idetravel.png"],
      bgColor: "bg-emerald-50/60"
    },
    {
      id: 11,
      title: "Sistem Informasi Dinas Kelautan dan Perikanan Sulawesi Selatan",
      company: "Government",
      year: "2023",
      description: "Sistem informasi dashboard untuk memantau data kelautan dan perikanan di wilayah Sulawesi Selatan.",
      tags: ["Government", "Information System", "Dashboard"],
      stack: ["PHP", "CodeIgniter", "MySQL"],
      images: ["/images/projects/sistem_dinas.png"],
      bgColor: "bg-cyan-50/60"
    }
  ],
  "Mobile Apps": [
    {
      id: 6,
      title: "TemuHobi.com",
      company: "Startup",
      year: "2024",
      description: "Aplikasi yang mempertemukan pegiat hobi dan komunitas dengan fitur sosial yang interaktif dan dinamis.",
      tags: ["Mobile App", "Community", "Social"],
      stack: ["React Native", "Firebase", "Node.js"],
      images: ["/images/projects/temuhobi.png"],
      bgColor: "bg-orange-50/60"
    },
    {
      id: 7,
      title: "Uangku",
      company: "Startup",
      year: "2024",
      description: "Aplikasi pencatatan keuangan inovatif yang terintegrasi penuh dengan WhatsApp untuk kemudahan input transaksi.",
      tags: ["Finance", "WhatsApp Integration", "Mobile App"],
      stack: ["Node.js", "WhatsApp API", "MongoDB"],
      images: ["/images/projects/uangku.png"],
      bgColor: "bg-green-50/60"
    }
  ],
  "UI/UX": []
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
          className="w-full h-full object-cover rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-700/50"
          alt="Project mockup"
          loading="lazy"
        />
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/40 hover:bg-white/70 text-slate-800 dark:bg-white/10 dark:hover:bg-white/25 dark:text-white backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-sm z-10"
      >
        <ChevronLeft size={20} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/40 hover:bg-white/70 text-slate-800 dark:bg-white/10 dark:hover:bg-white/25 dark:text-white backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-sm z-10"
      >
        <ChevronRight size={20} />
      </button>
      
      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, idx) => (
          <div key={idx} className={`h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-slate-800 dark:bg-white w-5' : 'bg-slate-800/30 dark:bg-white/30 w-2 hover:bg-slate-800/50 dark:hover:bg-white/50'}`} />
        ))}
      </div>
    </div>
  );
}

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <div className="pt-36 pb-24 max-w-[1400px] mx-auto px-6 lg:px-12 min-h-screen bg-white dark:bg-slate-900 rounded-[40px] md:rounded-[60px] m-4 bg-grid relative">
      <h1 className="text-4xl md:text-[44px] font-bold text-slate-900 dark:text-white mb-14 tracking-tight">Explore my latest works</h1>
      
      {/* Tabs */}
      <div className="flex gap-10 border-b border-slate-200/60 dark:border-slate-700 mb-16 relative">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`pb-5 relative text-[15px] font-semibold transition-colors ${activeTab === cat ? 'text-slate-900 dark:text-white' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'}`}
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
                <div className="w-full lg:w-[38%] bg-[#f8fafc] dark:bg-slate-800/80 rounded-[32px] p-10 lg:p-12 flex flex-col border border-slate-100 dark:border-slate-700 shadow-sm">
                  <h2 className="text-2xl md:text-[28px] leading-[1.3] font-bold text-slate-900 dark:text-white mb-5">{project.title}</h2>
                  <div className="text-slate-500 dark:text-slate-400 text-[15px] font-medium mb-8">
                    {project.company} <span className="mx-2 text-slate-300 dark:text-slate-600">•</span> {project.year}
                  </div>
                  
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-10 text-[15px]">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2.5 mb-14">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3.5 py-1.5 bg-white dark:bg-slate-700/60 border border-slate-200/80 dark:border-slate-600/80 text-slate-500 dark:text-slate-300 text-[13px] font-medium rounded-full shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.stack && (
                    <div className="flex flex-wrap gap-2.5 mb-14 -mt-6">
                      {project.stack.map(tech => {
                        const logo = getTechLogo(tech);
                        return (
                          <span key={tech} className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white dark:bg-slate-700/60 border border-slate-200/80 dark:border-slate-600/80 text-slate-600 dark:text-slate-300 text-[13px] font-medium rounded-full shadow-sm">
                            {logo && <img src={logo.url} alt={tech} className="w-3.5 h-3.5" loading="lazy" />}
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  )}
                  
                  <Link to={`/article/${project.id}`} className="mt-auto text-slate-700 dark:text-slate-200 font-bold text-[15px] flex items-center gap-2 hover:gap-3 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all w-max group">
                    Read case study <ArrowRight size={16} className="text-slate-400 dark:text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                  </Link>
                </div>

                {/* Right Slider */}
                <div className="w-full lg:w-[62%] min-h-[400px] lg:min-h-[560px]">
                  <ImageSlider images={project.images} bgColor={project.bgColor} />
                </div>

              </div>
            ))}
            
            {projectsData[activeTab].length === 0 && (
              <div className="text-center py-20 text-slate-500 dark:text-slate-400">
                More projects coming soon.
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  )
}