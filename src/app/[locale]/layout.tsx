import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import SideNav from '@/components/ui/SideNav';
import "../globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
});

export const metadata: Metadata = {
    title: "Lin Jing-Di | FinTech & Investment Banking Portfolio",
    description: "Professional portfolio of Lin Jing-Di (林靖迪), specializing in FinTech, Investment Banking, and Financial Research. NCCU International Business student with experience in M&A, valuation, and market analysis.",
    keywords: ["Lin Jing-Di", "林靖迪", "FinTech", "Investment Banking", "Portfolio", "NCCU", "Finance"],
    authors: [{ name: "Lin Jing-Di" }],
    openGraph: {
        title: "Lin Jing-Di | FinTech & Investment Banking Portfolio",
        description: "Professional portfolio showcasing experience in investment banking, venture capital, and financial research.",
        type: "website",
    },
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {
    const { locale } = await params;

    // Validate locale
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale} className="scroll-smooth">
            <body
                className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
            >
                <NextIntlClientProvider messages={messages}>
                    {/* Global Grid Container */}
                    <div className="min-h-screen bg-[#FAFAFA] text-gray-900">
                        <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-12">

                            {/* Main Content Area (Span 9) */}
                            <main className="order-2 lg:order-1 lg:col-span-9 bg-[#FAFAFA]">
                                {children}
                            </main>

                            {/* Sticky Sidebar Area (Span 3) */}
                            <aside className="order-1 lg:order-2 lg:col-span-3 hidden lg:block relative">
                                <SideNav />
                            </aside>

                        </div>
                    </div>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
