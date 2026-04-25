"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Zap, BarChart2, Users, TrendingUp, Layers } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI-Powered Workflows",
    description:
      "Intelligent automation that learns, adapts, and optimizes your core business processes using cutting-edge ML models.",
    color: "text-lab-purple",
    bg: "bg-lab-purple/10",
    border: "border-lab-purple/20",
  },
  {
    icon: Zap,
    title: "Automation Systems",
    description:
      "End-to-end automation pipelines that eliminate repetitive tasks, reduce errors, and free your team to focus on what matters.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20",
  },
  {
    icon: BarChart2,
    title: "Analytics Dashboards",
    description:
      "Real-time business intelligence platforms that turn raw data into actionable insights and competitive advantages.",
    color: "text-lab-teal",
    bg: "bg-lab-teal/10",
    border: "border-lab-teal/20",
  },
  {
    icon: Users,
    title: "CRM & Operations Tools",
    description:
      "Custom relationship management and operational systems designed around your unique business workflows.",
    color: "text-electric-blue",
    bg: "bg-electric-blue/10",
    border: "border-electric-blue/20",
  },
  {
    icon: TrendingUp,
    title: "Payment & Funnel Optimization",
    description:
      "Revenue optimization engines that maximize conversion, reduce churn, and automate your entire sales funnel.",
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/20",
  },
  {
    icon: Layers,
    title: "Client-Facing SaaS Products",
    description:
      "Polished, production-ready SaaS applications built for scale — from MVP to enterprise-grade in record time.",
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    border: "border-pink-400/20",
  },
];

export default function WhatWeBuildSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="what-we-build" className="section-padding bg-slate-800/30 relative">
      <div className="absolute inset-0 hex-grid opacity-20 pointer-events-none" />

      <div className="container-max relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-lab-teal text-sm font-medium tracking-widest uppercase mb-3 block">
            Our Capabilities
          </span>
          <h2 className="font-grotesk font-bold text-4xl sm:text-5xl text-white mb-6">
            What We Build
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            From intelligent workflows to client-facing SaaS products, we engineer
            tools that solve real problems at scale.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className={`glass rounded-2xl p-6 border ${service.border} hover:shadow-xl transition-all duration-300 cursor-default`}
              >
                <div className={`w-12 h-12 rounded-xl ${service.bg} flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <h3 className="font-grotesk font-semibold text-white text-lg mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
