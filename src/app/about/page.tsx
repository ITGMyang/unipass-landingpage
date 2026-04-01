"use client";

import React, { useState } from 'react';
import Navbar from '@/components/sections/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Compass,
    Target,
    Eye,
    Diamond,
    Plus,
    Minus,
    ArrowUpRight
} from 'lucide-react';

export default function AboutPage() {
    const [openTeamId, setOpenTeamId] = useState<string | null>("min-he");

    const team = [
        { id: "tantuo-xu", name: "Tantuo Xu", role: "CEO", bio: "" },
        {
            id: "min-he",
            name: "Min He",
            role: "CTO",
            bio: "Senior product and engineering leader with 16+ years of experience building complex digital systems and managing large development teams."
        },
        { id: "eva-wang", name: "Duoyi (Eva) Wang", role: "CCO", bio: "" },
        { id: "yi-chen", name: "Yi Chen", role: "CMO", bio: "" },
        { id: "yan-shi", name: "Yan Shi", role: "COO", bio: "" },
    ];

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute top-0 right-0 w-full h-[600px] opacity-20 pointer-events-none -z-10 bg-radial-at-tr from-primary/30 via-purple-100 to-transparent blur-[120px]" />

                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex-1 space-y-8"
                        >
                            <h1 className="text-6xl md:text-8xl font-heading font-extrabold tracking-tighter text-dark">
                                About
                            </h1>
                            <div className="space-y-6 text-lg md:text-xl text-dark/70 font-medium leading-relaxed max-w-2xl">
                                <p>
                                    UniGuide AI was founded by a team with more than a decade of experience guiding students into top universities worldwide.
                                </p>
                                <p>
                                    After supporting over 2,000 applicants and witnessing the challenges students face each year, we saw an opportunity to create something better: A system that brings together the structure of admissions consulting, the scalability of technology, and the warmth of human mentorship.
                                </p>
                                <p>
                                    UniGuide brings these elements together to support students earlier, more affordably, and more efficiently than traditional approaches.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex-1 w-full"
                        >
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 aspect-[4/3]">
                                <img
                                    src="/about_hero_mentor_student_v2_1772375557762.png"
                                    alt="UniGuide Mentorship"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission, Vision, Values */}
            <section className="py-24 bg-[#fcfcfc] relative">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="space-y-6">
                            {/* Mission */}
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-card-yellow p-12 rounded-[2.5rem] shadow-sm flex flex-col gap-6"
                            >
                                <div className="flex items-center gap-4">
                                    <Target size={32} className="text-dark" />
                                    <h3 className="text-3xl font-heading font-extrabold text-dark tracking-tight">Our Mission</h3>
                                </div>
                                <p className="text-lg font-bold text-dark/80 leading-relaxed">
                                    To make high-quality university admissions support accessible to every student, using intelligent tools that simplify planning and strengthen outcomes.
                                </p>
                            </motion.div>

                            {/* Vision */}
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-card-orange p-12 rounded-[2.5rem] shadow-sm flex flex-col gap-6"
                            >
                                <div className="flex items-center gap-4">
                                    <Eye size={32} className="text-dark" />
                                    <h3 className="text-3xl font-heading font-extrabold text-dark tracking-tight">Our Vision</h3>
                                </div>
                                <p className="text-lg font-bold text-dark/80 leading-relaxed">
                                    A world where every learner can confidently navigate their academic future, backed by trustworthy guidance and data-driven insights.
                                </p>
                            </motion.div>
                        </div>

                        {/* Values */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-card-green p-12 rounded-[2.5rem] shadow-sm flex flex-col gap-6 h-full"
                        >
                            <div className="flex items-center gap-4">
                                <Diamond size={32} className="text-dark" />
                                <h3 className="text-3xl font-heading font-extrabold text-dark tracking-tight">Our Values</h3>
                            </div>
                            <ul className="space-y-6">
                                {[
                                    "We aim to help students make informed choices at every stage of their academic journey.",
                                    "We strive to apply technology thoughtfully, ensuring it delivers real value.",
                                    "We aim to design tools with educational purpose at their core.",
                                    "We strive to offer guidance that families can trust.",
                                    "We aim to keep admissions support accessible to all students, everywhere."
                                ].map((value, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="mt-2 w-2 h-2 rounded-full bg-dark/20 flex-shrink-0" />
                                        <p className="text-lg font-bold text-dark/80 leading-snug">{value}</p>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-32 bg-white relative">
                <div className="container mx-auto px-6 max-w-4xl text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-block px-6 py-2 rounded-full border border-dark/5 mb-8"
                    >
                        <span className="text-dark font-bold text-lg underline-bespoke">Meet</span>
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl font-heading font-extrabold text-dark tracking-tighter">
                        The UniGuide Team
                    </h2>
                </div>

                <div className="container mx-auto px-6 max-w-5xl space-y-4">
                    {team.map((member) => (
                        <div key={member.id} className="modern-card overflow-hidden">
                            <button
                                onClick={() => setOpenTeamId(openTeamId === member.id ? null : member.id)}
                                className="w-full text-left p-8 flex items-center justify-between hover:bg-gray-50/50 transition-colors"
                                aria-expanded={openTeamId === member.id}
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                    <h3 className="text-xl font-heading font-extrabold text-dark">{member.name}</h3>
                                    <span className="text-dark/40 font-bold text-sm uppercase tracking-widest">{member.role}</span>
                                </div>
                                <div className={`p-2 rounded-full transition-colors ${openTeamId === member.id ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-400'}`}>
                                    {openTeamId === member.id ? <Minus size={20} /> : <Plus size={20} />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openTeamId === member.id && member.bio && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-8 pt-0 border-t border-gray-50">
                                            <p className="text-lg text-dark/70 font-medium leading-relaxed max-w-3xl">
                                                {member.bio}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </section>

            {/* Basic Footer */}
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
                            <button className="modern-button-primary px-8 py-3 rounded-xl font-bold flex items-center gap-2">
                                Join Beta <ArrowUpRight size={18} />
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <p className="text-white/20 text-[11px] font-bold uppercase tracking-widest">
                            Copyright © UniGuide – All Rights Reserved
                        </p>
                    </div>
                </div>
            </footer>
        </main>
    );
}
