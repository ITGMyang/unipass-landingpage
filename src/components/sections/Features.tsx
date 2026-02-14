import React from 'react';
import { motion } from 'framer-motion';

const features = [
    {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800',
        alt: 'Students studying'
    },
    {
        type: 'text',
        title: 'Plan early by getting clear direction on academics and extracurriculars that support future applications.',
        category: 'Plan',
        bgColor: 'var(--card-yellow)'
    },
    {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
        alt: 'Student interaction'
    },
    {
        type: 'text',
        title: 'Organize key documents and achievements all stored in one central place.',
        category: 'Organize',
        bgColor: 'var(--card-green)'
    },
    {
        type: 'text',
        title: 'Tailor applications to each university’s requirements, programs, and expectations.',
        category: 'Tailor',
        bgColor: 'var(--card-purple)'
    },
    {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
        alt: 'Collaboration'
    },
    {
        type: 'text',
        title: 'Track progress alongside parents and counsellors to stay aligned and confident at every step.',
        category: 'Track',
        bgColor: 'var(--card-orange)'
    },
    {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800',
        alt: 'Student working'
    }
];

export default function Features() {
    return (
        <section id="features" className="py-32 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Section Header */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-block px-6 py-2 rounded-full border border-dark/5 mb-8"
                    >
                        <span className="text-dark font-bold text-lg underline-bespoke">Meet</span>
                    </motion.div>

                    <div className="flex items-center justify-center gap-4 mb-10">
                        <svg width="40" height="40" viewBox="0 0 32 32" fill="none" className="text-dark">
                            <path d="M8 8V18C8 22.4183 11.5817 26 16 26C20.4183 26 24 22.4183 24 18V8" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                            <path d="M22 6L26 2L30 6" stroke="var(--primary)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M26 2L26 12" stroke="var(--primary)" strokeWidth="3.5" strokeLinecap="round" />
                        </svg>
                        <h2 className="text-5xl md:text-7xl font-heading font-extrabold text-dark tracking-tighter">
                            UniGuide
                        </h2>
                    </div>

                    <p className="max-w-3xl mx-auto text-lg text-dark/70 font-medium leading-relaxed">
                        UniGuide AI is a platform that helps students plan early, stay organized, and make confident decisions with the support of intelligent guidance.
                    </p>
                </div>

                {/* Bento Grid Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[300px]">
                    {features.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className={`rounded-[2rem] overflow-hidden ${item.type === 'text' ? 'p-10 flex flex-col justify-center' : ''
                                }`}
                            style={item.type === 'text' ? { backgroundColor: item.bgColor } : {}}
                        >
                            {item.type === 'image' ? (
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                                />
                            ) : (
                                <>
                                    <h4 className="text-xl font-heading font-bold text-dark mb-4">
                                        <span className="font-extrabold">{item.category}</span> early by getting
                                    </h4>
                                    <p className="text-dark/80 font-medium leading-relaxed">
                                        {item.title?.replace((item.category || '') + ' early by getting ', '')}
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
