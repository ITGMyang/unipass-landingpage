"use client";

import React from 'react';
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Challenge from '@/components/sections/Challenge';
import Features from '@/components/sections/Features';
import Differentiation from '@/components/sections/Differentiation';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Twitter, Facebook, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-[0%]"
        style={{ scaleX }}
      />

      <Hero />
      <Challenge />
      <Features />
      <Differentiation />

      {/* Footer Section */}
      <footer className="relative pt-40">

        {/* Continuous loop line decoration */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 -z-0 overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 1440 800">
            <path d="M-100,400 Q200,100 600,600 T1500,300" stroke="var(--primary)" strokeWidth="3" fill="none" />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          {/* Green CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary rounded-[2.5rem] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 mb-[-120px] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12">
              <svg width="200" height="200" viewBox="0 0 32 32" fill="currentColor">
                <path d="M8 8V18C8 22.4183 11.5817 26 16 26C20.4183 26 24 22.4183 24 18V8" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M22 6L26 2L30 6" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="text-dark max-w-xl text-center md:text-left">
              <h3 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tighter mb-6">Start your journey.</h3>
              <p className="text-xl font-bold opacity-80">Join the UniGuide beta community.</p>
            </div>

            <button className="bg-dark text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 hover:scale-105 transition-transform">
              Sign Up for Early Access
              <ArrowUpRight size={20} className="text-primary" />
            </button>
          </motion.div>
        </div>

        {/* Black Footer Base */}
        <div className="bg-dark pt-52 pb-16">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center border-b border-white/5 pb-12 mb-12">
              <div className="flex flex-col gap-2 scale-90 origin-left">
                <svg width="40" height="40" viewBox="0 0 32 32" fill="none" className="text-white mb-2">
                  <path d="M8 8V18C8 22.4183 11.5817 26 16 26C20.4183 26 24 22.4183 24 18V8" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                  <path d="M22 6L26 2L30 6" stroke="var(--primary)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M26 2L26 12" stroke="var(--primary)" strokeWidth="3.5" strokeLinecap="round" />
                </svg>
                <p className="text-white/40 text-[13px] font-bold uppercase tracking-widest">
                  Strategic educational planning powered by AI.
                </p>
              </div>

              <div className="flex flex-col items-center gap-4">
                <h4 className="text-white/20 text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Contact Us</h4>
                <a href="mailto:hello@uniguide.ai" className="text-white text-xl font-heading font-bold hover:text-primary transition-colors">
                  hello@uniguide.ai
                </a>
                <p className="text-white/40 text-[14px] font-medium">Global Headquarters • Remote First</p>
              </div>

              <div className="flex justify-end gap-8">
                <a href="#" className="text-white/60 hover:text-primary transition-colors"><Twitter size={20} /></a>
                <a href="#" className="text-white/60 hover:text-primary transition-colors"><Facebook size={20} /></a>
                <a href="#" className="text-white/60 hover:text-primary transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-white/60 hover:text-primary transition-colors"><Linkedin size={20} /></a>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-white/20 text-[11px] font-bold uppercase tracking-widest">
                Copyright © UniGuide – All Rights Reserved
              </p>
              <div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-white/20">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
