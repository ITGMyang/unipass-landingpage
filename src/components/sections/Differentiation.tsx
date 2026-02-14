import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Accessibility, Target, ShieldCheck, PieChart, Info, Smartphone } from 'lucide-react';

const diffs = [
    {
        title: "AI-Driven Insights",
        desc: "Built on thousands of real university admissions cases to guide smarter decisions.",
        icon: <PieChart size={32} className="text-primary" />
    },
    {
        title: "Human + AI Guidance",
        desc: "Expert guidance and AI tools working together, not in isolation.",
        icon: <Brain size={32} className="text-primary" />
    },
    {
        title: "Accessible by Design",
        desc: "Freemium access that makes quality admissions support available to more students.",
        icon: <Info size={32} className="text-primary" />
    },
    {
        title: "Support at Every Stage",
        desc: "Available 24/7 to help students wherever they are in their academic journey.",
        icon: <Smartphone size={32} className="text-primary" />
    }
];

export default function Differentiation() {
    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-extrabold text-dark tracking-tight"
                    >
                        What Makes <span className="underline-bespoke">UniGuide Different</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {diffs.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="w-20 h-20 rounded-2xl bg-white border border-dark/5 shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                {item.icon}
                            </div>
                            <h4 className="text-xl font-heading font-bold text-dark mb-4">{item.title}</h4>
                            <p className="text-dark/60 font-medium text-[15px] leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Tagline */}
                <div className="mt-40 text-center relative">
                    <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-dark/5 -z-10" />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="bg-white px-12 inline-block"
                    >
                        <h3 className="text-4xl md:text-[52px] font-heading font-extrabold text-dark leading-tight tracking-tighter mb-6">
                            Designed for Students. Built for <br />
                            Families. Ready for Schools.
                        </h3>
                        <p className="text-dark/60 font-bold text-[15px] max-w-2xl mx-auto uppercase tracking-wide">
                            Whether you’re exploring options in Grade 9 or preparing applications in Grade 12, UniGuide keeps everyone aligned and informed.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
