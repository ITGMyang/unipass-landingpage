import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
        type: 'text',
        title: 'Complete your academic and extracurricular profile in minutes.',
        category: 'Analyze',
        bgColor: 'var(--card-yellow)',
        icon: '01'
    },
    {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        alt: 'Data Processing'
    },
    {
        type: 'text',
        title: 'Our AI compares your data with 10k successful admission records.',
        category: 'Match',
        bgColor: 'var(--card-green)',
        icon: '02'
    },
    {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        alt: 'Analytics Dashboard'
    },
    {
        type: 'text',
        title: 'Receive a prioritized list of Reach, Match, and Safety schools.',
        category: 'Generate',
        bgColor: 'var(--card-purple)',
        icon: '03'
    },
    {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800',
        alt: 'Project Planning'
    },
    {
        type: 'text',
        title: 'Get a clear step-by-step roadmap to boost your chances for each school.',
        category: 'Execute',
        bgColor: 'var(--card-orange)',
        icon: '04'
    },
    {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
        alt: 'Student Success'
    }
];

export default function Features() {
    return (
        <section id="how" className="py-32 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Section Header */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-block px-6 py-2 rounded-full border border-dark/5 mb-8"
                    >
                        <span className="text-dark font-bold text-lg underline-bespoke uppercase tracking-widest">Process</span>
                    </motion.div>

                    <h2 className="text-5xl md:text-7xl font-heading font-extrabold text-dark mb-10 tracking-tighter">
                        How <span className="text-primary italic">it works</span>.
                    </h2>

                    <p className="max-w-3xl mx-auto text-xl text-dark/70 font-medium leading-relaxed">
                        From data to decision. Our seamless pipeline turns your profile into a winning application strategy.
                    </p>
                </div>

                {/* Bento Grid Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[320px]">
                    {steps.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className={`rounded-[2.5rem] overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500 ${item.type === 'text' ? 'p-10 flex flex-col justify-center relative' : ''
                                }`}
                            style={item.type === 'text' ? { backgroundColor: item.bgColor } : {}}
                        >
                            {item.type === 'image' ? (
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                />
                            ) : (
                                <>
                                    <span className="absolute top-8 right-8 text-4xl font-heading font-black text-dark/5 group-hover:text-dark/10 transition-colors">
                                        {item.icon}
                                    </span>
                                    <h4 className="text-2xl font-heading font-extrabold text-dark mb-4">
                                        {item.category}
                                    </h4>
                                    <p className="text-dark/80 font-bold text-lg leading-tight">
                                        {item.title}
                                    </p>
                                </>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
