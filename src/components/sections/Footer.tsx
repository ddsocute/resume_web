"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-sm"
                    >
                        © {new Date().getFullYear()} Lin Jing-Di. All rights reserved.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xs text-slate-500 mt-2"
                    >
                        Built with Next.js, Tailwind CSS, and Framer Motion
                    </motion.p>
                </div>
            </div>
        </footer>
    );
}
