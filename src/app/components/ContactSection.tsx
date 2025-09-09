import Image from "next/image";

const ContactSection = () => {
	return (
		<div className="pt-24 pb-20">
			{/* Title Section */}
			<section className="text-center mt-4 mb-12 px-6 md:px-16 lg:px-20">
				<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "PPMondwest, sans-serif" }}>
					<span className="gradient-text">Let&apos;s Connect</span>
				</h1>
				<p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
					Ready to bring your vision to life? I&apos;d love to hear about your project and explore how we can create something extraordinary together.
				</p>
			</section>

			{/* Hero Cover Image */}
			<section className="relative h-72 md:h-80 mb-20 overflow-hidden">
				<div className="relative max-w-5xl mx-auto h-full rounded-3xl px-6 md:px-16 lg:px-20 overflow-hidden shadow-elegant">
					<Image src="/contact.webp" alt="City landscape with cherry blossoms" fill className="object-cover object-center" priority />
				</div>
			</section>

			{/* Main Content */}
			<section className="max-w-4xl mx-auto px-6 md:px-16 lg:px-20">
				{/* Contact Grid */}
				<div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
					{/* Left - Contact Methods */}
					<div className="space-y-8">
						<h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8" style={{ fontFamily: "PPMondwest, sans-serif" }}>
							Get in Touch
						</h2>

						<div className="space-y-6">
							<div className="flex items-center space-x-4 p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 hover:border-primary/20 transition-all duration-300 group">
								<div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
									<svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										/>
									</svg>
								</div>
								<div>
									<p className="text-sm text-muted-foreground">Email</p>
									<a href="mailto:joyin@ucsd.edu" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
										joyin@ucsd.edu
									</a>
								</div>
							</div>

							<div className="flex items-center space-x-4 p-6 rounded-2xl bg-gradient-to-br from-secondary/5 to-muted/5 border border-secondary/10 hover:border-secondary/20 transition-all duration-300 group">
								<div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-muted/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
									<svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 24 24">
										<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
									</svg>
								</div>
								<div>
									<p className="text-sm text-muted-foreground">LinkedIn</p>
									<a
										href="https://linkedin.com/in/jonathan-yin-"
										target="_blank"
										rel="noopener noreferrer"
										className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
									>
										/in/jonathan-yin-
									</a>
								</div>
							</div>

							<div className="flex items-center space-x-4 p-6 rounded-2xl bg-gradient-to-br from-accent/5 to-primary/5 border border-accent/10 hover:border-accent/20 transition-all duration-300 group">
								<div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
									<svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
									</svg>
								</div>
								<div>
									<p className="text-sm text-muted-foreground">GitHub</p>
									<a
										href="https://github.com/jonathanyin"
										target="_blank"
										rel="noopener noreferrer"
										className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
									>
										/jonathanyin
									</a>
									{/* Floating elements */}
									<div className="absolute bottom-28 right-36 w-4 h-4 bg-primary/80 rounded-full floating-element shadow-lg" />
									<div className="absolute bottom-40 right-48 w-2 h-2 bg-accent/70 rounded-full floating-element" style={{ animationDelay: "1s" }} />
									<div className="absolute bottom-24 left-28 w-4 h-4 bg-secondary/90 rounded-full floating-element shadow-lg" style={{ animationDelay: "2s" }} />
								</div>
							</div>
						</div>
					</div>

					{/* Right - Profile Image */}
					<div className="relative">
						<div className="relative rounded-3xl overflow-hidden shadow-elegant group mx-auto max-w-sm">
							<Image
								src="/hero.webp"
								alt="Jonathan Yin - Creative Designer"
								width={400}
								height={500}
								className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
						</div>

						{/* Decorative frame */}
						<div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary/20 rounded-3xl -z-10" />

						{/* Floating quote */}
						<div className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-elegant max-w-xs">
							<p className="text-sm text-white mb-2 ml-2">&quot;Design is not just what it looks like. Design is how it works.&quot;</p>
							<p className="text-xs text-primary font-medium ml-8">- Steve Jobs</p>
						</div>
					</div>
				</div>

				{/* CTA Section */}
				<div className="text-center">
					<a
						href="mailto:joyin@ucsd.edu"
						className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full font-medium hover:scale-105 hover:shadow-elegant transition-all duration-300 group"
					>
						<span>Start a Conversation</span>
						<svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</a>
				</div>
			</section>
		</div>
	);
};

export default ContactSection;
