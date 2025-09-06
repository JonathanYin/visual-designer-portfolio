const Navigation = () => {
	return (
		<div className="hidden md:flex items-center space-x-8 lg:space-x-10">
			<a href="#work" className="text-white hover:text-primary transition-all duration-300 font-medium hover:scale-105 relative group">
				Work
				<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
			</a>
			<a href="#about" className="text-white hover:text-primary transition-all duration-300 font-medium hover:scale-105 relative group">
				About
				<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
			</a>
			<a href="#process" className="text-white hover:text-primary transition-all duration-300 font-medium hover:scale-105 relative group">
				Process
				<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
			</a>
			<a href="#contact" className="text-white hover:text-primary transition-all duration-300 font-medium hover:scale-105 relative group">
				Contact
				<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
			</a>
		</div>
	);
};

export default Navigation;
