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
                            The Challenge Today
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-white/60 font-medium leading-relaxed"
                        >
                            Students face increasing pressure when planning for university.
                            Information is scattered, requirements change constantly, and
                            traditional consulting is expensive and hard to scale.
                        </motion.p>
                    </div>

                    <div className="flex-1 lg:pl-12">
                        <h3 className="text-xl font-bold mb-8 text-white/90">Students deal with:</h3>
                        <ul className="space-y-6">
                            {challenges.map((challenge, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (idx * 0.1) }}
                                    className="flex items-center gap-4 text-white/80 font-bold"
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    {challenge}
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
