import React from "react";
import { Option } from "./Types/IOption";

const Navbar: React.FC = () => {
	const navOptions = () => {
		const options: Option[] = [
			{
				id: 1,
				name: "Pricing",
				url: "#",
			},
			{
				id: 2,
				name: "Product",
				url: "#",
			},
			{
				id: 3,
				name: "About Us",
				url: "#",
			},
			{
				id: 4,
				name: "Careers",
				url: "#",
			},
			{
				id: 5,
				name: "Community",
				url: "#",
			},
		];

		return options.map((option: Option) => (
			<a key={option.id} href={option.url} className="hover:text-white">
				{option.name}
			</a>
		));
	};

	const onButtonClick = () => {
		console.log("On navbar button click");
	};

	return (
		<nav className="relative container mx-auto p-6 bg-primary">
			<div className="flex items-center justify-between">
				<div className="pt-2">
					<img
						src="https://raw.githubusercontent.com/bradtraversy/tailwind-landing-page/23ffa7c95f41d25f1bbc9dc42aaddf6de4e3c2e4/img/logo.svg"
						alt="company-logo"
					/>
				</div>
				<div className="hidden space-x-6 md:flex">{navOptions()}</div>
				<a
					href="#"
					className="btn btn-accent px-6 text-white rounded-full baseline hover:bg-accent-focus"
					onClick={onButtonClick}
				>
					Get Started
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
