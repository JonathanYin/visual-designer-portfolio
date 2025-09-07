import Image from "next/image";

const AboutSection = () => {
	return (
		<section id="about" className="relative py-20 md:py-32 overflow-hidden">
			{/* Background with subtle gradient */}
			<div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-secondary/20" />

			{/* Floating design elements */}
			<div className="absolute top-20 right-10 w-2 h-2 bg-primary/40 rounded-full floating-element" />
			<div className="absolute bottom-32 left-16 w-3 h-3 bg-accent/50 rounded-full floating-element" style={{ animationDelay: "1s" }} />
			<div className="absolute top-1/2 right-20 w-1.5 h-1.5 bg-secondary/60 rounded-full floating-element" style={{ animationDelay: "3s" }} />

			<div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-20">
				{/* Section Header */}
				<div className="text-center mb-16 md:mb-20">
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 pt-10" style={{ fontFamily: "PPMondwest, sans-serif" }}>
						<span className="gradient-text">About Me</span>
					</h2>
					<p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
						Crafting visual stories that connect, inspire, and transform ideas into beautiful experiences
					</p>
				</div>

				{/* Main Content Grid */}
				<div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20">
					{/* Left Content */}
					<div className="space-y-8">
						<div className="space-y-6">
							<h3 className="text-2xl md:text-3xl font-semibold text-foreground" style={{ fontFamily: "PPMondwest, sans-serif" }}>
								Creative Designer & Visual Storyteller
							</h3>
							<p className="text-muted-foreground leading-relaxed text-lg">
								With a passion for minimalist aesthetics and meaningful design, I create visual experiences that resonate with audiences and bring brands to life. My work spans across
								digital interfaces, brand identity, and visual storytelling.
							</p>
							<p className="text-muted-foreground leading-relaxed text-lg">
								I believe in the power of simplicity – where every element serves a purpose and every color choice tells a story. Drawing inspiration from nature, architecture, and
								human emotions, I craft designs that are both beautiful and functional.
							</p>
						</div>

						{/* Skills/Approach */}
						<div className="grid grid-cols-2 gap-6">
							<div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
								<h4 className="font-semibold text-foreground mb-2">Visual Design</h4>
								<p className="text-sm text-muted-foreground">UI/UX, Branding, Illustration</p>
							</div>
							<div className="p-6 rounded-2xl bg-gradient-to-br from-secondary/10 to-muted/10 border border-secondary/20">
								<h4 className="font-semibold text-foreground mb-2">Creative Direction</h4>
								<p className="text-sm text-muted-foreground">Concept, Strategy, Storytelling</p>
							</div>
						</div>
					</div>

					{/* Right Image */}
					<div className="relative">
						<div className="relative rounded-3xl overflow-hidden shadow-elegant group">
							<Image
								src="/about-1.webp"
								alt="Cherry blossom street scene with aesthetic anime style"
								width={600}
								height={800}
								className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
								priority
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
						</div>
						{/* Decorative frame */}
						<div className="absolute -top-6 -left-6 w-full h-full border-2 border-primary/30 rounded-3xl -z-10" />
					</div>
				</div>

				{/* Bottom Section with Second Image */}
				<div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
					{/* Left Image */}
					<div className="lg:col-span-2 order-2 lg:order-1">
						<div className="relative rounded-3xl overflow-hidden shadow-elegant group">
							<Image
								src="/about-2.webp"
								alt="City skyline with cherry blossoms and serene lake view"
								width={500}
								height={400}
								className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
						</div>
						{/* Decorative frame */}
						<div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-secondary/30 rounded-3xl -z-10" />
					</div>

					{/* Right Content */}
					<div className="lg:col-span-3 order-1 lg:order-2 space-y-8">
						<div className="space-y-6">
							<h3 className="text-2xl md:text-3xl font-semibold text-foreground" style={{ fontFamily: "PPMondwest, sans-serif" }}>
								Inspired by Beauty in Everyday Moments
							</h3>
							<p className="text-muted-foreground leading-relaxed text-lg">
								My design philosophy is rooted in finding extraordinary beauty in ordinary moments. Whether it&apos;s the gentle fall of cherry blossoms or the serene reflection of a
								city skyline on water, I draw inspiration from the world around us.
							</p>
							<p className="text-muted-foreground leading-relaxed text-lg">
								This approach translates into designs that feel both timeless and contemporary, creating emotional connections that go beyond mere aesthetics.
							</p>
						</div>

						{/* Call to action */}
						<div className="pt-4">
							<a href="#contact" className="inline-flex items-center space-x-2 text-primary hover:text-accent transition-colors duration-300 font-medium group">
								<span>Let&apos;s create something beautiful together</span>
								<svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
