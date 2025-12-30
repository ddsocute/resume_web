"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export default function ExtracurricularSection() {
    const { extracurriculars } = resumeData;
    const t = useTranslations("extracurricular");
    const locale = useLocale();

    const getInitial = (name: string) => name.charAt(0);

    const LOGO_MAP: Record<string, string> = {
        "tmba-2025": "/images/orgs/tmba.jpg",
        "mf-club-2024-member": "/images/orgs/mf-club.png",
        "mf-club-2024-leader": "/images/orgs/mf-club.png",
    };

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-2 uppercase tracking-wide">
                        {t("title")}
                    </h2>
                    <div className="w-16 h-0.5 bg-gray-300"></div>
                </motion.div>

                <div className="space-y-0">
                    {extracurriculars.map((id, index) => {
                        const itemKey = `items.${id}`;
                        const companyName = t(`${itemKey}.company`);
                        const logoSrc = LOGO_MAP[id];

                        return (
                            <motion.div
                                key={id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link href={`/${locale}/extracurricular/${id}`} className="block">
                                    <div className="block py-8 border-b border-gray-200 hover:bg-white hover:shadow-md transition-all duration-200 group rounded-lg px-4 -mx-4">
                                        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                                            <div className="flex-shrink-0 hidden md:flex w-24 h-24 bg-white border border-gray-200 items-center justify-center text-xl font-serif font-bold text-gray-400 relative overflow-hidden rounded-md shadow-sm">
                                                {logoSrc ? (
                                                    <Image
                                                        src={logoSrc}
                                                        alt={companyName}
                                                        fill
                                                        className="object-contain"
                                                    />
                                                ) : (
                                                    getInitial(companyName)
                                                )}
                                            </div>

                                            <div className="flex-grow">
                                                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                                                    <div className="flex items-center gap-3">
                                                        <div className="flex md:hidden w-12 h-12 bg-white border border-gray-200 items-center justify-center text-sm font-serif font-bold text-gray-400 relative overflow-hidden rounded-md">
                                                            {logoSrc ? (
                                                                <Image
                                                                    src={logoSrc}
                                                                    alt={companyName}
                                                                    fill
                                                                    className="object-contain"
                                                                />
                                                            ) : (
                                                                getInitial(companyName)
                                                            )}
                                                        </div>
                                                        <div>
                                                            <h3 className="font-sans text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                                                {companyName}
                                                            </h3>
                                                            <p className="font-sans text-base font-semibold text-gray-700">
                                                                {t(`${itemKey}.role`)}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <span className="font-sans text-sm text-gray-500 mt-1 md:mt-0 whitespace-nowrap">
                                                        {t(`${itemKey}.date`)}
                                                    </span>
                                                </div>

                                                <div className="font-sans text-sm text-gray-600 leading-relaxed space-y-1 mb-4">
                                                    <ul className="list-disc pl-4 space-y-2">
                                                        {(t.raw(`${itemKey}.description`) as string[]).map((desc: string, i: number) => (
                                                            <li key={i}>{desc}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
