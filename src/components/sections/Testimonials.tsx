"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Sarah Chen",
        role: "Admitted to Stanford",
        content: "UniPath AI found a specific CS competition I had never heard of. Winning that was the turning point in my application.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
        delay: 0
    },
    {
        name: "James Wilson",
        role: "Harvard '28",
        content: "The Summer School recommendations were spot on. It saved me weeks of research and helped me focus on programs that actually mattered.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
        delay: 0.1
    },
    {
        name: "Elena Rodriguez",
        role: "Oxford Applicant",
        content: "Building my academic profile felt overwhelming until I started using UniPath. The AI is like having a private consultant 24/7.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
        delay: 0.2
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-32 bg-gray-50/50">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-[0.2em] uppercase text-[11px] mb-6 block"
                    >
                        Success Stories
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 tracking-tight"
                    >
                        Hear from Our <span className="text-gradient">Global Scholars.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: item.delay }}
                            className="modern-card p-10 flex flex-col items-start relative group"
                        >
                            <Quote className="absolute top-8 right-8 text-primary/10 group-hover:text-primary/20 transition-colors" size={40} />

                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} className="fill-primary text-primary" />
                                ))}
                            </div>

                            <p className="text-gray-600 font-medium leading-relaxed mb-8 flex-1 italic">
                                "{item.content}"
                            </p>

                            <div className="flex items-center gap-4 mt-auto">
                                <img
                                    src={item.avatar}
                                    alt={item.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                                />
                                <div>
                                    <h4 className="font-heading font-bold text-gray-900 text-[15px]">{item.name}</h4>
                                    <p className="text-gray-400 font-bold text-[11px] uppercase tracking-wider">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
