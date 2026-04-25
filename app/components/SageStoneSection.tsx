"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Building2, FlaskConical, Link } from "lucide-react";

const connections = [
  {
    title: "Strategy Informs Product",
    description:
      "Real consulting engagements reveal the exact tools businesses need. Every product in the lab started as a client problem.",
    icon: Building2,
    color: "text-lab-purple",
    bg: "bg-lab-purple/10",
  },
  {
    title: "Lab Enhances Consulting",
    description:
      "Lab-built tools give Sage Stone Inc consultants proprietary advantages — delivering better results faster than any competitor.",
    icon: FlaskConical,
    color: "text-lab-teal",
    bg: "bg-lab-teal/10",
  },
  {
    title: "Shared Mission",
    description:
      "Both entities share one mission: giving businesses the tools and strategies they need to win in an increasingly automated world.",
    icon: Link,
    color: "text-electric-blue",
    bg: "bg-electric-blue/10",
  },
];

export default function SageStoneSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-slate-800/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-lab-purple/10 via-transparent to-lab-teal/10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lab-purple/30 to-transparent" />

      <div className="container-max relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-lab-purple text-sm font-medium tracking-widest uppercase mb-3 block">
              The Ecosystem
            </span>
            <h2 className="font-grotesk font-bold text-4xl sm:text-5xl text-white mb-6">
              Powered by{" "}
              <span className="gradient-text">Sage Stone Inc</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              SagestoneLab isn&apos;t a standalone startup — it&apos;s the innovation engine
              embedded within Sage Stone Inc, a consulting firm that helps
              businesses optimize operations, grow revenue, and build lasting
              systems.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              The lab exists because the consulting work demanded it. Every tool
              we build is field-tested in real business environments before it
              ever becomes a product.
            </p>
            <a
            href="#"
              className="inline-flex items-center gap-2 text-lab-purple hover:text-purple-400 font-medium transition-colors"
            >
              Learn about Sage Stone Inc
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {connections.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="glass rounded-xl p-5 flex gap-4 glass-hover"
                >
                  <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div>
                    <h4 className="font-grotesk font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
