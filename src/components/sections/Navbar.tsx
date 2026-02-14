import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

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
        { name: 'About', href: '#about' },
        { name: 'Platform', href: '#features' },
        { name: 'Partners & Impact', href: '#impact' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 translate-y-0' : 'py-8'}`}>
            <div className="container mx-auto px-6">
                <div className={`flex items-center justify-between mx-auto max-w-7xl px-8 py-4 transition-all duration-500 rounded-3xl ${isScrolled ? 'glass-panel shadow-sm border-white/20' : 'bg-transparent'
                    }`}>
                    {/* Brand Logo */}
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="relative w-10 h-10 flex items-center justify-center">
                            <div className="absolute inset-0 bg-primary/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                            <svg
                                width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                                className="relative z-10"
                            >
                                <path d="M8 8V18C8 22.4183 11.5817 26 16 26C20.4183 26 24 22.4183 24 18V8" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                                <path d="M22 6L26 2L30 6" stroke="var(--primary)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M26 2L26 12" stroke="var(--primary)" strokeWidth="3.5" strokeLinecap="round" />
                            </svg>
                        </div>
                        <span className="text-2xl font-heading font-extrabold tracking-tight text-dark">
                            UniGuide
                        </span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-10">
                        {navLinks.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-[15px] font-bold text-dark/70 hover:text-dark transition-colors tracking-tight"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden md:flex items-center">
                        <button className="modern-button !rounded-full !py-2.5 !px-8 hover:!bg-primary hover:!text-dark transition-all duration-300">
                            Join waitlist
                        </button>
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
                            <a
                                key={item.name}
                                href={item.href}
                                className="block text-lg font-bold text-dark border-b border-border pb-4"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <button className="w-full modern-button-primary py-4 rounded-2xl font-bold flex items-center justify-center gap-2">
                            Join waitlist <ArrowUpRight size={18} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
