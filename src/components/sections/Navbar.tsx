"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot, Menu, X } from 'lucide-react';

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

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-8'
            }`}>
            <div className="container mx-auto px-6">
                <div className={`transition-all duration-500 rounded-2xl flex items-center justify-between mx-auto max-w-6xl px-8 py-3.5 ${isScrolled ? 'glass-panel shadow-[0_8px_30px_rgb(0,0,0,0.04)]' : 'bg-transparent'
                    }`}>
                    {/* Logo */}
                    <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-white">
                            <Bot size={20} />
                        </div>
                        <span className="text-xl font-heading font-extrabold tracking-tight text-gray-900">
                            UniPass
                        </span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-10">
                        {[
                            { name: 'Process', href: '#how-it-works' },
                            { name: 'Services', href: '#features' },
                            { name: 'Success', href: '#testimonials' },
                            { name: 'About', href: '#about' }
                        ].map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-[13px] font-bold text-gray-500 hover:text-primary transition-colors tracking-wide uppercase"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden md:flex items-center gap-6">
                        <button className="text-[13px] font-bold text-gray-900 hover:opacity-70 transition-opacity">Login</button>
                        <button className="modern-button !py-2 !px-6 text-[13px]">Get Started</button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2 text-gray-900"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-full left-6 right-6 mt-4 modern-card p-8 space-y-6 shadow-2xl"
                >
                    {[
                        { name: 'Process', href: '#how-it-works' },
                        { name: 'Services', href: '#features' },
                        { name: 'Success', href: '#testimonials' }
                    ].map((item) => (
                        <a key={item.name} href={item.href} className="block text-gray-600 font-bold" onClick={() => setMobileMenuOpen(false)}>
                            {item.name}
                        </a>
                    ))}
                    <button className="w-full modern-button py-3 text-sm font-bold">Get Started</button>
                </motion.div>
            )}
        </nav>
    );
}
