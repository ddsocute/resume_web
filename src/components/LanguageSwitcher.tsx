"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const handleSwitch = (newLocale: "en" | "zh") => {
        router.replace(pathname, { locale: newLocale });
    };

    return (
        <div className="flex bg-slate-100 p-1 rounded-sm border border-slate-200">
            <button
                onClick={() => handleSwitch("zh")}
                className={`px-4 py-1.5 text-xs font-mono transition-all ${locale === "zh" ? "bg-white text-slate-900 shadow-sm" : "text-slate-400 hover:text-slate-600"
                    }`}
            >
                ZH
            </button>
            <button
                onClick={() => handleSwitch("en")}
                className={`px-4 py-1.5 text-xs font-mono transition-all ${locale === "en" ? "bg-white text-slate-900 shadow-sm" : "text-slate-400 hover:text-slate-600"
                    }`}
            >
                EN
            </button>
        </div>
    );
}
