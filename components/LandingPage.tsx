"use client";
import useSWR from "swr";
import React from "react";
import {fetcher} from "../utils/fetcher";
import Image from "next/image";
import { Leaf, Camera, CloudRain, Calendar, ArrowRight } from "lucide-react";
import TopNav from "./TopNav";
import defaultImage from "../public/assets/plant.jpeg";
import WeatherSection from "../components/landingpage/WeatherSection";

export default function PlantGuardLanding() {
	const WEATHER_API_URL = process.env.NEXT_PUBLIC_WEATHER_API_URL;
	const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
	const { data, isLoading, error } = useSWR(`${WEATHER_API_URL}?lat=7.367&lon=45.133&appid=${WEATHER_API_KEY}`, fetcher);
	console.log(data, isLoading, error);
	

	return (
		<div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 pt-[75px]">
			{/* Navigation */}
			<TopNav />

			{/* Hero Section */}
			<div className="relative bg-faded-green overflow-hidden h-screen">
				<div className="max-w-7xl mx-auto">
					<div className="relative z-10 bg-white lg:max-w-2xl lg:w-full">
						<div className="relative pt-6 px-4 sm:px-6 lg:px-8"></div>
						<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-20 lg:pt-20 lg:pb-28">
							<div className="text-center lg:text-left">
								<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
									<span className="block text-green-600">Your Seasonal</span>
									<span className="block"> Planting Guide</span>
								</h1>
								<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0 md:mt-5 md:text-xl">
									Know the perfect time to plant with our AI-powered weather
									forecasting, detect plant diseases instantly, get actionable
									treatment advice.
								</p>
								<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
									<div className="rounded-md shadow">
										<a
											href="/weather"
											className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
										>
											Get started
										</a>
									</div>
									<div className="mt-3 sm:mt-0 sm:ml-3">
										<a
											href="#learnmore"
											className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10"
										>
											Learn more
										</a>
									</div>
								</div>
							</div>
						</main>
					</div>
				</div>
				<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
					<Image
						className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
						src={defaultImage}
						alt="Healthy plants in garden"
					/>
				</div>
			</div>

			{/* Feature Highlights */}
			<div id="learnmore" className="py-20 lg:py-40 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
							The Smart Way to Care for Your Plants
						</h2>
						<p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
							PlantGuard AI combines cutting-edge technology with gardening
							expertise to help your plants thrive.
						</p>
					</div>

					<div className="mt-16">
						<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
							<div className="pt-6">
								<div className="bg-green-50 rounded-lg px-6 pb-8">
									<div className="flex justify-center">
										<div className="-mt-6 p-3 rounded-md bg-green-600 inline-flex items-center justify-center">
											<Camera className="h-6 w-6 text-white" />
										</div>
									</div>
									<h3 className="mt-5 text-lg font-medium text-gray-900 text-center">
										Disease Detection
									</h3>
									<p className="mt-2 text-base text-gray-500 text-center">
										Take a photo of any troubled plant and get instant AI
										analysis with 95%+ accuracy.
									</p>
								</div>
							</div>

							<div className="pt-6">
								<div className="bg-blue-50 rounded-lg px-6 pb-8">
									<div className="flex justify-center">
										<div className="-mt-6 p-3 rounded-md bg-blue-600 inline-flex items-center justify-center">
											<CloudRain className="h-6 w-6 text-white" />
										</div>
									</div>
									<h3 className="mt-5 text-lg font-medium text-gray-900 text-center">
										Weather Forecasting
									</h3>
									<p className="mt-2 text-base text-gray-500 text-center">
										Get personalized planting recommendations based on weather
										forecasts for your location.
									</p>
								</div>
							</div>

							<div className="pt-6">
								<div className="bg-amber-50 rounded-lg px-6 pb-8">
									<div className="flex justify-center">
										<div className="-mt-6 p-3 rounded-md bg-amber-600 inline-flex items-center justify-center">
											<Calendar className="h-6 w-6 text-white" />
										</div>
									</div>
									<h3 className="mt-5 text-lg font-medium text-gray-900 text-center">
										Planting Calendar
									</h3>
									<p className="mt-2 text-base text-gray-500 text-center">
										Customized growing schedules for your specific crops and
										climate zone.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Weather Forecast Feature */}
			<WeatherSection />

			{/* How It Works */}
			<div className="py-20 lg:py-40 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
							How PlantGuard Detection AI Works
						</h2>
						<p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
							A simple three-step process to keep your plants healthy and
							thriving.
						</p>
					</div>

					<div className="mt-16">
						<div className="relative">
							{/* Steps Connected by Line */}
							<div className="absolute inset-0 flex items-center justify-center bottom-[107px] mx-auto lg:max-w-2xl xl:max-w-3xl">
								<div className="hidden lg:block w-full border-t-2 border-green-200"></div>
							</div>

							{/* Steps */}
							<div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-around">
								<div className="flex flex-col items-center">
									<div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-white relative z-10">
										<Camera className="w-6 h-6 text-green-600" />
									</div>
									<div className="mt-6 text-center max-w-xs">
										<h3 className="text-lg font-medium text-gray-900">
											Take a Photo
										</h3>
										<p className="mt-2 text-base text-gray-500">
											Capture a clear image of your plant's issue using the
											PlantGuard AI app.
										</p>
									</div>
								</div>

								<div className="flex flex-col items-center">
									<div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-white relative z-10">
										<ArrowRight className="w-6 h-6 text-green-600" />
									</div>
									<div className="mt-6 text-center max-w-xs">
										<h3 className="text-lg font-medium text-gray-900">
											Get Analysis
										</h3>
										<p className="mt-2 text-base text-gray-500">
											Our AI identifies the disease and provides a detailed
											diagnosis.
										</p>
									</div>
								</div>

								<div className="flex flex-col items-center">
									<div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-white relative z-10">
										<Leaf className="w-6 h-6 text-green-600" />
									</div>
									<div className="mt-6 text-center max-w-xs">
										<h3 className="text-lg font-medium text-gray-900">
											Treat & Prevent
										</h3>
										<p className="mt-2 text-base text-gray-500">
											Follow our customized treatment plan and prevention tips.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="mt-16 text-center">
						<a
							href="/detect"
							className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
						>
							Start Using PlantGuard AI
						</a>
					</div>
				</div>
			</div>

			{/* CTA */}
			<div className="bg-green-700">
				<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
					<h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
						<span className="block">Ready to grow healthier plants?</span>
						<span className="block text-green-200">
							Start using PlantGuard AI today.
						</span>
					</h2>
					<div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
						<div className="inline-flex rounded-md shadow">
							<a
								href="#"
								className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50"
							>
								Get started
							</a>
						</div>
						<div className="ml-3 inline-flex rounded-md shadow">
							<a
								href="#"
								className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-800 hover:bg-green-900"
							>
								Learn more
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* Footer */}
			<footer className="bg-gray-800">
				<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
					<div className="grid grid-cols-2 gap-8 md:grid-cols-4">
						<div>
							<h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
								Product
							</h3>
							<ul className="mt-4 space-y-4">
								<li>
									<a
										href="#"
										className="text-base text-gray-300 hover:text-white"
									>
										Features
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-base text-gray-300 hover:text-white"
									>
										Pricing
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-base text-gray-300 hover:text-white"
									>
										Mobile App
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-base text-gray-300 hover:text-white"
									>
										Updates
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
								Resources
							</h3>
							<ul className="mt-4 space-y-4">
								<li>
									<a
										href="#"
										className="text-base text-gray-300 hover:text-white"
									>
										Plant Database
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-base text-gray-300 hover:text-white"
									>
										Disease Library
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-base text-gray-300 hover:text-white"
									>
										Planting Calendar
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-base text-gray-300 hover:text-white"
									>
										Tutorial Videos
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
								Company
							</h3>
							<ul className="mt-4 space-y-4">
								<li>
									<a
										href="#"
										className="text-base text-gray-300 hover:text-white"
									>
										About
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-base text-gray-300 hover:text-white"
									>
										Blog
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-base text-gray-300 hover:text-white"
									>
										Careers
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-base text-gray-300 hover:text-white"
									>
										Contact
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
								Legal
							</h3>
							<ul className="mt-4 space-y-4">
								<li>
									<a
										href="#"
										className="text-base text-gray-300 hover:text-white"
									>
										Privacy
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-base text-gray-300 hover:text-white"
									>
										Terms
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="mt-12 border-t border-gray-700 pt-8 flex items-center justify-between">
						<div className="flex items-center">
							<Leaf className="h-6 w-6 text-green-400" />
							<span className="ml-2 text-white text-lg font-semibold">
								PlantGuard AI
							</span>
						</div>
						<p className="text-base text-gray-400">
							&copy; 2025 PlantGuard AI. All rights reserved.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
