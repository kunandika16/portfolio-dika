import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

const WorkPage = lazy(() => import('./pages/WorkPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ArticlePage = lazy(() => import('./pages/ArticlePage'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
    </div>
  );
}

function AppContent() {
  return (
    <div className="bg-[#0B0B14] min-h-screen font-sans text-foreground selection:bg-indigo-500/20 selection:text-indigo-600 overflow-x-hidden">
       <Header />
       <div className="relative z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
         <main className="bg-background bg-grid pb-24 rounded-b-[40px] md:rounded-b-[60px] overflow-hidden min-h-screen">
           <Suspense fallback={<PageLoader />}>
             <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/work" element={<WorkPage />} />
               <Route path="/about" element={<AboutPage />} />
               <Route path="/article/:id" element={<ArticlePage />} />
             </Routes>
           </Suspense>
         </main>
       </div>
       <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  )
}