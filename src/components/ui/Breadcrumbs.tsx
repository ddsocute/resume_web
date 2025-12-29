"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-sm"
        >
            {items.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                    {index < items.length - 1 ? (
                        <>
                            <Link
                                href={item.href}
                                className="text-blue-400 hover:text-blue-300 transition-colors"
                            >
                                {item.label}
                            </Link>
                            <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </>
                    ) : (
                        <span className="text-slate-400">{item.label}</span>
                    )}
                </div>
            ))}
        </motion.nav>
    );
}
