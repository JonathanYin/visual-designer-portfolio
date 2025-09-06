import CherryBlossomAnimation from "./CherryBlossomAnimation";

const PortfolioHero = () => {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			{/* Animated Background */}
			<div className="absolute inset-0 bg-gradient-to-br from-secondary/80 via-background to-muted opacity-80" />

			{/* Cityscape Background Image */}
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
				style={{
					backgroundImage: `url('/background.png')`,
				}}
			/>

			{/* Overlay for better text readability */}
			<div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/40" />

			{/* Cherry Blossom Animation */}
			<CherryBlossomAnimation />

			{/* Cityscape Silhouette */}
			<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-foreground/20 to-transparent" />

			{/* Hero Content */}
			<div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
				{/* Main Name */}
				<h1 className="hero-text text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6">
					<span className="gradient-text">Jonathan Yin</span>
				</h1>

				{/* Subtitle */}
				<p className="hero-subtitle text-xl md:text-2xl text-muted-foreground mb-8 font-light">Creative Designer & Visual Storyteller</p>
			</div>

			{/* Floating Design Elements */}
			<div className="absolute top-20 left-10 w-3 h-3 bg-primary rounded-full floating-element opacity-60" />
			<div className="absolute top-40 right-20 w-2 h-2 bg-accent rounded-full floating-element opacity-80" style={{ animationDelay: "2s" }} />
			<div className="absolute bottom-40 left-20 w-4 h-4 bg-secondary rounded-full floating-element opacity-50" style={{ animationDelay: "4s" }} />
		</section>
	);
};

export default PortfolioHero;
