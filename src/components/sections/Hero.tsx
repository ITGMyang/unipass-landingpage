"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ChatBot from '@/components/ui/ChatBot';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 150]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
            {/* Custom Hero Background Layer */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.img
                    style={{ y: y1 }}
                    src="/HeroImage.jpg"
                    alt="UniPass Hero"
                    className="w-full h-full object-cover opacity-[0.7] contrast-[1.02] scale-110"
                />
                {/* Stronger white overlays for text contrast */}
                <div className="absolute inset-0 bg-white/30" />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/90" />
            </div>

            {/* Subtle Glowing Accents */}
            <motion.div style={{ y: y2 }} className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-0" />
            <motion.div style={{ y: y1 }} className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-0" />

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-20">

                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-border text-[12px] font-bold text-gray-700 uppercase tracking-widest mb-10"
                        >
                            <Sparkles size={14} className="text-primary" />
                            <span>AI Background Enhancement</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="text-6xl md:text-[84px] font-heading font-extrabold text-gray-900 leading-[0.95] tracking-tighter mb-10"
                        >
                            Unlock Your <br />
                            <span className="text-gradient">Potential</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-lg md:text-xl text-gray-800 font-semibold mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            UniPass is an AI-first educational platform that strategically matches students with the world's most prestigious summer schools and academic competitions.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
                        >
                            <button className="modern-button !px-10 !py-4.5 text-lg group">
                                Begin Consultation
                                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-10 py-4.5 rounded-xl text-lg font-bold text-gray-600 hover:bg-muted transition-colors border border-border">
                                Watch Demo
                            </button>
                        </motion.div>

                        {/* Social Proof / Stats */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-16 flex items-center justify-center lg:justify-start gap-12"
                        >
                            <div className="flex flex-col gap-1">
                                <span className="text-3xl font-heading font-extrabold text-gray-900 tracking-tighter">5k+</span>
                                <span className="text-[11px] text-gray-500 font-bold uppercase tracking-widest leading-none">Global Programs</span>
                            </div>
                            <div className="w-[1px] h-8 bg-border" />
                            <div className="flex flex-col gap-1">
                                <span className="text-3xl font-heading font-extrabold text-gray-900 tracking-tighter">120+</span>
                                <span className="text-[11px] text-gray-500 font-bold uppercase tracking-widest leading-none">Top Universities</span>
                            </div>
                            <div className="w-[1px] h-8 bg-border" />
                            <div className="flex flex-col gap-1">
                                <span className="text-3xl font-heading font-extrabold text-gray-900 tracking-tighter">24/7</span>
                                <span className="text-[11px] text-gray-500 font-bold uppercase tracking-widest leading-none">AI Support</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Chat Mockup */}
                    <div className="flex-1 w-full max-w-[500px]">
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="relative"
                        >
                            {/* Subtle glass accent */}
                            <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl -z-10" />
                            <ChatBot />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
