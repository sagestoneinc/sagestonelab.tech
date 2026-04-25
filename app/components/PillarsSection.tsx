"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FlaskConical, Code2, CheckCircle2, Rocket } from "lucide-react";

const pillars = [
  {
    number: "01",
    icon: FlaskConical,
    title: "Innovate",
    subtitle: "Research. Prototype. Experiment.",
    description:
      "We start with curiosity — exploring emerging technologies, identifying market gaps, and rapidly prototyping solutions before committing to full development.",
    color: "text-lab-purple",
    bg: "bg-lab-purple/10",
    gradientFrom: "from-lab-purple/20",
  },
  {
    number: "02",
    icon: Code2,
    title: "Build",
    subtitle: "Engineer. Develop. Deploy.",
    description:
      "Our engineering team transforms validated ideas into production-grade software using modern architectures, clean code practices, and battle-tested frameworks.",
    color: "text-electric-blue",
    bg: "bg-electric-blue/10",
    gradientFrom: "from-electric-blue/20",
  },
  {
    number: "03",
    icon: CheckCircle2,
    title: "Validate",
    subtitle: "Test. Iterate. Improve.",
    description:
      "Every tool goes through rigorous testing cycles with real users, collecting data to drive iterations until the solution genuinely solves the problem.",
    color: "text-lab-teal",
    bg: "bg-lab-teal/10",
    gradientFrom: "from-lab-teal/20",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Scale",
    subtitle: "Launch. Grow. Expand.",
    description:
      "Validated tools get the full launch treatment — infrastructure hardening, go-to-market strategy, and growth systems built to handle rapid user acquisition.",
    color: "text-green-400",
    bg: "bg-green-400/10",
    gradientFrom: "from-green-400/20",
  },
];

export default function PillarsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-lab-purple/5 via-transparent to-lab-teal/5 pointer-events-none" />

      <div className="container-max relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-electric-blue text-sm font-medium tracking-widest uppercase mb-3 block">
            Our Process
          </span>
          <h2 className="font-grotesk font-bold text-4xl sm:text-5xl text-white mb-6">
            Innovation Pillars
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Every product at SagestoneLab follows a disciplined four-stage process
            that ensures we ship tools people actually use.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative glass rounded-2xl p-6 overflow-hidden group transition-all duration-300"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${pillar.gradientFrom} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${pillar.bg} flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${pillar.color}`} />
                    </div>
                    <span className={`font-grotesk font-bold text-3xl ${pillar.color} opacity-30`}>
                      {pillar.number}
                    </span>
                  </div>
                  <h3 className="font-grotesk font-bold text-xl text-white mb-1">{pillar.title}</h3>
                  <p className={`text-xs font-medium ${pillar.color} mb-3 tracking-wide`}>{pillar.subtitle}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{pillar.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
