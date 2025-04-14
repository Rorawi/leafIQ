'use client'

import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';


const TopNav = () => {
        const pathname = usePathname(); // Automatically updates on route changes
    
	return (
		<div className="absolute top-0 left-0 right-0 z-10 lg:mt-10">
			<div className="p-9 bg-white lg:rounded-3xl shadow-md flex justify-between items-center mx-auto w-full lg:w-1/2">
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
						{/* <li className='text-gray-600 hover:text-blue-500 cursor-pointer'>Contact</li> */}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default TopNav;
