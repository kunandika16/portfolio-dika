import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const sliderImages = [
  "/images/cover/travel.webp",
  "/images/cover/laundry.webp",
  "/images/cover/distro-makassar.webp",
  "/images/cover/bisneslab.webp",
  "/images/projects/ansal/gfst.webp",
  "/images/projects/itms/itms.webp",
  "/images/projects/temuhobi/temuhobi-cover.webp",
  "/images/projects/musicrent.webp",
  "/images/projects/nfcPresensi.webp",
];

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

export default function Hero() {
  return (
    <section className="relative pt-28 pb-8 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
      
      {/* Ambient orbs — subtle atmospheric depth */}
      <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-400/10 rounded-full blur-[120px] -z-10 pointer-events-none animate-float" />
      <div className="absolute top-[15%] right-[5%] w-[350px] h-[350px] bg-violet-400/8 rounded-full blur-[100px] -z-10 pointer-events-none animate-float-delayed" />
      <div className="absolute bottom-[20%] left-[5%] w-[300px] h-[300px] bg-sky-400/8 rounded-full blur-[100px] -z-10 pointer-events-none animate-float-delayed" />

      {/* Fine dotted pattern — soft, elegant texture behind the headline */}
      <div className="absolute inset-0 bg-dots bg-pattern-fade -z-10 pointer-events-none" />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="text-center max-w-5xl mx-auto px-4 z-10 relative mt-12"
      >
        {/* Glass chip badge */}
        <motion.div
          variants={fadeUp}
          className="glass inline-flex items-center gap-3 px-3 py-2.5 pr-5 rounded-full shadow-[0_8px_32px_-8px_rgba(15,23,42,0.08)] mb-8"
        >
          <img src="/images/profil/icon.png" alt="Andika Rian Ansari logo" className="w-8 h-8 rounded-full object-cover shadow-sm" />
          <span className="text-[13px] font-semibold text-slate-700 dark:text-slate-200 tracking-wide">Andika Rian Ansari</span>
          <Sparkles size={14} className="text-indigo-400 opacity-70" />
        </motion.div>

        {/* Headline — Sora display font */}
        <motion.h1
          variants={fadeUp}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.08] max-w-4xl mx-auto"
        >
          Turning Ideas Into
          <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-500 text-shimmer">
            Digital Experiences
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={fadeUp}
          className="font-sans text-base md:text-lg text-slate-500 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          I turn ideas into fast, precise digital products — clean web apps, dashboards, and mobile experiences engineered to work and shipped on time.
        </motion.p>

        {/* CTA buttons — glass styling */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link to="/work">
            <Button
              size="lg"
              className="rounded-full px-8 h-[52px] text-[15px] font-semibold bg-slate-900 hover:bg-slate-800 text-white shadow-[0_16px_40px_-12px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_-12px_rgba(15,23,42,0.4)]"
            >
              View My Work <ArrowRight size={16} className="ml-1" />
            </Button>
          </Link>
          <a
            href="https://wa.me/6285398212081?text=halo%20kak%20saya%20mau%20info%20terkait%20jasa%20pembuatan%20aplikasi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="rounded-full px-8 h-[52px] text-[15px] font-semibold glass-strong text-slate-700 dark:text-slate-200 hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-1 shadow-[0_12px_36px_-12px_rgba(15,23,42,0.1)] hover:shadow-[0_16px_40px_-12px_rgba(15,23,42,0.15)]"
            >
              Get In Touch
            </Button>
          </a>
        </motion.div>

        {/* Glass stat pills — subtle credibility */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-3 mt-10"
        >
          {[
            { label: '5+ Years', value: 'Experience' },
            { label: '50+ Projects', value: 'Delivered' },
            { label: '100+ Brands', value: 'Collaborated' },
          ].map((stat, i) => (
            <div
              key={i}
              className="glass-subtle rounded-full px-5 py-2.5 flex items-center gap-2 text-[13px]"
            >
              <span className="font-semibold text-slate-800 dark:text-slate-100">{stat.label}</span>
              <span className="text-slate-400/70 dark:text-slate-400 font-medium">{stat.value}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Image slider — glass-framed cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="mt-16 w-full overflow-hidden relative pb-16 pt-4 z-10"
      >
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

        <div className="flex w-max animate-slide-slow hover:pause gap-5 px-3">
          {[...sliderImages, ...sliderImages].map((img, idx) => (
            <div
              key={idx}
              className="w-[280px] md:w-[420px] lg:w-[560px] aspect-video flex-shrink-0 rounded-[20px] overflow-hidden glass shadow-[0_8px_32px_-8px_rgba(15,23,42,0.12)] group cursor-pointer relative transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_16px_48px_-8px_rgba(15,23,42,0.18)]"
            >
              <img
                src={img}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                alt="Project showcase"
                loading="lazy"
              />
              {/* Glass overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
