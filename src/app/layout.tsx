import type { Metadata } from "next";
import './fonts.css'
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
    title: process.env.APP_NAME || "FIFA World Cup 2026",
    description: "Follow the FIFA World Cup 2026 with live scores, standings, and team information.",
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={cn("h-full", "antialiased", "font-sans", inter.variable)}
        >
            <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}
