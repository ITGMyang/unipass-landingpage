import React from 'react';
import { motion } from 'framer-motion';

const challenges = [
    "Confusing admission requirements",
    "High cost of one-on-one consulting",
    "Difficult to track achievements",
    "No clear academic roadmap"
];

export default function Challenge() {
    return (
        <section className="py-24 bg-dark text-white overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:row items-start justify-between gap-16">

                    <div className="flex-1 max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-heading font-extrabold mb-8"
                        >
                            Why <span className="text-primary tracking-tighter">UniGuide</span>?
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="space-y-6"
                        >
                            <h3 className="text-2xl font-bold text-white leading-tight underline-bespoke">AI-Powered Profile Optimization</h3>
                            <p className="text-lg text-white/60 font-medium leading-relaxed">
                                Receive personalized recommendations based on real admissions trends. 
                                UniGuide helps identify missing experiences, strengths to highlight, 
                                and opportunities to enhance competitiveness.
                            </p>
                        </motion.div>
                    </div>

                    <div className="flex-1 lg:pl-12">
                        <h3 className="text-xl font-bold mb-8 text-primary uppercase tracking-widest text-sm">Key Features:</h3>
                        <ul className="space-y-6">
                            {[
                                "Built on 10,000+ successful admissions profiles",
                                "Targeted leadership & volunteering strategies",
                                "Gap analysis to boost your competitive edge",
                                "Custom course & competition recommendations"
                            ].map((advantage, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (idx * 0.1) }}
                                    className="flex items-center gap-4 text-white/90 font-bold"
                                >
                                    <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]" />
                                    {advantage}
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
