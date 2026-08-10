import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../lib/ThemeContext';

export default function Header() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/20 dark:border-white/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 cursor-pointer group">
          <img src="/images/profil/icon.png" alt="Andika Rian Ansari logo" className="w-9 h-9 rounded-full object-cover shadow-sm group-hover:shadow-md transition-all group-hover:scale-105" />
          <span className="font-bold text-xl tracking-tight text-slate-800 dark:text-slate-100">Portfolio</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={`text-sm font-semibold transition-colors ${location.pathname === '/' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400'}`}>Home</Link>
          <Link to="/work" className={`text-sm font-semibold transition-colors ${location.pathname === '/work' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400'}`}>Work</Link>
          <Link to="/about" className={`text-sm font-semibold transition-colors ${location.pathname === '/about' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400'}`}>About</Link>
          {/* <a href="/#resources" className="text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Resources</a> */}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-200 flex items-center justify-center backdrop-blur-sm hover:bg-slate-100 dark:hover:bg-slate-700/70 transition-all shadow-sm"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Button variant="outline" className="rounded-full shadow-sm hover:shadow-md transition-all border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  )
}
