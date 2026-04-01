"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Why UniGuide', href: '/#why' },
        { name: 'How it works', href: '/#how' },
        { name: 'Pricing', href: '/#pricing' },
        { name: 'Testimonials', href: '/#testimonials' },
        { name: 'Contact', href: '/#contact' }
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 translate-y-0' : 'py-8'}`}>
            <div className="container mx-auto px-6">
                <div className={`flex items-center justify-between mx-auto max-w-7xl px-8 py-4 transition-all duration-500 rounded-3xl ${isScrolled ? 'glass-panel shadow-sm border-white/20' : 'bg-transparent'
                    }`}>
                    {/* Brand Logo */}
                    <Link href="/" className="flex items-center gap-3 group cursor-pointer">
                        <div className="relative h-10 flex items-center justify-center">
                            <img
                                src="/Logo.jpg"
                                alt="UniGuide Logo"
                                className="h-full w-auto object-contain"
                            />
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-10">
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-[15px] font-bold text-dark/70 hover:text-dark transition-colors tracking-tight"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden md:flex items-center">
                        <Link href="https://app.uniguide-ai.ca" className="modern-button !rounded-full !py-2.5 !px-8 hover:!bg-primary hover:!text-dark transition-all duration-300 no-underline">
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden p-2 text-dark"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="lg:hidden fixed inset-x-6 top-24 z-50 modern-card p-8 space-y-6 shadow-2xl"
                    >
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block text-lg font-bold text-dark border-b border-border pb-4"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link href="https://app.uniguide-ai.ca" className="w-full modern-button-primary py-4 rounded-2xl font-bold flex items-center justify-center gap-2 no-underline">
                            Get Started <ArrowUpRight size={18} />
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
