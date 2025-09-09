import ContactSection from "../components/ContactSection";
import Navigation from "../components/Navigation";

export default function Contact() {
	return (
		<div className="relative min-h-screen bg-background">
			{/* Navigation */}
			<Navigation />

			{/* Contact Section */}
			<ContactSection />
		</div>
	);
}
