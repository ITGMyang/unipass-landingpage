"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Trophy, Database, Zap } from 'lucide-react';

// Minimalist Icons
const graduationCap = <GraduationCap size={32} strokeWidth={1.5} />;
const trophy = <Trophy size={32} strokeWidth={1.5} />;
const database = <Database size={32} strokeWidth={1.5} />;
const zap = <Zap size={32} strokeWidth={1.5} />;

const features = [
    {
        title: "Program Intelligence",
        description: "Our AI maps your academic profile to elite summer programs at Harvard, Stanford, and Oxford.",
        icon: graduationCap,
        delay: 0
    },
    {
        title: "Competition Strategy",
        description: "Identify high-prestige competitions that align with your major and career aspirations.",
        icon: trophy,
        delay: 0.1
    },
    {
        title: "Deep Database",
        description: "Access a proprietary database of 10,000+ audited academic opportunities worldwide.",
        icon: database,
        delay: 0.2
    },
    {
        title: "Instant Guidance",
        description: "Real-time answers to application queries and strategic background elevation advice.",
        icon: zap,
        delay: 0.3
    }
];

export default function Features() {
    return (
        <section id="features" className="py-32 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col lg:flex-row items-end justify-between gap-10 mb-24">
                    <div className="max-w-xl">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold tracking-[0.2em] uppercase text-[11px] mb-6 block"
                        >
                            Intelligence Platform
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 tracking-tight"
                        >
                            Strategize Your <br />
                            <span className="text-gradient">Academic Future.</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="lg:max-w-xs"
                    >
                        <p className="text-gray-500 font-medium leading-relaxed">
                            We leverage large-scale data to provide students with a competitive edge in elite university admissions.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: feature.delay }}
                            className="group p-10 hover:bg-muted transition-colors duration-500 rounded-3xl cursor-default"
                        >
                            <div className="mb-8 text-primary group-hover:scale-110 transition-transform duration-500 origin-left">
                                {feature.icon}
                            </div>
                            <h3 className="text-[17px] font-heading font-bold text-gray-900 mb-4">{feature.title}</h3>
                            <p className="text-[14px] text-gray-500 font-medium leading-[1.6]">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
