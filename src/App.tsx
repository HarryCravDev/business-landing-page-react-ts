import React from "react";
import CTA from "./components/CTA-section/CTA.component";
import Features from "./components/features-section/Features.component";
import Hero from "./components/hero-section/Hero.component";
import Navbar from "./components/navbar/Navbar.component";
import Testimonials from "./components/testimonials/Testimonials.component";

function App() {
	return (
		<div>
			<Navbar />
			<div className="px-0 md:px-20">
				<Hero />
				<Features />
				<Testimonials />
			</div>
			<CTA />
		</div>
	);
}

export default App;
