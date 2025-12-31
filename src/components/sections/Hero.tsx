"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { resumeData } from "@/data/resume";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Image from "next/image";
import { Mail, Linkedin } from "lucide-react";

export default function Hero() {
    const { profile } = resumeData;
    const t = useTranslations("hero");

    return (
        <section id="hero" className="relative bg-white min-h-[60vh] flex items-center pt-20 pb-16 lg:pt-32 lg:pb-20">
            <div className="absolute top-8 right-8 z-30">
                <LanguageSwitcher />
            </div>

            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7 space-y-8"
                    >
                        <div className="space-y-4 text-center lg:text-left">
                            <h1 className="font-serif text-7xl lg:text-8xl font-medium text-slate-900 leading-tight tracking-tighter">
                                {profile.name}
                            </h1>
                            <div className="inline-block border-l-2 border-slate-900 pl-4">
                                <p className="font-mono text-sm lg:text-base text-slate-500 uppercase tracking-[0.2em]">
                                    {t("tagline")}
                                </p>
                            </div>
                        </div>

                        <p className="text-lg text-slate-600 leading-relaxed max-w-xl text-center lg:text-left mx-auto lg:mx-0">
                            {t("description")}
                        </p>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                            <a href={`mailto:${profile.email}`} className="flex items-center gap-2 px-8 py-3 bg-slate-900 text-white hover:bg-slate-800 transition-all text-xs font-mono tracking-widest uppercase">
                                <Mail className="w-4 h-4" /> Email
                            </a>
                            <a href={`https://${profile.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-3 border border-slate-200 text-slate-900 hover:bg-slate-50 transition-all text-xs font-mono tracking-widest uppercase">
                                <Linkedin className="w-4 h-4" /> LinkedIn
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="relative aspect-[4/5] overflow-hidden bg-slate-50 shadow-2xl">
                            <Image src={profile.avatarUrl ?? "/images/profile.png"} alt={profile.name} fill className="object-cover object-top" priority />
                        </div>
                        <div className="absolute -z-10 -bottom-8 -right-8 w-full h-full opacity-50" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
