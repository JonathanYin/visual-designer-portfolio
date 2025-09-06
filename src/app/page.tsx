import PortfolioHero from "./components/PortfolioHero";
import Navigation from "./components/Navigation";
import { Button } from "./components/ui/button";
import { Logo } from "./components/ui/logo";

export default function Home() {
	return (
		<div className="relative min-h-screen">
			{/* Navigation */}
			<nav className="fixed top-0 left-0 right-0 z-50">
				<div className="max-w-7xl mx-auto px-6 py-4 md:px-16 lg:px-20">
					<div className="flex justify-between items-center">
						{/* Logo */}
						<div className="flex items-center space-x-3 hover:scale-105 transition-transform cursor-pointer">
							<Logo size={25} className="drop-shadow-sm" />
						</div>

						{/* Navigation Links */}
						<Navigation />

						{/* CTA Button */}
						<Button variant="portfolio" size="default" className="rounded-full px-6 py-2">
							Let&apos;s Talk
						</Button>
					</div>
				</div>
			</nav>

			{/* Portfolio Hero */}
			<PortfolioHero />

			{/* Additional sections can be added here */}
		</div>
	);
}
