import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';

export default function Header() {
  const location = useLocation();
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 cursor-pointer group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:shadow-md transition-all group-hover:scale-105">
            C
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-800">CreativeTech.</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={`text-sm font-semibold transition-colors ${location.pathname === '/' ? 'text-indigo-600' : 'text-slate-500 hover:text-indigo-600'}`}>Home</Link>
          <Link to="/work" className={`text-sm font-semibold transition-colors ${location.pathname === '/work' ? 'text-indigo-600' : 'text-slate-500 hover:text-indigo-600'}`}>Work</Link>
          <Link to="/about" className={`text-sm font-semibold transition-colors ${location.pathname === '/about' ? 'text-indigo-600' : 'text-slate-500 hover:text-indigo-600'}`}>About</Link>
          <a href="/#resources" className="text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors">Resources</a>
        </nav>

        <Button variant="outline" className="rounded-full shadow-sm hover:shadow-md transition-all border-slate-200 text-slate-700 bg-white/50 backdrop-blur-sm">
          Contact Us
        </Button>
      </div>
    </header>
  )
}