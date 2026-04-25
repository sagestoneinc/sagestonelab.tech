"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Microscope, Lightbulb, Rocket } from "lucide-react";

const stats = [
  { value: "10+", label: "Tools Built" },
  { value: "3", label: "Products in Beta" },
  { value: "100%", label: "Internal Innovation" },
];

const pillars = [
  {
    icon: Microscope,
    title: "Research-Driven",
    description: "Every tool starts with deep research into real business problems.",
    color: "text-lab-purple",
    bg: "bg-lab-purple/10",
  },
  {
    icon: Lightbulb,
    title: "Experiment First",
    description: "We prototype fast, learn faster, and iterate with purpose.",
    color: "text-lab-teal",
    bg: "bg-lab-teal/10",
  },
  {
    icon: Rocket,
    title: "Built to Scale",
    description: "Everything we build is engineered for production from day one.",
    color: "text-electric-blue",
    bg: "bg-electric-blue/10",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-slate-900 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lab-purple/5 to-transparent pointer-events-none" />

      <div className="container-max relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-lab-purple text-sm font-medium tracking-widest uppercase mb-3 block">
            Who We Are
          </span>
          <h2 className="font-grotesk font-bold text-4xl sm:text-5xl text-white mb-6">
            About the Lab
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            SagestoneLab is the innovation engine of Sage Stone Inc — a dedicated
            space where ideas become products, experiments become solutions, and
            technology becomes competitive advantage.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-grotesk font-bold text-2xl text-white mb-4">
              Where Strategy Meets{" "}
              <span className="gradient-text">Engineering</span>
            </h3>
            <p className="text-slate-400 mb-4 leading-relaxed">
              Born from the consulting work of Sage Stone Inc, SagestoneLab was
              created to solve a recurring problem: our clients needed custom
              tools that didn&apos;t exist yet. So we built them — and kept building.
            </p>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Today, the lab operates as a full product studio: researching market
              gaps, engineering intelligent systems, and launching tools that give
              businesses an unfair advantage in their markets.
            </p>
            <div className="flex flex-wrap gap-2">
              {["AI/ML", "Automation", "SaaS", "Analytics", "CRM", "Payments"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="glass rounded-xl p-4 flex items-start gap-4 glass-hover"
                >
                  <div className={`w-10 h-10 rounded-lg ${pillar.bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${pillar.color}`} />
                  </div>
                  <div>
                    <h4 className="font-grotesk font-semibold text-white mb-1">{pillar.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{pillar.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-3 gap-8 p-8 rounded-2xl glass"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-grotesk font-bold text-3xl sm:text-4xl gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
