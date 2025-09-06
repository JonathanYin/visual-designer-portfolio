"use client";

interface CherryBlossomAnimationProps {
	count?: number;
	className?: string;
}

export default function CherryBlossomAnimation({ count = 20, className = "" }: CherryBlossomAnimationProps) {
	// Create a static array of predefined positions to avoid hydration issues
	const staticBlossoms = Array.from({ length: count }, (_, i) => ({
		id: i,
		left: (i * 7.3) % 100, // Distribute evenly across screen
		animationDelay: (i * 0.8) % 10,
		animationDuration: 8 + (i % 6),
	}));

	return (
		<div className={`absolute inset-0 pointer-events-none overflow-hidden z-10 ${className}`}>
			{staticBlossoms.map((blossom) => (
				<div
					key={blossom.id}
					className="cherry-blossom"
					style={{
						left: `${blossom.left}%`,
						animationDelay: `${blossom.animationDelay}s`,
						animationDuration: `${blossom.animationDuration}s`,
					}}
				/>
			))}
		</div>
	);
}
