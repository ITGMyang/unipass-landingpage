import React from 'react';
import Navbar from '@/components/sections/Navbar';
import Link from 'next/link';

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <section className="pt-40 pb-20 bg-muted">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-dark tracking-tighter mb-6">
                        Terms of <span className="underline-bespoke">Service</span>
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
                            <h2 className="text-3xl font-heading font-bold text-dark">1. Agreement to Terms</h2>
                            <p>
                                By accessing our website, uniguide.ai (the "Site"), and using our services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you are prohibited from using the Site.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-3xl font-heading font-bold text-dark">2. Intellectual Property Rights</h2>
                            <p>
                                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-3xl font-heading font-bold text-dark">3. User Representations</h2>
                            <p>
                                By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Service.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-3xl font-heading font-bold text-dark">4. AI-Generated Insights Notice</h2>
                            <p>
                                Note that UniGuide AI provides algorithmic insights and matching features based on historical admissions data. Our platform does not guarantee admission to any specific institution and serves solely as an informational guideline supporting your decisions.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-3xl font-heading font-bold text-dark">5. Contact Information</h2>
                            <p>
                                In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at <a href="mailto:hello@uniguide.ai" className="text-primary hover:underline">hello@uniguide.ai</a>.
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
