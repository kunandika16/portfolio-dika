import { useEffect, useRef, useState } from 'react';
import { Mail, ArrowRight, AtSign } from 'lucide-react';

const WA_URL = 'https://wa.me/6285398212081?text=halo%20kak%20saya%20mau%20info%20terkait%20jasa%20pembuatan%20aplikasi';

const Instagram = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Linkedin = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Footer() {
  const footerRef = useRef(null);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setFooterHeight(entry.contentRect.height);
      }
    });
    if (footerRef.current) {
      resizeObserver.observe(footerRef.current);
    }
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <>
      {/* Spacer to push content so we can see the fixed footer beneath */}
      <div style={{ height: footerHeight }} className="w-full pointer-events-none" />

      {/* Garage Door Footer */}
      <footer ref={footerRef} className="fixed bottom-0 left-0 w-full z-0 bg-[#0B0B14] text-white flex flex-col justify-end max-h-screen">
        <div className="max-w-7xl mx-auto px-4 w-full pt-12 md:pt-20 flex flex-col relative z-20">
          {/* Thin dotted texture over the dark footer */}
          <div className="absolute inset-0 bg-dots bg-pattern-fade opacity-60 pointer-events-none" />

          <div className="relative flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 lg:gap-0">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-lg leading-[1.1]">
              Thanks for<br />
              stopping by!
            </h2>

            <div className="flex flex-col gap-6 lg:max-w-[450px]">
              <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                Feel free to reach out for collaboration purposes or just a friendly hello 👋
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:andikaryan16@gmail.com" className="flex items-center gap-3 px-5 py-3.5 rounded-lg border border-[#2a2a3a] hover:border-[#3a3a4a] bg-transparent transition-all text-sm font-medium group">
                  <Mail size={18} className="text-slate-400 group-hover:text-white transition-colors" />
                  <span className="text-slate-200">andikaryan16@gmail.com</span>
                </a>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white text-[#0B0B14] text-sm font-bold hover:bg-slate-200 transition-all shadow-lg">
                  Get in touch <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Diagonal striped divider */}
        <div className="w-full h-12 mt-16 md:mt-24 border-y border-[#1e1e2d]"
             style={{
               backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 6px, rgba(255,255,255,0.03) 6px, rgba(255,255,255,0.03) 7px)"
             }}>
        </div>

        {/* Socials & Copyright - Matching reference grid layout */}
        <div className="w-full border-b border-[#1e1e2d]">
          <div className="w-full flex flex-col xl:flex-row items-stretch text-sm text-slate-300 font-medium">
            {/* Social Links */}
            <div className="flex flex-wrap flex-1 border-r-0 xl:border-r border-[#1e1e2d]">
              <a href="https://www.linkedin.com/in/andika-rian-ansari" target="_blank" rel="noopener noreferrer" className="flex-1 xl:flex-none flex justify-center items-center gap-2 py-5 px-8 border-b xl:border-b-0 border-r border-[#1e1e2d] hover:text-white hover:bg-white/5 transition-colors">
                <Linkedin size={18}/> <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a href="https://www.instagram.com/kunandikaa16" target="_blank" rel="noopener noreferrer" className="flex-1 xl:flex-none flex justify-center items-center gap-2 py-5 px-8 border-b xl:border-b-0 border-r border-[#1e1e2d] hover:text-white hover:bg-white/5 transition-colors">
                <Instagram size={18}/> <span className="hidden sm:inline">Instagram</span>
              </a>
              <a href="https://www.threads.com/@kunandikaa16" target="_blank" rel="noopener noreferrer" className="flex-1 xl:flex-none flex justify-center items-center gap-2 py-5 px-8 border-b xl:border-b-0 hover:text-white hover:bg-white/5 transition-colors">
                <AtSign size={18}/> <span className="hidden sm:inline">Threads</span>
              </a>
            </div>

            {/* Copyright */}
            <div className="flex justify-center items-center gap-3 py-5 px-8 text-xs sm:text-sm">
              <span>© {new Date().getFullYear()} Andika - Made with ♥ in React</span>
              <span className="hidden xl:inline text-slate-700">|</span>
              <span className="hidden xl:inline text-slate-500">{new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })} - ID</span>
            </div>
          </div>
        </div>

        {/* Giant "ANDIKA" background text - Positioned in flow to drive container height naturally */}
        <div className="w-full overflow-hidden flex justify-center items-end bg-[#0B0B14] pt-4 md:pt-8">
          <div aria-hidden="true" className="text-[20vw] md:text-[18vw] lg:text-[14vw] font-black uppercase text-white/[0.06] leading-[0.8] tracking-tighter select-none translate-y-[8%]">
            ANDIKA
          </div>
        </div>
      </footer>
    </>
  )
}