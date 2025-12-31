'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Phone } from 'lucide-react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { resumeData } from '@/data/resume';

export default function Hero() {
    const t = useTranslations('Hero');
    const { profile } = resumeData;

    return (
        <section id="hero" className="min-h-[80vh] flex items-center pt-20 pb-32 relative">
            {/* Language Switcher */}
            <div className="absolute top-8 right-8 z-20">
                <LanguageSwitcher />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full">

                {/* Left Text Block */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="lg:col-span-7 space-y-8"
                >
                    <div className="space-y-4">
                        <h1 className="text-7xl lg:text-8xl font-serif font-medium tracking-tight text-slate-900">
                            {t('name')}
                        </h1>
                        <div className="inline-block px-4 py-1.5 bg-slate-50 border border-slate-200">
                            <p className="text-sm font-mono tracking-widest text-slate-600 uppercase">
                                {t('subtitle')}
                            </p>
                        </div>
                    </div>

                    <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                        {t('description')}
                    </p>

                    {/* Contact Button Group */}
                    <div className="flex flex-wrap gap-4 pt-4">
                        <a href={`mailto:${profile.email}`} className="flex items-center gap-2 px-6 py-3 border border-slate-200 hover:bg-slate-50 transition-colors text-sm font-mono uppercase tracking-wider">
                            <Mail size={16} /> Email
                        </a>
                        <a href={`https://${profile.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 border border-slate-200 hover:bg-slate-50 transition-colors text-sm font-mono uppercase tracking-wider">
                            <Linkedin size={16} /> LinkedIn
                        </a>
                    </div>
                </motion.div>

                {/* Right Photo Block - Color Restored */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="lg:col-span-5 relative"
                >
                    <div className="aspect-[3/4] overflow-hidden border border-slate-100 shadow-2xl relative group">
                        <Image
                            src={profile.avatarUrl ?? "/images/profile.png"}
                            alt={t('name')}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority
                        />
                    </div>
                    {/* Decorative Line */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-slate-200 -z-10" />
                </motion.div>
            </div>
        </section>
    );
}
