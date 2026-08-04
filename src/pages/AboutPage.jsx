import { motion } from 'framer-motion';
import { Briefcase, Code2, Layout, Database, Award, Trophy, Star, Layers } from 'lucide-react';

const experiences = [
  {
    id: 1,
    company: "PT Pos Indonesia",
    role: "Frontend Developer",
    period: "2023 - Present",
    description: "Developing internal web applications and dashboards that streamline business operations. Collaborating with cross-functional teams to build clean, scalable interfaces that improve productivity."
  },
  {
    id: 2,
    company: "Software Development Company",
    role: "Fullstack Developer",
    period: "2021 - 2023",
    description: "Designed and built end-to-end applications — from frontend interfaces to backend APIs and databases. Delivered multiple client projects across HR, logistics, and government sectors."
  },
  {
    id: 3,
    company: "State-Owned Enterprise (BUMN)",
    role: "IT Consultant",
    period: "2017 - 2019",
    description: "Consulted on digital transformation initiatives, modernizing legacy systems into scalable web applications. Conducted workshops to transition teams to agile methodologies."
  }
];

const skills = [
  {
    id: 1,
    category: "Frontend",
    icon: <Code2 className="w-6 h-6 text-blue-500" />,
    color: "bg-blue-50 border-blue-100",
    items: ["React.js", "Next.js", "Vue", "Angular", "TypeScript", "Tailwind CSS", "MaterialUI"]
  },
  {
    id: 2,
    category: "Backend & Database",
    icon: <Database className="w-6 h-6 text-emerald-500" />,
    color: "bg-emerald-50 border-emerald-100",
    items: ["Node.js", "Express", "Laravel", "Spring Boot", "PostgreSQL", "MySQL", "MongoDB"]
  },
  {
    id: 3,
    category: "UI/UX & Tools",
    icon: <Layout className="w-6 h-6 text-purple-500" />,
    color: "bg-purple-50 border-purple-100",
    items: ["Figma", "Design Systems", "Prototyping", "REST APIs", "Git", "Firebase"]
  }
];

const achievements = [
  {
    id: 1,
    title: "Best Digital Innovation Award",
    year: "2023",
    issuer: "Tech Excellence Awards",
    icon: <Trophy className="w-5 h-5 text-amber-500" />
  },
  {
    id: 2,
    title: "Top 10 Frontend Developers",
    year: "2022",
    issuer: "Developer Community ID",
    icon: <Star className="w-5 h-5 text-amber-500" />
  },
  {
    id: 3,
    title: "Outstanding Contribution",
    year: "2020",
    issuer: "Global Logistics Co.",
    icon: <Award className="w-5 h-5 text-amber-500" />
  }
];

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="pt-32 pb-24 max-w-[1200px] mx-auto px-6 lg:px-12">
      
      {/* Soft background glow */}
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute top-[40%] right-[10%] w-[400px] h-[400px] bg-indigo-400/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 1. About Me Section */}
        <section className="mb-24">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start">
            
            {/* Profile Photo */}
            <motion.div variants={itemVariants} className="w-full lg:w-[40%] max-w-[400px]">
              <div className="relative rounded-[32px] overflow-hidden p-2 bg-white border border-slate-200 shadow-xl shadow-slate-200/50">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-50 opacity-50"></div>
                <img 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format" 
                  alt="Andika Rian Ansari Profile" 
                  className="w-full aspect-[4/5] object-cover rounded-[24px] relative z-10"
                  loading="lazy"
                />
                
                {/* Floating badge */}
                <div className="absolute -right-4 top-10 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-slate-100 z-20 flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-sm font-bold text-slate-800">Available for work</span>
                </div>
              </div>
            </motion.div>

            {/* Bio & Motto */}
            <motion.div variants={itemVariants} className="w-full lg:w-[60%] flex flex-col justify-center pt-4 lg:pt-10">
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Andika</span>
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                I am a software developer based in Indonesia, focused on building clean, scalable applications that solve real problems. With strong fundamentals in frontend and backend development, I design and ship web dashboards, management systems, and mobile experiences — from concept to deployment.
              </p>

              {/* Motto Box */}
              <div className="relative bg-slate-50 border border-slate-200/60 rounded-3xl p-8 md:p-10 overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-indigo-600"></div>
                <div className="absolute -right-10 -bottom-10 text-[120px] text-slate-100 font-serif leading-none opacity-50 group-hover:scale-110 transition-transform duration-500">"</div>
                
                <h3 className="relative z-10 text-xl md:text-2xl font-medium text-slate-800 italic leading-snug">
                  "I don't just write code; I build systems that run reliably, scale cleanly, and solve real business problems."
                </h3>
              </div>
            </motion.div>

          </div>
        </section>

        {/* 2. Experience Section */}
        <section className="mb-24">
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center border border-indigo-100">
              <Briefcase className="w-6 h-6 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Professional Experience</h2>
          </motion.div>

          <div className="relative border-l-2 border-slate-200 ml-6 md:ml-8 pl-8 md:pl-12 flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-indigo-500 shadow-sm" />
                
                <div className="bg-white rounded-[24px] p-8 border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)] transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                      <p className="text-indigo-600 font-medium">{exp.company}</p>
                    </div>
                    <span className="px-4 py-1.5 bg-slate-50 text-slate-600 text-sm font-semibold rounded-full border border-slate-200/60 w-max">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. Skills Section */}
        <section className="mb-24">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">Skill Expertise</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">A focused skill set across frontend, backend, and interface design to ship complete software products.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {skills.map((skill) => (
              <motion.div 
                key={skill.id}
                variants={itemVariants}
                className={`rounded-[32px] p-8 border ${skill.color} bg-white shadow-sm hover:-translate-y-1 transition-transform duration-300`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-white shadow-sm border border-white/50`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">{skill.category}</h3>
                <div className="flex flex-wrap gap-2.5">
                  {skill.items.map((item, idx) => (
                    <span key={idx} className="px-3.5 py-1.5 bg-white border border-slate-200/60 text-slate-600 text-sm font-medium rounded-full shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 4. Achievements Section */}
        <section>
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center border border-amber-100">
              <Award className="w-6 h-6 text-amber-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Key Achievements</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <motion.div 
                key={achievement.id}
                variants={itemVariants}
                className="flex items-center gap-5 p-6 rounded-[24px] bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">
                  {achievement.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 leading-tight mb-1">{achievement.title}</h4>
                  <div className="text-sm text-slate-500 font-medium">
                    {achievement.issuer} <span className="mx-1">•</span> {achievement.year}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </motion.div>
    </div>
  )
}