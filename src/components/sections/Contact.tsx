"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, MapPin, ArrowRight } from 'lucide-react';

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");
        
        const form = e.currentTarget;
        const formData = new FormData(form);
        
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus("success");
                form.reset();
                setTimeout(() => setStatus("idle"), 5000); // Reset message after 5s
            } else {
                console.error("Form error:", data);
                setStatus("error");
            }
        } catch (error) {
            console.error("Fetch error:", error);
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="py-32 bg-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    <div className="space-y-12">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="inline-block px-6 py-2 rounded-full border border-dark/5 mb-8"
                            >
                                <span className="text-dark font-bold text-lg underline-bespoke uppercase tracking-widest">Get in touch</span>
                            </motion.div>
                            <h2 className="text-5xl md:text-7xl font-heading font-extrabold text-dark tracking-tighter mb-8">
                                Any questions about <span className="text-primary">Uniguide?</span>
                            </h2>
                            <p className="text-xl text-dark/70 font-medium leading-relaxed max-w-md">
                                Have questions about our AI or curious how we can help your specific journey? Drop us a line.
                            </p>
                        </div>
                    </div>

                    <div className="modern-card p-12 bg-white shadow-2xl relative">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <input type="hidden" name="access_key" value="50b00d35-0752-464b-ae5b-638ac515ac5e" />
                            <input type="hidden" name="subject" value="New Inquiry from UniGuide Landing Page" />
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-dark/40 ml-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="John Doe"
                                        className="w-full bg-muted border-none rounded-2xl px-6 py-4 font-bold text-dark focus:ring-2 focus:ring-primary outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-dark/40 ml-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="john@example.com"
                                        className="w-full bg-muted border-none rounded-2xl px-6 py-4 font-bold text-dark focus:ring-2 focus:ring-primary outline-none transition-all"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-dark/40 ml-2">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows={4}
                                    placeholder="Tell us about your goals..."
                                    className="w-full bg-muted border-none rounded-2xl px-6 py-4 font-bold text-dark focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                                />
                            </div>
                            <button 
                                type="submit" 
                                disabled={status === "submitting"}
                                className="w-full modern-button !py-5 !rounded-2xl gap-3 group disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                            >
                                {status === "submitting" ? "Sending..." : "Send Message"}
                                {status !== "submitting" && <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
                            </button>
                            
                            {status === "success" && (
                                <motion.p 
                                    initial={{ opacity: 0, y: 10 }} 
                                    animate={{ opacity: 1, y: 0 }} 
                                    className="text-emerald-500 font-bold text-sm text-center pt-2"
                                >
                                    Message sent successfully! We'll be in touch soon.
                                </motion.p>
                            )}
                            {status === "error" && (
                                <motion.p 
                                    initial={{ opacity: 0, y: 10 }} 
                                    animate={{ opacity: 1, y: 0 }} 
                                    className="text-red-500 font-bold text-sm text-center pt-2"
                                >
                                    Something went wrong. Please try again later.
                                </motion.p>
                            )}
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
