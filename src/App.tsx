import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Rocket, 
  Layers, 
  Calendar, 
  Zap, 
  Bot, 
  Layout, 
  Globe, 
  ChevronRight, 
  ArrowUpRight,
  Terminal,
  Cpu,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';

// --- Data ---
const SKILLS = {
  frontend: {
    title: "Frontend",
    items: ["Vue 2 / Vue 3 (Composition API)", "React (Hooks / 現代開發模式)", "Nuxt (模組化 / SEO)"],
    color: "text-orange-400",
    icon: <Layout />
  },
  architecture: {
    title: "Architecture & Engineering",
    items: ["Component-based Architecture", "State Management (Pinia / Redux)", "Code Review / ESLint 規範建立", "Performance Optimization"],
    color: "text-cyan-400",
    icon: <Cpu />
  },
  fullstack: {
    title: "Backend & Fullstack",
    items: ["Node.js / Express / prisma", "MongoDB / MySQL / postgreSQL", "RESTful API 設計與串接"],
    color: "text-mars-rust",
    icon: <Layers />
  },
  ai_workflow: {
    title: "AI / Dev Workflow",
    items: ["LLM 輔助開發 (重構 / 除錯 / 文件生成)", "開發流程自動化", "提升開發效率與品質"],
    color: "text-yellow-400",
    icon: <Bot />
  }
};

const PROJECTS = [
  {
    title: "🚀 Tech Debt Tracker (AI-Powered)",
    desc: "自動化技術債管理工具。利用 Gemini 1.5 Flash 掃描代碼並產出架構級重構建議，具備即時 CRUD 功能。",
    tech: ["React 19", "NestJS", "Prisma", "Gemini API"],
    link: "#",
    type: "AI Solutions"
  },
  {
    title: "🤖 TOEIC Practice Bot",
    desc: "24/7 Telegram 機器人，專為多益練習設計。具備難度分級、即時回饋與譯文，確保高可用性監控。",
    tech: ["Node.js", "Telegraf", "Render", "UptimeRobot"],
    link: "https://stats.uptimerobot.com/nrpvnqhlUJ",
    type: "Automation"
  },
  {
    title: "🛍️ 購物網頁 (Shopping System)",
    desc: "完整購物車系統，包含登入註冊、商家後台產品編輯與前台購物模式，專注於流暢的 UI/UX。",
    tech: ["React", "CSS Modules", "Context API"],
    link: "#",
    type: "E-commerce"
  },
  {
    title: "📍 Travel Go 視覺化行程",
    desc: "解決地圖標記混亂的行程工具。實作色彩編碼路線與地圖/列表連動，重塑旅遊規畫體驗。",
    tech: ["React 19", "Redux Toolkit", "Google Maps API"],
    link: "#",
    type: "Visualization"
  }
];

const EXPERIENCE = [
  { 
    company: "代碼科技有限公司 (Code Tech)", 
    role: "資深前端工程師 (Senior Frontend Engineer)", 
    period: "2024.11 - 至今", 
    achievement: "主導 Vue 3 (Vite) + TS 開發架構。制定 UI Framework 規範，透過模組化組件庫提升團隊效率 30%。參與 Code Review 並落實 RWD 規範。" 
  },
  { 
    company: "樂夠科技有限公司 (Logo Tech)", 
    role: "前端工程師 (Frontend Engineer)", 
    period: "2023.02 - 2024.09", 
    achievement: "以 Nuxt 2 實作專案功能，導入原子化設計 (Atomic Design)。開發直播互動模組，介接視訊與視覺化數據處理。" 
  },
  { 
    company: "凡谷興業有限公司 (Fangu)", 
    role: "前端工程師 (Frontend Engineer)", 
    period: "2021.08 - 2023.01", 
    achievement: "開發維護直播平台前端。運用 video.js 與 WebSocket 技術處理高併發即時訊息，提升播放穩定性與操作體驗。" 
  }
];

// --- Components ---

const FloatingParticles = () => (
  <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-mars-rust rounded-full"
        initial={{ 
          x: Math.random() * 100 + "%", 
          y: Math.random() * 100 + "%",
          opacity: Math.random() 
        }}
        animate={{ 
          y: ["-10%", "110%"],
          opacity: [0, 0.5, 0]
        }}
        transition={{ 
          duration: Math.random() * 10 + 20, 
          repeat: Infinity,
          ease: "linear",
          delay: Math.random() * 20
        }}
      />
    ))}
  </div>
);

