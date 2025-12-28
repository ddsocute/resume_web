import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import "../globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
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
    return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    const { locale } = await params;

    // Validate locale
    if (!locales.includes(locale as any)) {
        notFound();
    }

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale} className="scroll-smooth">
            <body
                className={`${inter.variable} font-sans antialiased`}
            >
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
