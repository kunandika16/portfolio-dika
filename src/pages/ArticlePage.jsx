import { motion } from 'framer-motion';
import { ArrowLeft, Star, Target, TrendingUp, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ArticlePage() {
  // Using static mockup data that mirrors the provided screenshots
  const article = {
    title: "Streamlining the AI app builder experience with cleaner UI and intuitive navigation",
    subtitle: "Redesigning an AI app builder to eliminate UI clutter, surface hidden features, streamline upgrades, and make credit information visible-directly addressing user frustrations that were blocking conversions.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format",
    company: "Walturn",
    role: "Product Designer",
    scope: "Research, Product and Visual Design",
    period: "2025",
    overview: "Vibe Studio is an AI-powered platform that enables users to build production-ready mobile and web applications through natural language. The platform offers features like Developer Mode for code editing, GitHub integration for version control, and cross-platform deployment capabilities. Despite these powerful features, user feedback consistently highlighted frustrations with the interface and user experience."
  };

  return (
    <div className="pt-32 pb-24 max-w-[1200px] mx-auto px-6 lg:px-12 bg-white">
      
      {/* Back Button */}
      <Link to="/work" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all font-medium text-slate-700 text-sm shadow-sm mb-12 w-max">
        <ArrowLeft size={16} /> Back
      </Link>

      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl"
      >
        <h1 className="text-3xl md:text-4xl lg:text-[42px] font-medium text-slate-900 mb-6 leading-[1.2] tracking-tight">
          {article.title}
        </h1>
        <p className="text-slate-500 text-[17px] leading-relaxed mb-12">
          {article.subtitle}
        </p>
      </motion.div>

      {/* Hero Image */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-full aspect-[16/9] md:aspect-[21/9] rounded-[24px] overflow-hidden mb-16 border border-slate-100 shadow-sm"
      >
        <img src={article.heroImage} alt="Project Hero" className="w-full h-full object-cover" loading="lazy" />
      </motion.div>

      {/* Meta Info Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-slate-100 mb-16">
        <div>
          <h4 className="text-slate-900 font-semibold text-[15px] mb-2">Company</h4>
          <p className="text-slate-500 text-[15px]">{article.company}</p>
        </div>
        <div>
          <h4 className="text-slate-900 font-semibold text-[15px] mb-2">Role</h4>
          <p className="text-slate-500 text-[15px]">{article.role}</p>
        </div>
        <div>
          <h4 className="text-slate-900 font-semibold text-[15px] mb-2">Scope</h4>
          <p className="text-slate-500 text-[15px]">{article.scope}</p>
        </div>
        <div>
          <h4 className="text-slate-900 font-semibold text-[15px] mb-2">Period</h4>
          <p className="text-slate-500 text-[15px]">{article.period}</p>
        </div>
      </div>

      {/* Overview Section */}
      <div className="max-w-[800px] mb-24">
        <h2 className="text-2xl font-semibold text-slate-900 mb-6">Overview</h2>
        <p className="text-slate-500 text-[17px] leading-relaxed">
          {article.overview}
        </p>
      </div>

      {/* Diagonal Divider */}
      <div className="w-full h-8 mb-24 border-y border-slate-100/50 opacity-30"
           style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 4px, #cbd5e1 4px, #cbd5e1 5px)" }}>
      </div>

      {/* Challenges Section */}
      <div className="max-w-[1000px] mb-24">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">The Challenges</h2>
        <p className="text-slate-500 text-[17px] leading-relaxed mb-12">
          Vibe Studio enables users to build production-ready Flutter apps through AI. However, user feedback revealed critical friction points preventing conversion and engagement:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          <div>
            <div className="text-indigo-600 font-bold text-xl mb-3">01</div>
            <h3 className="text-slate-900 font-medium text-[17px] mb-3">Cluttered UI</h3>
            <p className="text-slate-500 leading-relaxed text-[15px]">The interface packed too many features into a single view, AI builder, Developer Mode, GitHub integration, multi-device preview, without clear visual hierarchy, leaving users unsure where to start.</p>
          </div>
          <div>
            <div className="text-indigo-600 font-bold text-xl mb-3">02</div>
            <h3 className="text-slate-900 font-medium text-[17px] mb-3">Hidden Features</h3>
            <p className="text-slate-500 leading-relaxed text-[15px]">Powerful capabilities like state management options, environment variables, and deployment settings were buried several layers deep, making users miss features they were actually paying for.</p>
          </div>
          <div>
            <div className="text-indigo-600 font-bold text-xl mb-3">03</div>
            <h3 className="text-slate-900 font-medium text-[17px] mb-3">Confusing Upgrade Flow</h3>
            <p className="text-slate-500 leading-relaxed text-[15px]">With three pricing tiers (Free, Pro, Ultra) and a credit-based model, users struggled to understand what they'd get by upgrading, leading to drop-off before conversion.</p>
          </div>
          <div>
            <div className="text-indigo-600 font-bold text-xl mb-3">04</div>
            <h3 className="text-slate-900 font-medium text-[17px] mb-3">Invisible Credits</h3>
            <p className="text-slate-500 leading-relaxed text-[15px]">The platform runs using credits, but there was no clear indicator of how many credits remained or how each action consumed them, creating anxiety and unexpected friction mid-build.</p>
          </div>
        </div>
      </div>

      {/* Diagonal Divider */}
      <div className="w-full h-8 mb-24 border-y border-slate-100/50 opacity-30"
           style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 4px, #cbd5e1 4px, #cbd5e1 5px)" }}>
      </div>

      {/* The Solution Section */}
      <div className="max-w-[1000px] mb-24">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">The Solution</h2>
        <p className="text-slate-500 text-[17px] leading-relaxed mb-12">
          I redesigned the platform around four core improvements, each directly addressing a user pain point:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-50/50 border border-slate-100 p-8 rounded-[24px]">
            <h3 className="text-slate-900 font-medium text-[17px] mb-4">Clean Visual Design</h3>
            <p className="text-slate-500 leading-relaxed text-[15px]">Increased whitespace, implemented consistent 8px grid spacing, established clear visual hierarchy with distinct typography, and reduced color palette to minimize distraction. The interface now lets users focus on building, not fighting clutter.</p>
          </div>
          <div className="bg-slate-50/50 border border-slate-100 p-8 rounded-[24px]">
            <h3 className="text-slate-900 font-medium text-[17px] mb-4">Prominent Navigation</h3>
            <p className="text-slate-500 leading-relaxed text-[15px]">Surfaced critical features—Developer Mode, GitHub integration, deployment options— to primary navigation. Added quick action toolbar for frequent operations. Eliminated nested menus for essential functions. Users now find what they need immediately.</p>
          </div>
          <div className="bg-slate-50/50 border border-slate-100 p-8 rounded-[24px]">
            <h3 className="text-slate-900 font-medium text-[17px] mb-4">Streamlined Upgrade Flow</h3>
            <p className="text-slate-500 leading-relaxed text-[15px]">Added prominent 'Upgrade' button in header, implemented contextual prompts when approaching credit limits, created clear Free vs Pro comparison, enabled one-click upgrade with pre-selected popular plan. The path to paid features is now obvious.</p>
          </div>
          <div className="bg-slate-50/50 border border-slate-100 p-8 rounded-[24px]">
            <h3 className="text-slate-900 font-medium text-[17px] mb-4">Always-Visible Credits</h3>
            <p className="text-slate-500 leading-relaxed text-[15px]">Placed persistent credit balance indicator in header with color-coded status (green/yellow/red). Added hover tooltip showing usage breakdown. Display estimated credits before AI operations. Users always know where they stand.</p>
          </div>
        </div>
      </div>

      {/* Solution Mockup Image */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full rounded-[24px] overflow-hidden mb-24 border border-slate-100 shadow-sm"
      >
        <img src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=800&auto=format" alt="Solution Mockup" className="w-full object-cover" loading="lazy" />
      </motion.div>

      {/* Diagonal Divider */}
      <div className="w-full h-8 mb-24 border-y border-slate-100/50 opacity-30"
           style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 4px, #cbd5e1 4px, #cbd5e1 5px)" }}>
      </div>

      {/* Impact Section */}
      <div className="max-w-[1000px] mb-20">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Impact</h2>
        <p className="text-slate-500 text-[17px] leading-relaxed mb-12">
          The redesign delivered measurable improvements across all key metrics:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-50/50 border border-slate-100 p-8 rounded-[24px]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-600 font-semibold mb-6">
               <Star size={14} /> +32%
            </div>
            <h3 className="text-slate-900 font-medium text-[17px] mb-2">User Satisfaction Score</h3>
            <p className="text-slate-500 leading-relaxed text-[15px]">Cleaner UI reduced overwhelm and improved focus</p>
          </div>

          <div className="bg-slate-50/50 border border-slate-100 p-8 rounded-[24px]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-600 font-semibold mb-6">
               <Target size={14} /> +58%
            </div>
            <h3 className="text-slate-900 font-medium text-[17px] mb-2">Feature Discovery Rate</h3>
            <p className="text-slate-500 leading-relaxed text-[15px]">Prominent navigation surfaced hidden features</p>
          </div>

          <div className="bg-slate-50/50 border border-slate-100 p-8 rounded-[24px]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-600 font-semibold mb-6">
               <TrendingUp size={14} /> +41%
            </div>
            <h3 className="text-slate-900 font-medium text-[17px] mb-2">Conversion to Paid Plans</h3>
            <p className="text-slate-500 leading-relaxed text-[15px]">Streamlined upgrade flow removed friction</p>
          </div>

          <div className="bg-slate-50/50 border border-slate-100 p-8 rounded-[24px]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-600 font-semibold mb-6">
               <HelpCircle size={14} className="rotate-180" /> -64%
            </div>
            <h3 className="text-slate-900 font-medium text-[17px] mb-2">Credit-Related Support Tickets</h3>
            <p className="text-slate-500 leading-relaxed text-[15px]">Always-visible credit info eliminated confusion</p>
          </div>
        </div>
      </div>

      {/* Key Takeaway */}
      <div className="max-w-[1000px]">
        <h2 className="text-2xl font-semibold text-slate-900 mb-6">Key Takeaway</h2>
        <p className="text-slate-600 text-[16px] leading-relaxed mb-6">
          User feedback provided the exact roadmap. Instead of guessing, I listened to what frustrated users: cluttered UI, hidden menus, confusing upgrade flow, invisible credits. Each complaint became a design requirement. The redesign directly solved the problems users articulated.
        </p>
        <p className="text-slate-800 text-[16px] leading-relaxed font-medium">
          Simple principle: If users say something is wrong, they're right. If users say how to fix it, test their suggestion. The best design solutions come from actually listening.
        </p>
      </div>

    </div>
  )
}