"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, Sparkles } from 'lucide-react';

const initialMessages = [
    { id: 1, type: 'bot', content: "Hi! I'm UniPass AI. I can help you find the best summer schools and competitions. Ready to explore?" },
];

const chatFlow = [
    { id: 'start', question: "What's your current grade level?", key: 'grade' },
    { id: 'interest', question: "What subject are you passionate about?", key: 'field' },
    { id: 'goal', question: "Preference: Summer Schools or Competitions?", key: 'goal' },
    { id: 'done', question: "Great! I've found some matches from our database.", key: 'result' }
];

export default function ChatBot() {
    const [messages, setMessages] = useState(initialMessages);
    const [inputValue, setInputValue] = useState('');
    const [step, setStep] = useState(0);
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const userMsg = { id: Date.now(), type: 'user', content: inputValue };
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');

        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            const nextStep = chatFlow[step];
            if (nextStep) {
                const botMsg = { id: Date.now() + 1, type: 'bot', content: nextStep.question };
                setMessages(prev => [...prev, botMsg]);
                setStep(prev => prev + 1);

                if (nextStep.key === 'result') {
                    setTimeout(() => {
                        setMessages(prev => [...prev, {
                            id: Date.now() + 2,
                            type: 'bot',
                            content: "⭐ Stanford Summer Institute\n🏆 USACO Olympiad\n💎 Wharton Global Youth",
                            isResult: true
                        }]);
                    }, 800);
                }
            }
        }, 1200);
    };

    return (
        <div className="modern-card w-full max-w-[440px] h-[540px] flex flex-col bg-white overflow-hidden">
            {/* Header */}
            <div className="px-6 py-5 border-b border-border flex items-center justify-between bg-white">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                        <Bot size={22} />
                    </div>
                    <div>
                        <h3 className="font-heading font-bold text-gray-900 text-sm">UniPass AI</h3>
                        <span className="text-[10px] text-accent font-bold uppercase tracking-widest flex items-center gap-1">
                            ● Active
                        </span>
                    </div>
                </div>
                <Sparkles size={18} className="text-primary/40" />
            </div>

            {/* Messages */}
            <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth"
            >
                <AnimatePresence initial={false}>
                    {messages.map((msg) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div className={`max-w-[85%] p-4 rounded-2xl text-[14px] leading-relaxed transition-all ${msg.type === 'user'
                                    ? 'bg-primary text-white shadow-sm'
                                    : 'bg-muted text-gray-800'
                                }`}>
                                {msg.content.split('\n').map((line, i) => (
                                    <p key={i} className={i > 0 ? 'mt-3 font-semibold text-primary block' : ''}>
                                        {line}
                                    </p>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                    {isTyping && (
                        <div className="flex justify-start">
                            <div className="bg-muted px-4 py-3 rounded-2xl flex gap-1.5 items-center">
                                <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" />
                                <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                                <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                            </div>
                        </div>
                    )}
                </AnimatePresence>
            </div>

            {/* Input */}
            <div className="p-6 bg-white">
                <div className="relative flex items-center">
                    <input
                        type="text"
                        placeholder="Type your message..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        className="w-full pl-4 pr-12 py-3.5 bg-muted rounded-xl focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all font-medium text-gray-700 placeholder:text-gray-400 border border-transparent focus:border-primary/20"
                    />
                    <button
                        onClick={handleSend}
                        disabled={!inputValue.trim()}
                        className="absolute right-2 p-2.5 text-primary hover:bg-primary/10 rounded-lg transition-colors disabled:opacity-30"
                    >
                        <Send size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}
