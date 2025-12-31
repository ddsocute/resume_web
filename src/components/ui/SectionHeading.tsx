import { motion } from "framer-motion";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
}

export default function SectionHeading({ title, subtitle, centered = false }: SectionHeadingProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}
        >
            <h2 className="font-serif text-4xl font-medium text-[#0A192F] tracking-tight leading-tight mb-4">
                {title}
            </h2>
            {subtitle && (
                <div className="flex items-center gap-4">
                    <div className="h-[1px] w-12 bg-gray-300"></div>
                    <span className="font-mono text-[10px] text-gray-400 uppercase tracking-[0.2em]">
                        {subtitle}
                    </span>
                </div>
            )}
        </motion.div>
    );
}
