"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe, Users } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="py-32 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col lg:flex-row items-center gap-20">

                    {/* Visual Side */}
                    <div className="flex-1 relative">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="modern-card p-2 relative z-10 overflow-hidden"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
                                alt="Our Mission"
                                className="rounded-xl object-cover grayscale-[20%] contrast-[1.1]"
                            />
                        </motion.div>

                        {/* Decorative background elements */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
                        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
                    </div>

                    {/* Content Side */}
                    <div className="flex-1">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold tracking-[0.2em] uppercase text-[11px] mb-6 block"
                        >
                            Our Mission
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 tracking-tight mb-8"
                        >
                            Democratizing <span className="text-gradient">Elite Education</span>.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-500 font-medium leading-relaxed mb-10"
                        >
                            At UniPass, we believe that access to high-prestige summer schools and competitions shouldn't be limited by who you know. We've built an AI that brings transparency to the background enhancement process.
                        </motion.p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-primary shrink-0">
                                    <ShieldCheck size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm mb-1 text-nowrap">Verified Database</h4>
                                    <p className="text-gray-400 text-xs font-medium leading-normal">Every program is audited for prestige and impact.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-primary shrink-0">
                                    <Globe size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm mb-1 text-nowrap">Global Reach</h4>
                                    <p className="text-gray-400 text-xs font-medium leading-normal">Opportunities across Asia, Europe, and the US.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
