import PortfolioHero from "./components/PortfolioHero";
import AboutSection from "./components/AboutSection";
import Navigation from "./components/Navigation";

export default function Home() {
	return (
		<div className="relative min-h-screen">
			{/* Navigation */}
			<Navigation />

			{/* Portfolio Hero */}
			<PortfolioHero />

			{/* About Section */}
			<AboutSection />
		</div>
	);
}
