"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Leaf } from "lucide-react";

const TopNav = () => {
	const pathname = usePathname(); // Automatically updates on route changes

	return (
		<>
			{/* <div className="fixed top-0 left-0 right-0 z-50 lg:pt-10">
			<div className="p-6 bg-white lg:rounded-3xl shadow-md flex justify-between items-center mx-auto w-full lg:w-3/4 xl:w-2/4">
				<Link href={"/"} className="text-2xl font-bold text-gray-700">
					🍃LEAF IQ
				</Link>

				<div>
					<ul className="flex gap-4">
						<Link href={"/detect"} className={`text-gray-600 text-xl hover:text-green-500 font-medium cursor-pointer ${pathname === '/detect' ? 'text-green-500' : ''}`}>
							Detect
						</Link>
						<Link href={"/weather"} className={`text-gray-600 text-xl hover:text-green-500 font-medium cursor-pointer ${pathname === '/weather' ? "text-green-500": ''}`}>
							Weather
						</Link>
					</ul>
				</div>
			</div>
		</div> */}
			{/* <div className="fixed top-0 left-0 right-0 z-50">
			<div className="p-6 bg-white shadow-md flex justify-between items-center mx-auto w-full">
				<Link href={"/"} className="text-2xl font-bold text-gray-700">
					🍃LEAF IQ
				</Link>

				<div>
					<ul className="flex gap-4">
						<Link href={"/detect"} className={`text-gray-600 text-xl hover:text-green-500 font-medium cursor-pointer ${pathname === '/detect' ? 'text-green-500' : ''}`}>
							Detect
						</Link>
						<Link href={"/weather"} className={`text-gray-600 text-xl hover:text-green-500 font-medium cursor-pointer ${pathname === '/weather' ? "text-green-500": ''}`}>
							Weather
						</Link>
					</ul>
				</div>
			</div>
		</div> */}

			{/* <header className="bg-gradient-to-r from-green-600 to-teal-500 p-4 shadow-md"> */}
			<header className="bg-green-800 p-4 shadow-md fixed top-0 left-0 right-0 z-50">
				<div className="flex items-center justify-between">
					<a href="/" className="flex items-center space-x-2 cursor-pointer">
						<Leaf className="text-white" size={32} />
						<h1 className="text-2xl font-bold text-white">PlantGuard AI</h1>
					</a>
					<div>
						<div>
							<ul className="flex gap-4">
								{/* `<Link
									href={"/detect"}
									className={`text-gray-300 text-md hover:text-white font-medium cursor-pointer ${
										pathname === "/detect" ? "text-white" : ""
									}`}
								>
									Detect
								</Link>` */}
								<Link
									href={"/weather"}
									className={`text-gray-300 text-md hover:text-white font-medium cursor-pointer ${
										pathname === "/weather" ? "text-white" : ""
									}`}
								>
									Weather
								</Link>
							</ul>
						</div>
					</div>
				</div>
			</header>
			{/* <nav className="bg-gradient-to-r from-green-600 to-teal-500 text-white hidden"> */}
			<nav className="bg-green-600 text-white hidden">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						<div className="flex items-center">
							<a href="/"  className="flex-shrink-0 flex items-center cursor-pointer">
								<Leaf className="h-8 w-8" />
								<span className="ml-2 text-xl font-bold">PlantGuard AI</span>
							</a>
							<div className="hidden md:block">
								<div className="ml-10 flex items-center space-x-4">
									<a
										href="#"
										className="px-3 py-2 rounded-md text-sm font-medium text-white bg-green-700"
									>
										Home
									</a>
									<a
										href="#"
										className="px-3 py-2 rounded-md text-sm font-medium text-green-100 hover:text-white hover:bg-green-700"
									>
										Features
									</a>
									<a
										href="#"
										className="px-3 py-2 rounded-md text-sm font-medium text-green-100 hover:text-white hover:bg-green-700"
									>
										Pricing
									</a>
									<a
										href="#"
										className="px-3 py-2 rounded-md text-sm font-medium text-green-100 hover:text-white hover:bg-green-700"
									>
										About
									</a>
								</div>
							</div>
						</div>
						<div className="hidden md:block">
							<div className="ml-4 flex items-center md:ml-6">
								<button className="bg-white text-green-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-50">
									Log in
								</button>
								<button className="ml-3 bg-green-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-900">
									Sign up
								</button>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default TopNav;
