'use client'

import WeatherCards from "@/components/WeatherCards";
import TopNav from "../../components/TopNav";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useEffect } from "react";
import WeatherPageSection from "../../components/weather/WeatherPageSection";

export default function Home() {
	useEffect(() => {
		fetch("https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=585d4a04269c34cc7d11a057cfe5f80b")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			})
			.catch((err) => console.log(err));
	}, []);
	return (
		<div>
			<div className="relative">
				<TopNav />
				<WeatherPageSection/>
				<div className="flex justify-center items-center flex-col gap-3 h-screen bg-[#E8F6E9] pt-10 relative hidden">
					<div className="absolute text-9xl opacity-10 top-16 left-1">🍃</div>
					<div className="absolute text-9xl opacity-10 bottom-0 right-1">
						🍃
					</div>
					<div className="relative z-10 px-6 md:px-12 gap-6 mt-10">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-40 mt-12">
							<div>
								<div className="flex items-center gap-2 mb-4">
									<FaMapMarkerAlt className="text-green-500" />
									<p>Accra, Ghana</p>
								</div>

								<p>Thurs Oct 22</p>

								<div className="bg-white border border-gray-100 rounded-lg p-4 mt-4 flex flex-col gap-14">
									<div className="flex items-center justify-between">
										<h1 className="text-5xl font-medium">20</h1>
										<h1 className="text-5xl font-medium">20</h1>
									</div>
									<div className="flex items-center justify-between">
										<p className="text-md font-medium text-gray-400">
											It feels like its 60
										</p>
										<p className="text-md font-medium text-gray-400">Cloudy</p>
									</div>
								</div>

								<div
									className="mt-10 flex flex-col gap-4"
								>
									<div className="flex items-center justify-between">
										<p className="text-md font-medium text-gray-600">
											UX Index
										</p>
										<p className="text-md font-medium text-gray-600">C</p>
									</div>
									<div className="flex items-center justify-between">
										<p className="text-md font-medium text-gray-600">
											Humidity
										</p>
										<p className="text-md font-medium text-gray-600">55</p>
									</div>
									<div className="flex items-center justify-between">
										<p className="text-md font-medium text-gray-600">
											Wind Speed
										</p>
										<p className="text-md font-medium text-gray-600">5.00 mph</p>
									</div>
									<div className="flex items-center justify-between">
										<p className="text-md font-medium text-gray-600">
											Rain Probability
										</p>
										<p className="text-md font-medium text-gray-600">30%</p>
									</div>
									<div className="flex items-center justify-between">
										<p className="text-md font-medium text-gray-600">
											Pressure
										</p>
										<p className="text-md font-medium text-gray-600">1023.1 pa</p>
									</div>
								</div>
							</div>
							<div>
								<WeatherCards />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
