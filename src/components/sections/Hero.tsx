import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-[95vh] flex items-center pt-32 pb-20 overflow-hidden bg-white">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />

                {/* Hand-drawn loop SVG placeholder style */}
                <svg className="absolute top-1/2 left-0 w-full h-full opacity-10" viewBox="0 0 1000 1000">
                    <path d="M-100,500 C100,200 400,800 600,500 S900,200 1100,500" stroke="var(--primary)" strokeWidth="2" fill="none" />
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">

                    {/* Content Column */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-5xl md:text-[88px] font-heading font-extrabold text-dark leading-[1.05] tracking-tighter mb-10"
                        >
                            A <span className="underline-bespoke">Smarter</span> Path <br />
                            to University.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-lg md:text-xl text-dark/70 font-medium mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            Supporting students with clear, data-driven guidance to build competitive applications.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <button className="modern-button !py-4 !px-10 gap-2 group">
                                Join the Beta
                                <span className="bg-primary text-dark text-[10px] font-bold px-1.5 py-0.5 rounded-full">1</span>
                            </button>
                            <button className="modern-button-primary !py-4 !px-10 font-bold rounded-xl hover:shadow-lg transition-all">
                                Explore the Platform
                            </button>
                        </motion.div>
                    </div>

                    {/* Visual Column */}
                    <div className="flex-1 relative w-full max-w-[600px] lg:max-w-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="relative"
                        >
                            {/* Student Image */}
                            <img
                                src="/uniguide_hero_student.png"
                                alt="Student using UniGuide"
                                className="w-full h-auto relative z-10 drop-shadow-2xl"
                            />

                            {/* Floating UI Cards */}

                            {/* Progress Card */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-[15%] left-[-5%] z-20 modern-card p-4 flex gap-4 items-center min-w-[200px] shadow-xl"
                            >
                                <div className="space-y-2 flex-1">
                                    <div className="h-2 w-full bg-border rounded-full overflow-hidden">
                                        <div className="h-full w-[70%] bg-primary" />
                                    </div>
                                    <div className="h-2 w-[40%] bg-border rounded-full" />
                                </div>
                            </motion.div>

                            {/* Sparkle Card */}
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute bottom-[20%] left-[10%] z-20 modern-card p-4 flex gap-3 items-center shadow-xl"
                            >
                                <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white">
                                    <Sparkles size={16} />
                                </div>
                                <div className="w-20 h-2 bg-border rounded-full" />
                            </motion.div>

                            {/* Checklist Card */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute top-[40%] right-[-5%] z-20 modern-card p-5 space-y-3 min-w-[180px] shadow-xl"
                            >
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex gap-3">
                                        <div className={`w-4 h-4 rounded border-2 ${i < 3 ? 'bg-orange-400 border-orange-400' : 'border-border'}`} />
                                        <div className="flex-1 h-2 bg-border rounded-full self-center" />
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Hand-drawn decorative arrow element */}
                        <svg className="absolute top-[10%] right-[10%] w-32 h-32 text-primary opacity-40 z-0" viewBox="0 0 100 100">
                            <path d="M10,90 Q50,90 80,20" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="4 2" />
                            <path d="M75,25 L82,18 L86,27" stroke="currentColor" strokeWidth="2" fill="none" />
                        </svg>
                    </div>

                </div>
            </div>
        </section>
    );
}
