"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const interests = [
  "Early Access to Tools",
  "Partnership Opportunity",
  "Custom Development",
  "Consulting Services",
  "Investment Interest",
  "General Inquiry",
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="section-padding bg-slate-900 relative">
      <div className="absolute inset-0 hex-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lab-teal/30 to-transparent" />

      <div className="container-max relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-lab-teal text-sm font-medium tracking-widest uppercase mb-3 block">
            Get Involved
          </span>
          <h2 className="font-grotesk font-bold text-4xl sm:text-5xl text-white mb-6">
            Request Early Access
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Be among the first to access our tools. Whether you&apos;re a potential
            partner, customer, or investor — we want to hear from you.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-8"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-lab-teal/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-lab-teal" />
                </div>
                <h3 className="font-grotesk font-bold text-2xl text-white mb-2">
                  You&apos;re on the list!
                </h3>
                <p className="text-slate-400">
                  Thanks for your interest. We&apos;ll be in touch soon with early access details.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-lab-purple/50 transition-all duration-200 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-lab-purple/50 transition-all duration-200 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Acme Corp"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-lab-purple/50 transition-all duration-200 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">I&apos;m interested in... *</label>
                  <select
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/10 text-white focus:outline-none focus:border-lab-purple/50 transition-all duration-200 text-sm appearance-none"
                  >
                    <option value="" className="bg-slate-800">Select an option...</option>
                    {interests.map((interest) => (
                      <option key={interest} value={interest} className="bg-slate-800">
                        {interest}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your use case or what you're looking to solve..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-lab-purple/50 transition-all duration-200 text-sm resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-lab-purple to-indigo-600 text-white font-medium hover:opacity-90 transition-all duration-200 glow-purple"
                >
                  <Send className="w-4 h-4" />
                  Request Early Access
                </motion.button>

                <p className="text-center text-slate-500 text-xs">
                  No spam. We&apos;ll only reach out about what you asked for.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
