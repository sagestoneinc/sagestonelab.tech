"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Zap, BarChart2, Brain, Layers } from "lucide-react";

const floatingCards = [
  {
    icon: Brain,
    label: "AI Workflows",
    value: "12x faster",
    color: "text-lab-purple",
    bg: "bg-lab-purple/10",
  },
  {
    icon: BarChart2,
    label: "Revenue Growth",
    value: "+340%",
    color: "text-lab-teal",
    bg: "bg-lab-teal/10",
  },
  {
    icon: Zap,
    label: "Automation Tasks",
    value: "50k+ daily",
    color: "text-electric-blue",
    bg: "bg-electric-blue/10",
  },
  {
    icon: Layers,
    label: "Tools Deployed",
    value: "10+ live",
    color: "text-indigo-400",
    bg: "bg-indigo-600/10",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      <div className="absolute inset-0 bg-gradient-to-br from-lab-purple/20 via-slate-900 to-lab-teal/10 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-lab-purple/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-lab-teal/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 hex-grid opacity-40 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,58,237,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.05) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lab-purple/10 border border-lab-purple/30 text-lab-purple text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-lab-purple animate-pulse" />
                Innovation Lab by Sage Stone Inc
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-grotesk font-bold text-5xl sm:text-6xl lg:text-7xl leading-tight mb-6"
            >
              <span className="block text-white">Building Tools.</span>
              <span className="block gradient-text">Powering Growth.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lab-teal font-grotesk font-medium text-xl mb-4 tracking-wide"
            >
              Build. Test. Solve. Scale.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg"
            >
              SagestoneLab is where Sage Stone Inc engineers the future — crafting
              AI-powered tools, intelligent automation, and scalable SaaS products
              that transform how modern businesses operate.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#tools"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-lab-purple hover:bg-purple-600 text-white font-medium transition-all duration-200 hover:scale-105 glow-purple"
              >
                Explore Tools
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/20 hover:bg-white/10 hover:border-white/30 text-white font-medium transition-all duration-200"
              >
                Partner With Us
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {floatingCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.label}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                  className="glass rounded-2xl p-5 glass-hover"
                >
                  <div className={`w-10 h-10 rounded-xl ${card.bg} flex items-center justify-center mb-3`}>
                    <Icon className={`w-5 h-5 ${card.color}`} />
                  </div>
                  <p className="text-slate-400 text-xs font-medium mb-1">{card.label}</p>
                  <p className={`font-grotesk font-bold text-xl ${card.color}`}>{card.value}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-slate-500 text-xs">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-lab-purple to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