const SectionHeading = ({ children, icon: Icon, id }: { children: React.ReactNode, icon: any, id?: string }) => (
  <motion.div 
    id={id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex flex-col mb-16 space-y-2"
  >
    <div className="flex items-center gap-3 text-mars-rust font-mono text-sm uppercase tracking-[0.2em]">
      <Icon size={18} />
      <span>{children}</span>
    </div>
    <div className="h-px w-24 bg-mars-rust/30"></div>
  </motion.div>
);

const SkillCard = ({ title, items, color, icon }: { title: string, items: string[], color: string, icon: any }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-10 rounded-[2rem] glass group hover:border-mars-rust/30 transition-all"
  >
    <div className={`mb-8 p-3 w-fit rounded-2xl bg-white/[0.02] border border-white/10 ${color}`}>
      {React.cloneElement(icon as React.ReactElement, { size: 24 })}
    </div>
    <h3 className="text-xl font-black mb-8 text-white tracking-widest uppercase">{title}</h3>
    <ul className="space-y-4">
      {items.map(item => (
        <li key={item} className="text-slate-400 text-sm flex items-center gap-3">
           <div className={`w-1.5 h-1.5 rounded-full ${color.replace('text', 'bg')} opacity-40`}></div>
           <span className="font-medium">{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#0c0504] selection:bg-mars-rust/40 overflow-x-hidden">
      <FloatingParticles />
      
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] mars-glow"></div>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-mars-rust/5 blur-[100px] rounded-full"></div>
      </div>

      {/* --- Header --- */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/[0.05] bg-[#0c0504]/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold tracking-widest text-white flex items-center gap-2"
          >
            <Rocket size={20} className="text-mars-rust" />
            MARS<span className="opacity-40">.WU</span>
          </motion.div>
          <div className="hidden md:flex items-center gap-12 text-xs font-black uppercase tracking-widest text-slate-500">
            {['Skills', 'Work', 'Projects'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-mars-rust transition-colors duration-300">
                {item}
              </a>
            ))}
            <a href="mailto:jess1104@hotmail.com.tw" className="text-white hover:text-mars-rust transition-colors underline decoration-mars-rust/40 underline-offset-8">
              Get Resume
            </a>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative min-h-[70vh] flex flex-col justify-center pt-24 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-12 pb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1.5 mb-8 text-[10px] font-bold tracking-[0.3em] text-mars-rust uppercase bg-mars-rust/10 border border-mars-rust/20 rounded-full">
                Mission: AI-Driven Engineering
              </div>
              <h1 className="text-6xl md:text-9xl font-black text-white leading-none tracking-tighter mb-10">
                Mars Wu
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-2xl text-slate-400 font-medium leading-relaxed"
            >
              我是 <span className="text-white font-bold underline decoration-mars-rust decoration-2 underline-offset-4">吳峻豪 (Mars)</span>。具備廣告設計背景的資深前端工程師，專精於 <br className="hidden md:block" />
              React/Vue 生態系，並透過 LLM 工具實現高效的現代開發流。
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap justify-center gap-x-12 gap-y-6 pt-10 border-t border-white/5"
            >
              {[
                "具備從零到一獨立建構系統的能力",
                "注重組件化開發與效能優化",
                "擅長運用 AI 工具加速開發流程"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3 text-xs md:text-sm font-bold uppercase tracking-widest text-slate-300">
                  <div className="w-5 h-5 rounded-full border border-mars-rust/50 flex items-center justify-center">
                    <CheckCircle2 size={12} className="text-mars-rust" />
                  </div>
                  {point}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 max-w-6xl space-y-64 pb-32">
        
        {/* --- Experience Section --- */}
        <section id="work">
          <SectionHeading icon={Layers} id="exp_head">Mission Experiences</SectionHeading>
          <div className="space-y-12">
            {EXPERIENCE.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-[1fr_2fr] gap-12 relative p-8 rounded-3xl hover:bg-white/[0.02] transition-all group"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 text-mars-rust bg-mars-rust/5 border border-mars-rust/20 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest">
                    <Calendar size={12} /> {exp.period}
                  </div>
                  <h3 className="text-3xl font-black text-white group-hover:text-mars-rust transition-colors">{exp.company}</h3>
                  <p className="text-mars-rust font-bold uppercase tracking-widest text-[10px]">{exp.role}</p>
                </div>
                <div className="relative pl-8 md:pl-16 border-l border-white/10">
                  <p className="text-slate-400 text-lg leading-relaxed font-medium">
                    {exp.achievement}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- Skills Section --- */}
        <section id="skills">
          <SectionHeading icon={Zap} id="skills_head">The Arsenal</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard title={SKILLS.frontend.title} items={SKILLS.frontend.items} color={SKILLS.frontend.color} icon={SKILLS.frontend.icon} />
            <SkillCard title={SKILLS.architecture.title} items={SKILLS.architecture.items} color={SKILLS.architecture.color} icon={SKILLS.architecture.icon} />
            <SkillCard title={SKILLS.fullstack.title} items={SKILLS.fullstack.items} color={SKILLS.fullstack.color} icon={SKILLS.fullstack.icon} />
            <SkillCard title={SKILLS.ai_workflow.title} items={SKILLS.ai_workflow.items} color={SKILLS.ai_workflow.color} icon={SKILLS.ai_workflow.icon} />
          </div>
        </section>

        {/* --- Projects Section --- */}
        <section id="projects">
          <SectionHeading icon={Globe} id="pj_head">Missions Log</SectionHeading>
          
          <div className="grid md:grid-cols-2 gap-10">
            {PROJECTS.map((pj, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group flex flex-col p-10 rounded-[2.5rem] glass hover:border-mars-rust/40 transition-all cursor-pointer relative overflow-hidden"
              >
                {/* Project Image Placeholder */}
                <div className="w-full aspect-video rounded-2xl overflow-hidden bg-white/[0.03] border border-white/5 mb-10 relative group-hover:border-mars-rust/20 transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center text-white/10 font-black tracking-widest text-xs uppercase">
                    Project Visual Placeholder
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0504] to-transparent opacity-60"></div>
                </div>

                <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                   <Terminal size={120} />
                </div>
                <div className="flex justify-between items-start mb-12">
                  <span className="text-[10px] font-black tracking-widest text-mars-rust uppercase px-4 py-1.5 bg-mars-rust/10 border border-mars-rust/20 rounded-full">
                    {pj.type}
                  </span>
                  <ArrowUpRight className="text-slate-600 group-hover:text-mars-rust transition-colors" />
                </div>
                <h3 className="text-3xl font-black mb-6 text-white group-hover:text-mars-rust transition-colors tracking-tighter">{pj.title}</h3>
                <p className="text-slate-400 text-sm mb-12 leading-relaxed grow font-medium">{pj.desc}</p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {pj.tech.map(t => (
                    <span key={t} className="text-[9px] px-3 py-1 rounded-lg bg-black/40 text-slate-500 font-bold border border-white/5 uppercase tracking-tighter">
                      {t}
                    </span>
                  ))}
                </div>
                <a href={pj.link} className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest text-white group-hover:translate-x-2 transition-transform duration-300">
                  Mission Data <ChevronRight size={14} className="text-mars-rust" />
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- Contact & Identity --- */}
        <section className="py-24">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-16">
            <motion.div 
               whileHover={{ rotate: 10, scale: 1.1 }}
               className="w-40 h-40 rounded-full glass flex items-center justify-center p-1 border-mars-rust/20 shadow-2xl shadow-mars-rust/10"
            >
              <div className="w-full h-full rounded-full bg-gradient-to-br from-mars-rust to-mars-dark flex items-center justify-center text-white text-5xl font-black italic">
                M
              </div>
            </motion.div>
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none">
              READY FOR THE <br /> 
              <span className="text-gradient-mars uppercase">NEXT FRONTIER?</span>
            </h2>
            <p className="text-slate-400 text-xl leading-relaxed max-w-2xl font-medium">
              目前居住於台北 / 台中。在遠端協作方面具備豐富經驗，致力於打造高影響力的 AI 輔助產品。
            </p>
            <div className="flex gap-4">
              <a href="mailto:jess1104@hotmail.com.tw" className="px-12 py-6 bg-white text-black font-black uppercase tracking-widest rounded-[2rem] hover:bg-mars-rust hover:text-white transition-all shadow-2xl shadow-mars-rust/20 text-sm">
                Initiate Contact
              </a>
            </div>
          </div>
        </section>

      </main>

      <footer className="py-20 border-t border-white/5 bg-black/20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.5em]">
            © {new Date().getFullYear()} Mars Wu // Exploratory AI Engineering
          </p>
          <div className="flex gap-12 font-mono text-[10px] uppercase tracking-widest text-slate-500">
             <a href="#" className="hover:text-mars-rust">GitHub</a>
             <a href="#" className="hover:text-mars-rust">LinkedIn</a>
             <a href="#" className="hover:text-mars-rust">Vercel</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
