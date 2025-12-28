"use client";

import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
    const pathname = usePathname();
    const router = useRouter();
    const t = useTranslations("nav");

    const currentLocale = pathname.startsWith("/en") ? "en" : "zh";

    const switchLanguage = (newLocale: string) => {
        // Replace the locale in the current pathname
        const newPath = pathname.replace(/^\/(zh|en)/, `/${newLocale}`);
        router.push(newPath);
    };

    return (
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
            <button
                onClick={() => switchLanguage("zh")}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${currentLocale === "zh"
                        ? "bg-white text-slate-900"
                        : "text-white/70 hover:text-white"
                    }`}
            >
                中文
            </button>
            <button
                onClick={() => switchLanguage("en")}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${currentLocale === "en"
                        ? "bg-white text-slate-900"
                        : "text-white/70 hover:text-white"
                    }`}
            >
                EN
            </button>
        </div>
    );
}
