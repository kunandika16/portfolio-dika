import { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight, Images, MonitorSmartphone, Layers, Wrench, X } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import caseStudies from '../data/caseStudies';
import { getTechLogo } from '../data/techLogos';

export default function ArticlePage() {
  const { id } = useParams();
  const article = caseStudies[id];
  const [lightbox, setLightbox] = useState(null); // { index } dari gallery

  // Fallback ketika id tidak ditemukan
  if (!article) {
    return (
      <div className="pt-32 pb-24 max-w-[1200px] mx-auto px-6 lg:px-12 bg-white dark:bg-slate-900">
        <Link to="/work" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all font-medium text-slate-700 dark:text-slate-300 text-sm shadow-sm mb-12 w-max">
          <ArrowLeft size={16} /> Back
        </Link>
        <div className="text-center py-24">
          <div className="text-6xl mb-6 font-bold text-slate-200 dark:text-slate-700">404</div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Case study tidak ditemukan</h1>
          <p className="text-slate-500 dark:text-slate-400 mb-8">Halaman case study yang Anda cari tidak tersedia.</p>
          <Link to="/work" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 transition-colors">
            Lihat semua project <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 max-w-[1200px] mx-auto px-6 lg:px-12 bg-white dark:bg-slate-900">

      {/* Back Button */}
      <Link to="/work" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all font-medium text-slate-700 dark:text-slate-300 text-sm shadow-sm mb-12 w-max">
        <ArrowLeft size={16} /> Back
      </Link>

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl"
      >
        <h1 className="text-3xl md:text-4xl lg:text-[42px] font-medium text-slate-900 dark:text-white mb-6 leading-[1.2] tracking-tight">
          {article.title}
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-[17px] leading-relaxed mb-12">
          {article.subtitle}
        </p>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-full aspect-video rounded-[24px] overflow-hidden mb-16 border border-slate-100 dark:border-slate-700 shadow-sm"
      >
        <img src={article.heroImage} alt={article.title} className="w-full h-full object-cover" loading="lazy" />
      </motion.div>

      {/* Meta Info Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-slate-100 dark:border-slate-700 mb-16">
        <div>
          <h4 className="text-slate-900 dark:text-white font-semibold text-[15px] mb-2">Company</h4>
          <p className="text-slate-500 dark:text-slate-400 text-[15px]">{article.company}</p>
        </div>
        <div>
          <h4 className="text-slate-900 dark:text-white font-semibold text-[15px] mb-2">Role</h4>
          <p className="text-slate-500 dark:text-slate-400 text-[15px]">{article.role}</p>
        </div>
        <div>
          <h4 className="text-slate-900 dark:text-white font-semibold text-[15px] mb-2">Scope</h4>
          <p className="text-slate-500 dark:text-slate-400 text-[15px]">{article.scope}</p>
        </div>
        <div>
          <h4 className="text-slate-900 dark:text-white font-semibold text-[15px] mb-2">Period</h4>
          <p className="text-slate-500 dark:text-slate-400 text-[15px]">{article.period}</p>
        </div>
      </div>

      {/* Overview Section */}
      <div className="max-w-[800px] mb-24">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Overview</h2>
        <p className="text-slate-500 dark:text-slate-400 text-[17px] leading-relaxed">
          {article.overview}
        </p>
      </div>

      {/* Diagonal Divider */}
      <div className="w-full h-8 mb-24 border-y border-slate-100/50 opacity-30"
           style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 4px, #cbd5e1 4px, #cbd5e1 5px)" }}>
      </div>

      {/* Challenges Section */}
      <div className="max-w-[1000px] mb-24">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">The Challenges</h2>
        <p className="text-slate-500 dark:text-slate-400 text-[17px] leading-relaxed mb-12">
          Setiap project lahir dari permasalahan nyata yang dihadapi pengguna atau bisnis. Berikut tantangan utama yang coba dipecahkan:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {article.challenges.map((challenge, index) => (
            <div key={index}>
              <div className="text-indigo-600 dark:text-indigo-400 font-bold text-xl mb-3">{String(index + 1).padStart(2, '0')}</div>
              <h3 className="text-slate-900 dark:text-white font-medium text-[17px] mb-3">{challenge.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-[15px]">{challenge.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Diagonal Divider */}
      <div className="w-full h-8 mb-24 border-y border-slate-100/50 opacity-30"
           style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 4px, #cbd5e1 4px, #cbd5e1 5px)" }}>
      </div>

      {/* The Solution Section */}
      <div className="max-w-[1000px] mb-24">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">The Solution</h2>
        <p className="text-slate-500 dark:text-slate-400 text-[17px] leading-relaxed mb-12">
          {article.solution}
        </p>
      </div>

      {/* Features Section */}
      <div className="max-w-[1000px] mb-24">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center border border-indigo-100 dark:border-indigo-500/20">
            <Layers className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Key Features</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {article.features.map((feature) => (
            <div key={feature.title} className="bg-slate-50/50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700 p-8 rounded-[24px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-indigo-600/10 flex items-center justify-center">
                  <MonitorSmartphone className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-slate-900 dark:text-white font-medium text-[17px]">{feature.title}</h3>
              </div>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-[15px]">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Screenshot */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full rounded-[24px] overflow-hidden mb-24 border border-slate-100 shadow-sm"
      >
        <img src={article.screenshots[0]} alt={`${article.title} screenshot`} className="w-full object-cover" loading="lazy" />
      </motion.div>

      {/* Diagonal Divider */}
      <div className="w-full h-8 mb-24 border-y border-slate-100/50 opacity-30"
           style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 4px, #cbd5e1 4px, #cbd5e1 5px)" }}>
      </div>

      {/* Tech Stack */}
      <div className="max-w-[1000px] mb-24">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center border border-emerald-100 dark:border-emerald-500/20">
            <Wrench className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
          </div>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Tech Stack</h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {article.stack.map((tech) => {
            const logo = getTechLogo(tech);
            return (
              <span key={tech} className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm font-medium rounded-full shadow-sm">
                {logo && <img src={logo.url} alt={tech} className="w-4 h-4" loading="lazy" />}
                {tech}
              </span>
            );
          })}
        </div>
      </div>

      {/* Result Section */}
      <div className="max-w-[1000px] mb-20">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Result</h2>
        <p className="text-slate-600 dark:text-slate-300 text-[16px] leading-relaxed mb-6">
          {article.result}
        </p>

        {article.link && (
          <Link to={article.link} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 transition-colors">
            Kunjungi project <ArrowUpRight size={16} />
          </Link>
        )}
      </div>

      {/* Gallery Section */}
      {article.gallery && article.gallery.length > 0 && (
        <div className="max-w-[1000px]">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center border border-purple-100 dark:border-purple-500/20">
              <Images className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Gallery</h2>
              <p className="text-slate-500 dark:text-slate-400 text-[15px] mt-1">Klik gambar untuk melihat detail.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {article.gallery.map((src, index) => (
              <button
                key={src}
                onClick={() => setLightbox({ index })}
                className="group relative rounded-[24px] overflow-hidden border border-slate-100 shadow-sm cursor-pointer text-left"
              >
                <img src={src} alt={`${article.title} gallery ${index + 1}`} className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute bottom-4 left-4 text-white font-semibold text-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Lihat detail
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox Modal — dirender via portal ke body agar tidak terpengaruh
          overflow-hidden / filter pada container App */}
      {lightbox && article.gallery && createPortal(
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-5xl bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={article.gallery[lightbox.index]}
                alt={`${article.title} detail ${lightbox.index + 1}`}
                className="w-full max-h-[80vh] object-contain bg-slate-50"
              />

              {/* Nav Arrows */}
              <button
                onClick={() => setLightbox({ index: (lightbox.index - 1 + article.gallery.length) % article.gallery.length })}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-md transition-colors shadow-lg"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={() => setLightbox({ index: (lightbox.index + 1) % article.gallery.length })}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-md transition-colors shadow-lg"
              >
                <ChevronRight size={22} />
              </button>

              {/* Counter & Close */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs font-mono px-3 py-1.5 rounded-full backdrop-blur-md">
                {lightbox.index + 1} / {article.gallery.length}
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors border border-white/10 z-10"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>,
        document.body
      )}

    </div>
  )
}
