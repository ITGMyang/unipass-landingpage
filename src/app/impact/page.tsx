"use client";

import React from 'react';
import Navbar from '@/components/sections/Navbar';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    Users,
    BarChart3,
    GraduationCap,
    ArrowUpRight,
    CircleDot,
    HeartPulse
} from 'lucide-react';

export default function ImpactPage() {
    const stats = [
        {
            label: "applications reviewed",
            value: "1,148+",
            icon: <BarChart3 className="text-indigo-500" size={24} />,
            color: "text-indigo-500"
        },
        {
            label: "admission rate",
            value: "90%",
            subValue: "to top 50 universities",
            percentage: 90,
            icon: <CircleDot className="text-emerald-500" size={24} />,
            color: "text-emerald-500"
        },
        {
            label: "students supported",
            value: "2K+",
            icon: <Users className="text-orange-500" size={24} />,
            color: "text-orange-500"
        }
    ];

    const partners = [
        {
            name: "Techblazers",
            description: "STEM-driven innovation and learning",
            logo: (
                <div className="flex items-center gap-3 text-white group cursor-default">
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                        <Users size={20} />
                    </div>
                    <span className="text-2xl font-heading font-extrabold tracking-widest uppercase">Techblazers</span>
                </div>
            )
        },
        {
            name: "Half Dot Art Studio",
            description: "Creative skill-building for youth",
            logo: (
                <div className="flex items-center gap-3 text-white group cursor-default">
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                        <GraduationCap size={20} />
                    </div>
                    <span className="text-2xl font-heading font-extrabold tracking-widest uppercase">Half Dot Art</span>
                </div>
            )
        }
    ];

    const impactCards = [
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
            alt: 'Students collaborating'
        },
        {
            type: 'text',
            category: 'Students',
            title: 'Students planning early in Grades 9-10',
            bgColor: 'bg-card-green'
        },
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80&w=800',
            alt: 'Parent and child with laptop'
        },
        {
            type: 'text',
            category: 'Families',
            title: 'Families navigating the admissions landscape',
            bgColor: 'bg-card-yellow'
        },
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
            alt: 'Mentor and student'
        },
        {
            type: 'text',
            category: 'Counsellors',
            title: 'Counsellors and institutions seeking reliable academic insights',
            bgColor: 'bg-card-orange'
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Experience & Stats Section */}
            <section className="relative pt-40 pb-24 overflow-hidden">
                {/* mesh gradient background */}
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_50%,rgba(67,56,202,0.03)_0%,rgba(255,255,255,0)_100%),radial-gradient(50%_50%_at_0%_0%,rgba(16,185,129,0.03)_0%,rgba(255,255,255,0)_100%)]" />

                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 space-y-10">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-4"
                            >
                                <h1 className="text-6xl md:text-8xl font-heading font-extrabold tracking-tighter text-dark">
                                    Partners & Impact
                                </h1>
                                <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-dark/90">
                                    Built on Proven Experience
                                </h2>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="space-y-6 text-lg md:text-xl text-dark/70 font-medium leading-relaxed max-w-2xl"
                            >
                                <p>
                                    Before UniGuide AI, our founding team supported more than 1,148 U.S. undergraduate applications, guided 2,000+ students worldwide, and achieved a 90.2 percent admission rate to top 50 universities through personalized consulting and mentorship.
                                </p>
                                <p>
                                    That real-world experience now fuels UniGuide's technology, turning proven admissions insight into guidance that helps more students plan early, stay organized, and make confident decisions about their future.
                                </p>
                            </motion.div>
                        </div>

                        <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                            {/* Stat Card 1 */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="modern-card p-10 flex flex-col gap-4 relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
                            >
                                <div className="absolute top-0 right-0 p-6 opacity-10 scale-150 rotate-12 group-hover:rotate-0 transition-transform duration-500">
                                    {stats[0].icon}
                                </div>
                                <span className={`text-4xl font-heading font-extrabold ${stats[0].color}`}>
                                    {stats[0].value}
                                </span>
                                <span className="text-dark/60 font-bold uppercase tracking-wider text-sm leading-tight">
                                    {stats[0].label}
                                </span>
                            </motion.div>

                            {/* Circular Admission Stat */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                                className="modern-card p-10 flex flex-col items-center justify-center gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)] sm:row-span-2 aspect-square"
                            >
                                <div className="relative w-32 h-32 flex items-center justify-center">
                                    <svg className="w-full h-full -rotate-90">
                                        <circle
                                            cx="64" cy="64" r="58"
                                            stroke="currentColor"
                                            strokeWidth="10"
                                            fill="transparent"
                                            className="text-gray-100"
                                        />
                                        <circle
                                            cx="64" cy="64" r="58"
                                            stroke="currentColor"
                                            strokeWidth="10"
                                            fill="transparent"
                                            strokeDasharray={364.4}
                                            strokeDashoffset={364.4 * (1 - 0.9)}
                                            strokeLinecap="round"
                                            className="text-emerald-500"
                                        />
                                    </svg>
                                    <span className="absolute text-3xl font-heading font-extrabold text-dark">
                                        90%
                                    </span>
                                </div>
                                <span className="text-dark/60 font-bold uppercase tracking-wider text-sm text-center">
                                    admission rate
                                </span>
                            </motion.div>

                            {/* Stat Card 3 */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 }}
                                className="modern-card p-10 flex flex-col gap-4 relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
                            >
                                <div className="absolute top-0 right-0 p-6 opacity-10 scale-150 rotate-12 group-hover:rotate-0 transition-transform duration-500">
                                    {stats[2].icon}
                                </div>
                                <span className={`text-4xl font-heading font-extrabold ${stats[2].color}`}>
                                    {stats[2].value}
                                </span>
                                <span className="text-dark/60 font-bold uppercase tracking-wider text-sm leading-tight">
                                    {stats[2].label}
                                </span>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="py-32 bg-dark relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="flex-1 space-y-8">
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="text-5xl md:text-7xl font-heading font-extrabold text-white tracking-tighter"
                            >
                                Current Partners
                            </motion.h2>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                                className="space-y-6"
                            >
                                <p className="text-xl text-white/70 font-medium">
                                    We're proud to collaborate with organizations committed to student growth:
                                </p>
                                <ul className="space-y-4">
                                    {partners.map((partner, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                            <p className="text-lg text-white/90">
                                                <span className="font-bold underline decoration-primary/30 underline-offset-4">{partner.name}</span> – {partner.description}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-lg text-white/50 italic pt-4">
                                    We aim to form 5-7 new partnerships in Canada over the next year.
                                </p>
                            </motion.div>
                        </div>

                        <div className="flex-1 grid grid-cols-1 gap-12 justify-center lg:justify-end">
                            {partners.map((partner, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="flex justify-center lg:justify-end"
                                >
                                    {partner.logo}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Future Impact Section */}
            <section className="py-32 bg-[#fafafa] relative overflow-hidden">
                {/* Dots background */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

                <div className="container mx-auto px-6 max-w-7xl relative">
                    <div className="text-center mb-24 space-y-6">
                        <h2 className="text-5xl md:text-7xl font-heading font-extrabold text-dark tracking-tighter">
                            Our Future <span className="underline-bespoke">Impact</span>
                        </h2>
                        <p className="max-w-3xl mx-auto text-lg md:text-xl text-dark/60 font-medium leading-relaxed">
                            As UniGuide AI continues to evolve, the platform is designed to support a growing network of students, families, and educators, creating clarity and confidence at every stage of the academic process.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[340px]">
                        {impactCards.map((card, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`rounded-[2.5rem] overflow-hidden ${card.type === 'text' ? `${card.bgColor} p-12 flex flex-col justify-center gap-4` : ''
                                    }`}
                            >
                                {card.type === 'image' ? (
                                    <img
                                        src={card.src}
                                        alt={card.alt}
                                        className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
                                    />
                                ) : (
                                    <>
                                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-dark/30">
                                            {card.category}
                                        </span>
                                        <h3 className="text-2xl font-heading font-extrabold text-dark leading-tight">
                                            {card.title}
                                        </h3>
                                    </>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Custom CTA Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="bg-primary p-12 md:p-20 rounded-[3rem] text-dark flex flex-col md:flex-row items-center justify-between gap-12"
                    >
                        <div className="space-y-4 text-center md:text-left">
                            <h3 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tighter">Ready to start planning?</h3>
                            <p className="text-xl font-bold opacity-70">Join the UniGuide community today.</p>
                        </div>
                        <Link href="/#pricing" className="bg-dark text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 hover:scale-105 transition-transform whitespace-nowrap no-underline">
                            Sign Up for Early Access
                            <ArrowUpRight size={20} className="text-primary" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-dark pt-32 pb-16">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center border-b border-white/5 pb-12 mb-12">
                        <div className="flex flex-col gap-2 scale-90 origin-left">
                            <div className="bg-white p-2 rounded-xl h-12 w-fit flex items-center justify-center">
                                <img src="/Logo.jpg" alt="UniGuide Logo" className="h-full w-auto" />
                            </div>
                            <p className="text-white/40 text-[13px] font-bold uppercase tracking-widest">
                                Strategic educational planning powered by AI.
                            </p>
                        </div>

                        <div className="flex justify-end gap-8">
                            <Link href="/#pricing" className="modern-button-primary px-8 py-3 rounded-xl font-bold flex items-center gap-2 no-underline">
                                Get Started <ArrowUpRight size={18} />
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 font-bold uppercase tracking-widest text-[11px] text-white/20">
                        <p>Copyright © UniGuide – All Rights Reserved</p>
                        <div className="flex gap-8">
                            <a href="#" className="hover:text-white transition-colors">Privacy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms</a>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
