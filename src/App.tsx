import React from "react";
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
		</div>
	);
}

export default App;
