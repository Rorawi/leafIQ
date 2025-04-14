"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { LuCloudRain } from "react-icons/lu";
import { usePathname } from 'next/navigation';


const Sidebar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname(); // Automatically updates on route changes


	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="relative">
			<button
				className="p-2 text-white bg-blue-600 rounded-md lg:hidden"
				onClick={toggleSidebar}
			>
				{isOpen ? "Close" : "Menu"}
			</button>
			<div
				className={`fixed top-0 left-0 h-full shadow w-72 transform ${
					isOpen ? "translate-x-0" : "-translate-x-full"
				} transition-transform duration-300 ease-in-out lg:translate-x-0`}
			>
				<div className="p-4 text-md font-bold  mb-6">LEAF IQ</div>
				<nav className="flex flex-col p-4 space-y-4">
					<Link
						href={"/weather"}
						className={`p-4 hover:bg-gray-500  rounded-xl transition duration-300 flex items-center gap-1.5 ${pathname === '/weather' ? 'bg-gray-500' : ''}`}
					>
						<LuCloudRain />
						<div className="">Weather</div>
					</Link>
					<Link
						href={"/detect"}
						className={`p-4 hover:bg-gray-500  rounded-xl transition duration-300 flex items-center gap-1.5 ${pathname === '/detect' ? 'bg-gray-500' : ''}`}
					>
						<LuCloudRain />
						<div className="">Detect</div>
					</Link>
				</nav>
			</div>
			{isOpen && (
				<div
					className="fixed inset-0 bg-black opacity-50 lg:hidden"
					onClick={toggleSidebar}
				></div>
			)}
		</div>
	);
};

export default Sidebar;
