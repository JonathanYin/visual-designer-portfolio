"use client";

import { useState, useEffect } from "react";

const Navigation = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLightSection, setIsLightSection] = useState(false);

	const navLinks = [
		{ href: "#work", label: "work" },
		{ href: "#about", label: "about" },
		{ href: "#process", label: "process" },
		{ href: "#contact", label: "contact" },
	];

	const handleLinkClick = () => {
		setIsMenuOpen(false);
	};

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			const windowHeight = window.innerHeight;

			// About section starts around 100vh (after hero section)
			// We'll switch to dark text when we're past the hero section
			const newIsLightSection = scrollY > windowHeight * 0.95;
			setIsLightSection(newIsLightSection);
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Check initial position

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			{/* Desktop Navigation */}
			<div className="hidden md:flex items-center space-x-8 lg:space-x-10">
				{navLinks.map((link) => (
					<a
						key={link.href}
						href={link.href}
						className={`${isLightSection ? "text-foreground hover:text-primary" : "text-white hover:text-primary"} transition-all duration-500 font-medium hover:scale-105 relative group`}
					>
						{link.label}
						<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
					</a>
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
							<a
								key={link.href}
								href={link.href}
								onClick={handleLinkClick}
								className={`block ${
									isLightSection ? "text-foreground hover:text-primary" : "text-white hover:text-primary"
								} transition-all duration-300 font-medium py-2 hover:translate-x-2`}
							>
								{link.label}
							</a>
						))}
					</div>
				</div>
			)}
		</>
	);
};

export default Navigation;
