"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function PromoPopup() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000); // 1-second delay for a fast popup on refresh
        return () => clearTimeout(timer);
    }, []);

    const closePopup = () => {
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closePopup}
                        className="absolute inset-0 bg-dark/40 backdrop-blur-sm"
                    />

                    {/* Popup Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative bg-white rounded-[2.5rem] p-8 md:p-12 max-w-lg w-full shadow-2xl border border-primary/20 overflow-hidden"
                    >
                        {/* Decorative background element */}
                        <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                        
                        {/* Close Button */}
                        <button
                            onClick={closePopup}
                            className="absolute top-6 right-6 p-2 rounded-full hover:bg-dark/5 transition-colors text-dark/40 hover:text-dark"
                        >
                            <X size={20} />
                        </button>

                        <div className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-dark mb-6 shadow-lg rotate-3">
                                <Sparkles size={32} />
                            </div>

                            <h3 className="text-3xl font-heading font-extrabold text-dark mb-4 leading-tight">
                                Exclusive Early <br /> Access Offer 🌟
                            </h3>

                            <p className="text-lg text-dark/70 font-medium mb-8 leading-relaxed">
                                Don&apos;t miss our limited-time launch deal! Get UniGuide for only <span className="text-dark font-black px-1.5 py-0.5 bg-primary/20 rounded-md">9.9 CAD/month</span>. 
                                Lock in this valuable rate today!
                            </p>

                            <Link 
                                href="/#pricing" 
                                onClick={closePopup}
                                className="modern-button w-full !py-4 flex justify-center items-center gap-2 group"
                            >
                                Start Your Journey Now
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <button 
                                onClick={closePopup}
                                className="mt-6 text-dark/40 hover:text-dark text-sm font-bold uppercase tracking-widest transition-colors"
                            >
                                Maybe later
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
