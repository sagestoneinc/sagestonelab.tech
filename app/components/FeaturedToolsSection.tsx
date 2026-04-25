"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart2, Brain, TrendingUp, Zap, ArrowRight } from "lucide-react";

const tools = [
  {
    icon: BarChart2,
    name: "RevenueOps Dashboard",
    description:
      "A unified revenue operations platform that consolidates sales data, pipeline metrics, and team performance into a single command center.",
    status: "Beta",
    statusColor: "text-lab-teal",
    statusBg: "bg-lab-teal/10",
    statusBorder: "border-lab-teal/30",
    features: ["Real-time pipeline tracking", "Revenue forecasting AI", "Team performance analytics"],
    color: "text-lab-teal",
    bg: "bg-lab-teal/10",
    gradient: "from-lab-teal/10",
  },
  {
    icon: Brain,
    name: "AI Workflow Assistant",
    description:
      "An intelligent assistant that learns your business workflows and proactively automates repetitive tasks across your tech stack.",
    status: "In Development",
    statusColor: "text-lab-purple",
    statusBg: "bg-lab-purple/10",
    statusBorder: "border-lab-purple/30",
    features: ["Natural language task creation", "Cross-app automation", "Smart scheduling"],
    color: "text-lab-purple",
    bg: "bg-lab-purple/10",
    gradient: "from-lab-purple/10",
  },
  {
    icon: TrendingUp,
    name: "Funnel Intelligence Engine",
    description:
      "A conversion optimization platform that analyzes every touchpoint in your funnel and surfaces data-backed recommendations.",
    status: "Coming Soon",
    statusColor: "text-indigo-400",
    statusBg: "bg-indigo-600/10",
    statusBorder: "border-indigo-400/30",
    features: ["Funnel heat mapping", "A/B test automation", "Conversion predictions"],
    color: "text-indigo-400",
    bg: "bg-indigo-600/10",
    gradient: "from-indigo-600/10",
  },
  {
    icon: Zap,
    name: "Automation Command Center",
    description:
      "A centralized hub for managing, monitoring, and optimizing all your automated workflows across every tool in your stack.",
    status: "In Development",
    statusColor: "text-lab-purple",
    statusBg: "bg-lab-purple/10",
    statusBorder: "border-lab-purple/30",
    features: ["Workflow orchestration", "Error monitoring & alerts", "Performance optimization"],
    color: "text-electric-blue",
    bg: "bg-electric-blue/10",
    gradient: "from-electric-blue/10",
  },
];

export default function FeaturedToolsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tools" className="section-padding bg-slate-800/30 relative">
      <div className="absolute inset-0 hex-grid opacity-20 pointer-events-none" />

      <div className="container-max relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-lab-purple text-sm font-medium tracking-widest uppercase mb-3 block">
            The Portfolio
          </span>
          <h2 className="font-grotesk font-bold text-4xl sm:text-5xl text-white mb-6">
            Featured Tools
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Products born in the lab and engineered for real-world impact.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -3 }}
                className="glass rounded-2xl p-6 relative overflow-hidden group transition-all duration-300 hover:border-white/20"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl ${tool.bg} flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${tool.color}`} />
                      </div>
                      <h3 className="font-grotesk font-semibold text-white text-lg">{tool.name}</h3>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${tool.statusBg} ${tool.statusColor} ${tool.statusBorder} flex-shrink-0`}>
                      {tool.status}
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{tool.description}</p>

                  <ul className="space-y-1.5 mb-5">
                    {tool.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/20 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`inline-flex items-center gap-2 text-sm font-medium ${tool.color} hover:opacity-80 transition-opacity`}
                  >
                    Request Early Access
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
