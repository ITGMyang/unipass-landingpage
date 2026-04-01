"use client";

import React from 'react';
import Navbar from '@/components/sections/Navbar';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    Search,
    FileText,
    Target,
    Settings,
    Clock,
    MessageSquare,
    Phone,
    ArrowUpRight,
    Shield,
    GraduationCap,
    ClipboardCheck,
    LayoutDashboard,
    Check
} from 'lucide-react';

export default function PlatformPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Abstract Background Gradient */}
                <div className="absolute top-0 right-0 w-full h-[600px] opacity-20 pointer-events-none -z-10 bg-radial-at-tr from-primary/40 via-purple-200 to-transparent blur-3xl" />

                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <h1 className="text-6xl md:text-8xl font-heading font-extrabold tracking-tighter text-dark">
                            Platform
                        </h1>
                    </motion.div>

                    {/* Dashboard Mockup Replicated */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative mx-auto max-w-5xl rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 bg-white"
                    >
                        <div className="flex h-[500px]">
                            {/* Sidebar Mockup */}
                            <div className="w-64 bg-[#1a1a1a] p-8 hidden md:flex flex-col border-r border-white/5">
                                <div className="flex items-center gap-3 mb-10">
                                    <div className="bg-white p-1.5 rounded-lg h-10 overflow-hidden">
                                        <img src="/Logo.jpg" alt="Logo" className="h-full w-auto" />
                                    </div>
                                </div>
                                <div className="space-y-6 opacity-60">
                                    <div className="flex items-center gap-4"><LayoutDashboard size={18} className="text-primary" /> <div className="h-2.5 w-24 bg-white/20 rounded-full" /></div>
                                    <div className="flex items-center gap-4"><FileText size={18} className="text-white" /> <div className="h-2.5 w-28 bg-white/10 rounded-full" /></div>
                                    <div className="flex items-center gap-4"><Target size={18} className="text-white" /> <div className="h-2.5 w-20 bg-white/10 rounded-full" /></div>
                                    <div className="flex items-center gap-4"><Settings size={18} className="text-white" /> <div className="h-2.5 w-32 bg-white/10 rounded-full" /></div>
                                </div>
                            </div>

                            {/* Main Content Mockup */}
                            <div className="flex-1 bg-gray-50/50 p-8">
                                <div className="h-10 w-full bg-gray-100 rounded-xl mb-8" />
                                <div className="grid grid-cols-3 gap-6 mb-8">
                                    <div className="h-44 bg-card-yellow/40 rounded-3xl border border-yellow-100 p-6">
                                        <div className="h-2 w-full bg-yellow-200/50 rounded-full mb-3" />
                                        <div className="h-2 w-3/4 bg-yellow-200/50 rounded-full mb-3" />
                                        <div className="h-2 w-5/6 bg-yellow-200/50 rounded-full" />
                                    </div>
                                    <div className="h-44 bg-card-orange/40 rounded-3xl border border-orange-100 p-6">
                                        <div className="h-2 w-full bg-orange-200/50 rounded-full mb-3" />
                                        <div className="h-2 w-3/4 bg-orange-200/50 rounded-full mb-3" />
                                        <div className="h-2 w-5/6 bg-orange-200/50 rounded-full" />
                                    </div>
                                    <div className="h-44 bg-card-green/40 rounded-3xl border border-green-100 p-6">
                                        <div className="h-2 w-full bg-green-200/50 rounded-full mb-3" />
                                        <div className="h-2 w-3/4 bg-green-200/50 rounded-full mb-3" />
                                        <div className="h-2 w-5/6 bg-green-200/50 rounded-full" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="h-32 bg-card-purple/40 rounded-3xl border border-purple-100" />
                                    <div className="h-32 bg-gray-100 rounded-3xl border border-gray-200" />
                                </div>
                            </div>
                        </div>

                        {/* Floating Arrow Graphic (as seen in screenshot) */}
                        <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
                            <svg className="w-full h-full" viewBox="0 0 1000 500">
                                <path
                                    d="M400,450 C450,300 600,600 800,100"
                                    stroke="var(--primary)"
                                    strokeWidth="4"
                                    fill="none"
                                    strokeDasharray="10"
                                    className="animate-pulse"
                                />
                                <circle cx="800" cy="100" r="8" fill="var(--primary)" />
                            </svg>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Dark Planning Hub Section */}
            <section className="bg-dark text-white py-24">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight mb-8">
                            Your Planning Hub for University Applications
                        </h2>
                        <p className="text-xl text-white/60 font-medium leading-relaxed">
                            Uniguide AI simplifies every step of the application journey, helping students stay organized, make informed decisions, and build strong portfolios.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Feature Cards Section */}
            <section className="py-24 bg-[#fcfcfc]">
                <div className="container mx-auto px-6 max-w-7xl space-y-12">

                    {/* Card 1: AI-Powered Profile Optimization */}
                    <FeatureCard
                        title="AI-Powered Profile Optimization"
                        description="Receive personalized recommendations based on real admissions trends."
                        subdesc="Uniguide helps identify missing experiences, strengths to highlight, and opportunities to enhance competitiveness."
                        points={[
                            "Recommends leadership, volunteering, competitions, or courses",
                            "Built on 10,000+ successful admissions profiles"
                        ]}
                        imageContent={(
                            <div className="relative w-full h-full flex items-center justify-center">
                                <div className="absolute w-40 h-40 bg-card-green/50 rounded-full blur-2xl" />
                                <div className="relative z-10 p-10 bg-white rounded-full shadow-xl border border-gray-100">
                                    <div className="relative">
                                        <Search size={80} className="text-dark" strokeWidth={1} />
                                        <div className="absolute -bottom-2 -right-2 bg-primary p-3 rounded-full text-dark">
                                            <GraduationCap size={24} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        reversed={false}
                    />

                    {/* Card 2: Centralized Document Hub */}
                    <FeatureCard
                        title="Centralized Document Hub"
                        description="Store every important document in one secure place. Essays, certificates, transcripts, recommendation letters — all neatly organized and accessible."
                        points={[
                            "No more scattered files",
                            "Easy sharing with parents or counsellors"
                        ]}
                        imageContent={(
                            <div className="relative w-full h-full flex items-center justify-center">
                                <div className="absolute w-48 h-48 bg-card-orange/50 rounded-full blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                                <div className="relative flex items-center gap-[-40px]">
                                    <motion.div
                                        animate={{ rotate: -5, x: 20 }}
                                        className="w-40 h-56 bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
                                    >
                                        <div className="space-y-3">
                                            <div className="h-2 w-full bg-gray-100 rounded-full" />
                                            <div className="h-2 w-2/3 bg-gray-100 rounded-full" />
                                            <div className="h-2 w-full bg-gray-100 rounded-full" />
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        animate={{ rotate: 5, x: -20, y: 10 }}
                                        className="w-40 h-56 bg-white rounded-2xl shadow-xl border border-gray-100 p-6"
                                    >
                                        <div className="space-y-3">
                                            <div className="h-2 w-full bg-gray-100 rounded-full" />
                                            <div className="h-2 w-full bg-gray-100 rounded-full" />
                                            <div className="h-2 w-1/2 bg-gray-100 rounded-full" />
                                        </div>
                                    </motion.div>
                                    <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 bg-orange-100 p-4 rounded-2xl shadow-xl">
                                        <FileText size={40} className="text-orange-500" />
                                    </div>
                                </div>
                            </div>
                        )}
                        reversed={true}
                    />

                    {/* Card 3: University-Specific Tailoring */}
                    <FeatureCard
                        title="University-Specific Tailoring"
                        description="Each university has unique expectations. Uniguide adapts your portfolio automatically."
                        points={[
                            "Admission criteria presented clearly",
                            "Requirements updated as they change",
                            "Smart suggestions to match school expectations"
                        ]}
                        imageContent={(
                            <div className="relative w-full h-full flex items-center justify-center">
                                <div className="w-80 h-52 bg-dark rounded-[2rem] p-8 shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full" />
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4">
                                            <GraduationCap className="text-primary" size={28} />
                                            <div className="h-3 w-40 bg-white/10 rounded-full" />
                                            <div className="ml-auto flex gap-1">
                                                <div className="w-10 h-10 rounded-full border-4 border-primary border-t-transparent animate-spin" />
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 text-white/40">
                                            <Shield className="text-white/40" size={28} />
                                            <div className="h-3 w-32 bg-white/10 rounded-full" />
                                            <div className="ml-auto w-10 h-10 rounded-full border-4 border-orange-400/30 border-t-orange-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        reversed={false}
                    />

                    {/* Card 4: Goal Tracking & Feedback */}
                    <FeatureCard
                        title="Goal Tracking & Feedback"
                        description="Build structure into your journey with real-time tracking and shared visibility."
                        points={[
                            "Set academic and extracurricular goals",
                            "Track progress over time",
                            "Counsellors and parents can stay aligned"
                        ]}
                        imageContent={(
                            <div className="relative w-full h-full flex items-center justify-center">
                                <div className="absolute w-48 h-48 bg-card-yellow/50 rounded-full blur-3xl" />
                                <div className="relative w-64 h-80 bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="h-4 w-24 bg-gray-100 rounded-full" />
                                        <Target className="text-purple-500" size={24} />
                                    </div>
                                    <div className="relative h-40 flex flex-col justify-between items-center py-4">
                                        <div className="absolute h-full w-[2px] bg-dashed-line left-1/2 -translate-x-1/2" />
                                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10">
                                            <ClipboardCheck size={16} className="text-dark" />
                                        </div>
                                        <div className="w-6 h-6 rounded-full bg-gray-100 z-10" />
                                        <div className="w-6 h-6 rounded-full bg-gray-100 z-10" />
                                        <div className="w-12 h-12 rounded-full border-4 border-purple-500 flex items-center justify-center bg-white z-10">
                                            <Target size={24} className="text-purple-500" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        reversed={true}
                    />

                    {/* Card 5: 24/7 Intelligent Support */}
                    <FeatureCard
                        title="24/7 Intelligent Support"
                        description="Access guidance anytime — for questions, decisions, deadlines, and next steps."
                        imageContent={(
                            <div className="relative w-full h-full flex items-center justify-center">
                                <div className="absolute w-56 h-56 bg-card-blue/50 rounded-full blur-3xl" />
                                <div className="relative w-64 h-64 bg-white rounded-full shadow-2xl border border-gray-100 flex items-center justify-center">
                                    <div className="relative">
                                        <Clock size={120} className="text-dark/10" strokeWidth={1} />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-2 h-20 bg-dark rounded-full origin-bottom" style={{ transform: 'rotate(45deg)' }} />
                                            <div className="w-[2px] h-24 bg-primary rounded-full origin-bottom" style={{ transform: 'rotate(180deg)' }} />
                                        </div>
                                    </div>
                                    <div className="absolute -left-10 top-1/2 -translate-y-1/2 bg-dark p-6 rounded-[2rem] shadow-xl text-white">
                                        <Phone size={32} />
                                    </div>
                                    <div className="absolute -right-6 top-10 bg-purple-500 p-4 rounded-2xl shadow-xl text-white">
                                        <MessageSquare size={24} />
                                    </div>
                                </div>
                            </div>
                        )}
                        reversed={false}
                    />

                </div>
            </section>

            {/* Footer (Simplified from Home) */}
            <footer className="bg-dark pt-32 pb-16">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center border-b border-white/5 pb-12 mb-12">
                        <div className="flex flex-col gap-2 scale-90 origin-left">
                            <div className="bg-white p-2 rounded-xl h-12 w-fit flex items-center justify-center">
                                <img src="/Logo.jpg" alt="UniGuide Logo" className="h-full w-auto" />
                            </div>
                            <p className="text-white/40 text-[13px] font-bold uppercase tracking-widest">
                                Strategic educational planning powered by AI.
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-4">
                            <h4 className="text-white/20 text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Contact Us</h4>
                            <a href="mailto:hello@uniguide.ai" className="text-white text-xl font-heading font-bold hover:text-primary transition-colors">
                                hello@uniguide.ai
                            </a>
                        </div>

                        <div className="flex justify-end gap-8">
                            <Link href="https://app.uniguide-ai.ca" className="modern-button-primary px-8 py-3 rounded-xl font-bold no-underline">
                                Join Waitlist
                            </Link>
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

function FeatureCard({ title, description, subdesc, points, imageContent, reversed }: {
    title: string,
    description: string,
    subdesc?: string,
    points?: string[],
    imageContent: React.ReactNode,
    reversed: boolean
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500`}
        >
            <div className="flex-1 w-full min-h-[300px] md:min-h-[400px]">
                {imageContent}
            </div>
            <div className="flex-1 space-y-6">
                <h3 className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight text-dark">
                    {title}
                </h3>
                <div className="space-y-4">
                    <p className="text-lg font-bold text-dark/80">
                        {description}
                    </p>
                    {subdesc && (
                        <p className="text-dark/60 font-medium leading-relaxed">
                            {subdesc}
                        </p>
                    )}
                </div>
                {points && (
                    <ul className="space-y-4">
                        {points.map((point, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                <span className="text-dark/70 font-bold text-sm tracking-tight">{point}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </motion.div>
    );
}
