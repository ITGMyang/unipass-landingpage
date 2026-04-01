import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Link from 'next/link';

const plans = [
    {
        name: 'Basic',
        positioning: 'Self-service queries',
        priceMonthly: '$14.99',
        priceYearly: '$119/yr (~$9.9/mo)',
        highlighted: false,
        features: [
            { title: 'Modules', desc: 'Summer & competition database' },
            { title: 'Data Depth', desc: 'Bilingual, timelines, requirements, links' },
            { title: 'AI Chat', desc: 'Basic Q&A (30-50/mo), single query' },
            { title: 'Deliverables', desc: 'Simple "Project Cards"' },
            { title: 'Value', desc: 'Saves time on info gathering' },
        ],
        buttonText: 'Get Basic',
    },
    {
        name: 'Pro',
        positioning: 'AI diagnosis & strategy',
        priceMonthly: '$29.99',
        priceYearly: '$249/yr (~$20.7/mo)',
        highlighted: true,
        features: [
            { title: 'Modules', desc: 'Unlimited access & advanced data' },
            { title: 'Data Depth', desc: 'Combined data & prerequisite skills' },
            { title: 'AI Chat', desc: 'Unlimited chat, cross-module picks' },
            { title: 'Deliverables', desc: 'Custom reports & comparisons' },
            { title: 'Value', desc: 'Your Junior Admissions Consultant' },
        ],
        buttonText: 'Get Pro',
    },
    {
        name: 'Premium',
        positioning: 'Full-cycle timeline & tracking',
        priceMonthly: '$49.99',
        priceYearly: '$339/yr (~$33/mo)',
        highlighted: false,
        features: [
            { title: 'Modules', desc: 'Pro + Priority "School Selection"' },
            { title: 'Data Depth', desc: 'Goal-based reverse-engineering' },
            { title: 'AI Chat', desc: 'Pro + Reverse-engineering guidance' },
            { title: 'Deliverables', desc: 'Visual timeline & calendar alerts' },
            { title: 'Value', desc: 'Professional Admissions Assistant' },
        ],
        buttonText: 'Get Premium',
    },
    {
        name: 'VIP Expert',
        positioning: 'Tailor-made elite blueprint',
        priceMonthly: '$3,000',
        priceYearly: 'One-time fee',
        highlighted: false,
        features: [
            { title: 'Modules', desc: 'Premium + Priority "School Selection"' },
            { title: 'Data Depth', desc: 'Covers soft metrics AI cannot capture' },
            { title: 'AI Chat', desc: 'Deep questionnaire for "Capability Radar"' },
            { title: 'Deliverables', desc: 'Custom admission plan & interview prep' },
            { title: 'Value', desc: 'AI precision + Expert human delivery' },
        ],
        buttonText: 'Contact Us',
    }
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-gray-50 border-t border-dark/5">
            <div className="container mx-auto px-4 max-w-[1400px]">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-block px-6 py-2 rounded-full border border-dark/5 mb-6"
                    >
                        <span className="text-dark font-bold text-base uppercase tracking-widest">Pricing</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-dark mb-6 tracking-tighter">
                        Simple, <span className="text-primary italic">transparent</span> pricing.
                    </h2>

                    <p className="max-w-2xl mx-auto text-lg text-dark/70 font-medium leading-relaxed">
                        Choose the plan that fits your educational journey. From self-service basics to fully personalized expert guidance.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`flex flex-col relative rounded-[2rem] p-6 lg:p-8 transition-all duration-300 ${plan.highlighted
                                    ? 'bg-dark text-white shadow-2xl scale-100 lg:scale-[1.02] z-10'
                                    : 'bg-white text-dark shadow-lg hover:shadow-xl'
                                }`}
                        >
                            {plan.highlighted && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                                    <span className="bg-primary text-dark text-[10px] font-black uppercase tracking-widest py-1.5 px-3 rounded-full shadow-sm whitespace-nowrap">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className={`text-2xl font-heading font-black mb-1 ${plan.highlighted ? 'text-white' : 'text-dark'}`}>
                                    {plan.name}
                                </h3>
                                <p className={`text-[13px] font-medium min-h-[40px] ${plan.highlighted ? 'text-white/70' : 'text-dark/60'}`}>
                                    {plan.positioning}
                                </p>
                            </div>

                            <div className="mb-6">
                                <div className="flex items-baseline gap-1">
                                    <span className={`text-4xl font-black tracking-tighter ${plan.highlighted ? 'text-white' : 'text-dark'}`}>
                                        {plan.priceMonthly}
                                    </span>
                                    {plan.priceMonthly !== '$3,000' && (
                                        <span className={`text-sm font-bold ${plan.highlighted ? 'text-white/50' : 'text-dark/40'}`}>/mo</span>
                                    )}
                                </div>
                                <p className={`text-xs font-bold mt-1 ${plan.highlighted ? 'text-primary' : 'text-dark/50'}`}>
                                    {plan.priceYearly}
                                </p>
                            </div>

                            <div className="flex-1">
                                <ul className="space-y-4">
                                    {plan.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex gap-3">
                                            <div className={`mt-0.5 shrink-0 bg-primary/20 p-1 rounded-full h-fit ${plan.highlighted ? 'text-primary' : 'text-primary'}`}>
                                                <Check size={12} className="stroke-[3]" />
                                            </div>
                                            <div>
                                                <h4 className={`text-[10px] font-black uppercase tracking-widest mb-0.5 ${plan.highlighted ? 'text-white/90' : 'text-dark/90'}`}>
                                                    {feature.title}
                                                </h4>
                                                <p className={`text-[13px] font-medium leading-snug ${plan.highlighted ? 'text-white/70' : 'text-dark/70'}`}>
                                                    {feature.desc}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link href="https://app.uniguide-ai.ca" className={`mt-8 w-full py-3.5 rounded-xl font-bold text-base transition-transform hover:scale-105 flex items-center justify-center no-underline ${plan.highlighted
                                    ? 'bg-primary text-dark shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]'
                                    : 'bg-dark text-white'
                                }`}>
                                {plan.buttonText}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
