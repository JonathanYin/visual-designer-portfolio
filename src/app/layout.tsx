import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Jonathan Yin",
	description: "Portfolio of Jonathan Yin, a creative designer and visual storyteller specializing in modern, minimalist design solutions.",
	keywords: "designer, visual design, creative, portfolio, storytelling, minimalist design",
	authors: [{ name: "Jonathan Yin" }],
	openGraph: {
		title: "Jonathan Yin - Creative Designer",
		description: "Creative Designer & Visual Storyteller",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
