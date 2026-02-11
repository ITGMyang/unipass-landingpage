"use client";

import React from 'react';
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import HowItWorks from '@/components/sections/HowItWorks';
import Testimonials from '@/components/sections/Testimonials';
import About from '@/components/sections/About';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Bot, Mail, Twitter, Linkedin, Github } from 'lucide-react';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-[0%]"
        style={{ scaleX }}
      />

      <Hero />
      <HowItWorks />
      <Features />
      <About />
      <Testimonials />

      {/* CTA Section */}
      <section className="py-40 bg-gray-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-extrabold mb-10 tracking-tighter"
          >
            Ready to <span className="text-gradient">Evolve</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 font-medium mb-14 leading-relaxed"
          >
            Join 10,000+ ambitious students building their legacy today.
          </motion.p>
          <button className="bg-white text-gray-900 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-gray-100 transition-colors">
            Start Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 bg-white border-t border-border">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-1 md:col-span-1"
            >
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
                  <Bot size={20} />
                </div>
                <span className="text-xl font-heading font-extrabold text-gray-900">UniPath</span>
              </div>
              <p className="text-gray-500 font-medium text-[13px] leading-relaxed">
                Strategic educational planning powered by data-driven insights and AI.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="font-bold text-gray-900 mb-8 uppercase tracking-[0.2em] text-[11px]">Platforms</h4>
              <ul className="space-y-4 text-[13px] font-bold text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Summer Schools</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Competitions</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">UniGuide AI</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Roadmap Tool</a></li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-bold text-gray-900 mb-8 uppercase tracking-[0.2em] text-[11px]">Company</h4>
              <ul className="space-y-4 text-[13px] font-bold text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Our Mission</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Partnerships</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="font-bold text-gray-900 mb-8 uppercase tracking-[0.2em] text-[11px]">Community</h4>
              <ul className="space-y-4 text-[13px] font-bold text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Parents Forum</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Knowledge Base</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="pt-12 border-t border-border flex flex-col md:row items-center justify-between gap-6"
          >
            <p className="text-gray-400 text-[11px] font-bold uppercase tracking-widest">
              &copy; {new Date().getFullYear()} UniPath. Established 2024.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Github size={18} /></a>
            </div>
          </motion.div>
        </div>
      </footer>
    </main>
  );
}
