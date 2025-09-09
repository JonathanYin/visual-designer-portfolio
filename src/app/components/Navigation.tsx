"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLightSection, setIsLightSection] = useState(false);
	const pathname = usePathname();

	// Determine if we're on the home page or contact page to handle links properly
	const isContactPage = pathname === "/contact";

	const navLinks = [
		{ href: isContactPage ? "/#about" : "#about", label: "about" },
		{ href: isContactPage ? "/#work" : "#work", label: "work" },
		{ href: isContactPage ? "/#process" : "#process", label: "process" },
		{ href: "/contact", label: "contact" },
	];

	const handleLinkClick = () => {
		setIsMenuOpen(false);
	};

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			const windowHeight = window.innerHeight;

			if (isContactPage) {
				// Contact page logic:
				// - Start with dark text (white background at top)
				// - Switch to light text during cover image (around 100-400px)
				// - Switch back to dark text after cover image (around 500px+)
				const coverImageStart = 250; // When cover image starts
				const coverImageEnd = 575; // When cover image ends and white background returns

				const newIsLightSection = scrollY < coverImageStart || scrollY > coverImageEnd;
				setIsLightSection(newIsLightSection);
			} else {
				// Home page logic: switch to dark text when we're past the hero section
				const newIsLightSection = scrollY > windowHeight * 0.95;
				setIsLightSection(newIsLightSection);
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Check initial position

		return () => window.removeEventListener("scroll", handleScroll);
	}, [isContactPage]);

	return (
		<nav className="fixed top-0 left-0 right-0 z-50">
			<div className="max-w-7xl mx-auto px-6 py-4 md:px-16 lg:px-20">
				<div className="flex items-center justify-center">
					<div className="relative flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 shadow-lg space-x-4">
						{/* Logo */}
						<Link href="/" className="hover:scale-110 transition-transform duration-300">
							<Image src="/flower.svg" alt="Logo" width={35} height={35} className="drop-shadow-sm" priority />
						</Link>

						{/* Desktop Navigation */}
						<div className="hidden md:flex items-center space-x-8 lg:space-x-10">
							{navLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className={`${
										isLightSection ? "text-foreground hover:text-primary" : "text-white hover:text-primary"
									} transition-all duration-500 font-medium hover:scale-105 relative group`}
								>
									{link.label}
									<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
								</Link>
							))}
						</div>

						{/* Mobile Hamburger Button */}
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className={`md:hidden ${isLightSection ? "text-foreground hover:text-primary" : "text-white hover:text-primary"} transition-colors duration-500 p-1`}
							aria-label="Toggle menu"
						>
							<div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
								<span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
								<span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
								<span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
							</div>
						</button>

						{/* Mobile Menu Dropdown */}
						{isMenuOpen && (
							<div
								className={`absolute top-full left-0 right-0 mt-2 mx-6 backdrop-blur-md rounded-2xl shadow-lg md:hidden transition-all duration-500 ${
									isLightSection ? "bg-white/80 border border-black/10" : "bg-white/10 border border-white/20"
								}`}
							>
								<div className="py-4 px-6 space-y-3">
									{navLinks.map((link) => (
										<Link
											key={link.href}
											href={link.href}
											onClick={handleLinkClick}
											className={`block ${
												isLightSection ? "text-foreground hover:text-primary" : "text-white hover:text-primary"
											} transition-all duration-300 font-medium py-2 hover:translate-x-2`}
										>
											{link.label}
										</Link>
									))}
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
