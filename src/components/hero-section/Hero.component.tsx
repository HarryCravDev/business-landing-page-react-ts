import React from "react";
import "./Hero.css";

function Hero(): JSX.Element {
	const heroClick = () => {
		console.log("Hero click...");
	};

	return (
		<div className="container flex flex-col-reverse justify-evenly items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
			<div className="flex hero-section-left content-center flex-col mb-32 space-y-12 md:w-1/2">
				<h1 className="max-w-md text-4xl font-bold text-center md:text-5xl">
					Bring everyone together to build better products
				</h1>
				<p className="max-w-sm text-center text-darkGrayishBlue">
					Manage makes it simple for software teams to plan day-to-day tasks
					while keeping the larger team goals in view.
				</p>
				<div className="flex justify-center md:justify-start">
					<a
						href="#"
						className="btn p-3 px-6 pt-2 text-white rounded-full baseline"
						onClick={heroClick}
					>
						Get Started
					</a>
				</div>
			</div>

			<div className="md:w-1/2">
				<img
					src="https://raw.githubusercontent.com/bradtraversy/tailwind-landing-page/23ffa7c95f41d25f1bbc9dc42aaddf6de4e3c2e4/img/illustration-intro.svg"
					alt=""
				/>
			</div>
		</div>
	);
}

export default Hero;
