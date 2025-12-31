"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Footer() {
    const t = useTranslations("footer");

    return (
        <footer className="bg-[#F3F4F6] border-t border-gray-200 text-gray-500 py-12 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="font-sans text-sm"
                    >
                        © {new Date().getFullYear()} Lin Jing-Di. {t("copyright")}
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-sans text-xs text-gray-400 mt-2"
                    >
                        {t("builtWith")}
                    </motion.p>
                </div>
            </div>
        </footer>
    );
}
