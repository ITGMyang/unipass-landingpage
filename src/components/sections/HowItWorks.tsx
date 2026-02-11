"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Database, ListChecks, Target } from 'lucide-react';

const steps = [
    {
        title: "1. Diagnostic Chat",
        description: "Our AI assistant evaluates your academic history, interests, and aspirations through a friendly conversation.",
        icon: <MessageSquare size={24} />,
        delay: 0
    },
    {
        title: "2. Database Analysis",
        description: "UniPath scans 10,000+ top-tier opportunities to find programs that maximize your admission chances.",
        icon: <Database size={24} />,
        delay: 0.1
    },
    {
        title: "3. Strategic Match",
        description: "Receive a curated list of summer schools and competitions ranked by relevance and prestige.",
        icon: <Target size={24} />,
        delay: 0.2
    }
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="pt-16 pb-32 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center max-w-2xl mx-auto mb-24">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-[0.2em] uppercase text-[11px] mb-6 block"
                    >
                        The Process
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 tracking-tight"
                    >
                        How UniPath <span className="text-gradient">Works.</span>
                    </motion.h2>
                </div>

                <div className="relative">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: step.delay }}
                                className="flex flex-col items-center text-center px-6"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white border border-border shadow-sm flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">{step.title}</h3>
                                <p className="text-gray-500 font-medium text-sm leading-relaxed max-w-xs">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
