import PortfolioHero from "./components/PortfolioHero";
import AboutSection from "./components/AboutSection";
import Navigation from "./components/Navigation";
import Image from "next/image";

export default function Home() {
	return (
		<div className="relative min-h-screen">
			{/* Navigation */}

			<nav className="fixed top-0 left-0 right-0 z-50">
				<div className="max-w-7xl mx-auto px-6 py-4 md:px-16 lg:px-20">
					<div className="flex items-center justify-center">
						<div className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 shadow-lg space-x-4">
							{/* Logo - positioned directly to the left of navigation */}
							<Image
								src="/flower.svg"
								alt="Logo"
								width={35}
								height={35}
								className="drop-shadow-sm"
								priority
							/>

							{/* Navigation Links - directly next to logo */}
							<Navigation />
						</div>
					</div>
				</div>
			</nav>

			{/* Portfolio Hero */}
			<PortfolioHero />

			{/* About Section */}
			<AboutSection />
		</div>
	);
}
