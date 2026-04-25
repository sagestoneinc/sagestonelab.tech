"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FlaskConical, GitBranch, Cpu, Database, Globe, Lock } from "lucide-react";

const experiments = [
  {
    icon: Cpu,
    title: "LLM Routing Engine",
    category: "AI Research",
    description: "Intelligent routing layer that selects the optimal LLM for each task based on cost, speed, and accuracy requirements.",
    progress: 65,
    tags: ["OpenAI", "Anthropic", "Routing"],
    color: "text-lab-purple",
    bg: "bg-lab-purple/10",
    progressHex: "#7C3AED",
  },
  {
    icon: Database,
    title: "Vector Memory Store",
    category: "Infrastructure",
    description: "High-performance vector database abstraction layer enabling semantic search across business documents and data.",
    progress: 40,
    tags: ["Pinecone", "Embeddings", "Search"],
    color: "text-electric-blue",
    bg: "bg-electric-blue/10",
    progressHex: "#3882F6",
  },
  {
    icon: Globe,
    title: "Web Scraping Mesh",
    category: "Data Pipeline",
    description: "Distributed web scraping infrastructure with automatic proxy rotation, CAPTCHA handling, and data normalization.",
    progress: 80,
    tags: ["Puppeteer", "Proxies", "ETL"],
    color: "text-lab-teal",
    bg: "bg-lab-teal/10",
    progressHex: "#06B6D4",
  },
  {
    icon: Lock,
    title: "Zero-Trust Auth Layer",
    category: "Security",
    description: "Pluggable authentication middleware implementing zero-trust principles for internal tools and API services.",
    progress: 30,
    tags: ["OAuth", "JWT", "Zero Trust"],
    color: "text-green-400",
    bg: "bg-green-400/10",
    progressHex: "#4ade80",
  },
  {
    icon: GitBranch,
    title: "Feature Flag Engine",
    category: "DevOps",
    description: "Real-time feature flagging system with audience targeting, A/B testing capabilities, and instant rollbacks.",
    progress: 55,
    tags: ["Feature Flags", "A/B Testing", "Real-time"],
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    progressHex: "#facc15",
  },
  {
    icon: FlaskConical,
    title: "Predictive Scoring Model",
    category: "ML Research",
    description: "Customer behavior prediction model that scores leads, flags churn risk, and identifies upsell opportunities.",
    progress: 45,
    tags: ["ML", "Scoring", "Predictions"],
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    progressHex: "#f472b6",
  },
];

export default function ExperimentsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-slate-900 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric-blue/5 to-transparent pointer-events-none" />

      <div className="container-max relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-electric-blue text-sm font-medium tracking-widest uppercase mb-3 block">
            Active Research
          </span>
          <h2 className="font-grotesk font-bold text-4xl sm:text-5xl text-white mb-6">
            Lab Experiments
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Prototypes and research projects currently running in the lab — the
            raw ingredients of tomorrow&apos;s products.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiments.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -3 }}
                className="glass rounded-2xl p-5 transition-all duration-300 hover:border-white/20"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl ${exp.bg} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${exp.color}`} />
                  </div>
                  <span className="text-xs text-slate-500 font-medium">{exp.category}</span>
                </div>

                <h3 className="font-grotesk font-semibold text-white mb-2">{exp.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                <div className="mb-3">
                  <div className="flex justify-between text-xs text-slate-500 mb-1.5">
                    <span>Progress</span>
                    <span>{exp.progress}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${exp.progress}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: exp.progressHex }}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-full bg-white/5 text-slate-400 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
