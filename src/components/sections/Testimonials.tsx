import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
    {
        name: "Sarah Chen",
        role: "Stanford Admit '27",
        text: "UniGuide's AI selection tool was spot on. It identified two schools I hadn't even considered that ended up being my top matches.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
        rating: 5
    },
    {
        name: "Marcus Thompson",
        role: "UofT Engineering Student",
        text: "The data-driven approach gave me the confidence to apply to reach schools. The personalized roadmap was a game changer.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
        rating: 5
    },
    {
        name: "Elena Rodriguez",
        role: "Parent of Grade 12 Student",
        text: "As a parent, the clarity UniGuide provided reduced our family stress exponentially. We knew exactly where we stood.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-32 bg-dark overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-block px-6 py-2 rounded-full border border-white/10 mb-8"
                    >
                        <span className="text-primary font-bold text-lg uppercase tracking-widest">Success Stories</span>
                    </motion.div>

                    <h2 className="text-5xl md:text-7xl font-heading font-extrabold text-white mb-10 tracking-tighter">
                        Loved by <span className="text-primary italic">Ambitious</span> Students.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] relative group hover:bg-white/10 transition-all duration-500"
                        >
                            <Quote size={40} className="text-primary/20 absolute top-8 right-8" />

                            <div className="flex gap-1 mb-6">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="var(--primary)" className="text-primary" />
                                ))}
                            </div>

                            <p className="text-white/80 text-lg font-medium leading-relaxed mb-10 italic">
                                "{item.text}"
                            </p>

                            <div className="flex items-center gap-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                                />
                                <div>
                                    <h4 className="text-white font-bold text-lg">{item.name}</h4>
                                    <p className="text-white/40 text-sm font-bold uppercase tracking-wider">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
