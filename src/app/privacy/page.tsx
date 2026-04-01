import React from 'react';
import Navbar from '@/components/sections/Navbar';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <section className="pt-40 pb-20 bg-muted">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-dark tracking-tighter mb-6">
                        Privacy <span className="underline-bespoke">Policy</span>
                    </h1>
                    <p className="text-dark/60 font-bold uppercase tracking-widest text-sm">
                        Last Updated: March 2026
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="space-y-12 text-lg text-dark/80 font-medium leading-relaxed">

                        <div className="space-y-4">
                            <h2 className="text-3xl font-heading font-bold text-dark">1. Introduction</h2>
                            <p>
                                Welcome to UniGuide AI ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at hello@uniguide.ai.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-3xl font-heading font-bold text-dark">2. Information We Collect</h2>
                            <p>
                                We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-dark/70">
                                <li>Personal Information Provided by You. The personal information that we collect depends on the context of your interactions with us and the Services.</li>
                                <li>Academic Data. For the purpose of providing school selection insights, we collect grades, test scores, extracurricular activities, and demographic data.</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-3xl font-heading font-bold text-dark">3. How We Use Your Information</h2>
                            <p>
                                We use personal information collected via our Services for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                            </p>
                            <p>
                                Our AI system uses aggregated and anonymized data to improve matching algorithms. Your precise personal identifiers are not shared with third parties for marketing.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-3xl font-heading font-bold text-dark">4. Contact Us</h2>
                            <p>
                                If you have questions or comments about this notice, you may email us at <a href="mailto:hello@uniguide.ai" className="text-primary hover:underline">hello@uniguide.ai</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Simple Footer */}
            <footer className="bg-dark py-12 border-t border-white/10 mt-20">
                <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-white/40 text-[11px] font-bold uppercase tracking-widest">
                        Copyright © UniGuide – All Rights Reserved
                    </p>
                    <div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-white/40">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </footer>
        </main>
    );
}
