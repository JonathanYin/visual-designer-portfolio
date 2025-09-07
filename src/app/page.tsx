import PortfolioHero from "./components/PortfolioHero";
import AboutSection from "./components/AboutSection";
import Navigation from "./components/Navigation";
import { Logo } from "./components/ui/logo";

export default function Home() {
	return (
		<div className="relative min-h-screen">
			{/* Navigation */}

			<nav className="fixed top-0 left-0 right-0 z-50">
				<div className="max-w-7xl mx-auto px-6 py-4 md:px-16 lg:px-20">
					<div className="relative flex items-center">
						{/* Logo - positioned on the left */}
						<div className="flex items-center space-x-3 hover:scale-105 transition-transform cursor-pointer">
							<Logo size={25} className="drop-shadow-sm" />
						</div>

						{/* Navigation Links - centered */}
						<div className="absolute left-1/2 transform -translate-x-1/2">
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
