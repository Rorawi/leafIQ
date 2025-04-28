import TopNav from "../components/TopNav";
import Link from "next/link";
import Image from "next/image";
import uploadImage from "../public/assets/uploadPhoto.jpg";
import { GiCheckMark } from "react-icons/gi";
import WeatherCards from "@/components/WeatherCards";
import LandingPage from "@/components/LandingPage";

export default function Home() {
	return (
		<>
		<LandingPage />
		<div className="hidden">
			<div className="relative">
				<TopNav />
				<div className="flex justify-center items-center flex-col gap-3 h-screen bg-[#E8F6E9] pt-10 relative">
					<div className="absolute text-9xl opacity-10 top-16 left-1">🍃</div>
					<div className="absolute text-9xl opacity-10 bottom-4 right-0">
						🍃
					</div>
					<div className="relative z-10 px-6 md:px-12 lg:text-center gap-6 mt-5">
						<h1 className="text-gray-600 font-bold text-4xl lg:text-6xl max-w-5xl">
							Don't let mystery spots ruin your tomatoes!
						</h1>

						<div className="pt-16">
							<Link
								href={"/detect"}
								className="bg-[#00D26A] rounded-full text-xl px-5 py-5 font-bold text-white"
							>
								Detect Now
							</Link>
						</div>
					</div>
				</div>
			</div>
			{/*Steps to take to detect*/}
			<div className="container mx-auto mt-20 mb-40">
				<div className="px-8 lg:px-16 mb-40 mt-32">
					<h1 className="text-gray-600 font-bold text-4xl lg:text-6xl text-center  max-w-5xl mx-auto">
						Save Your Plants in 3 Simple Steps
					</h1>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-12">
						<div className="step">
							<div className="relative mb-3">
								<div className="h-96 overflow-hidden rounded-xl">
									<Image
										src={uploadImage}
										alt="Step 1- Upload Image"
										className="object-cover w-full h-full"
									/>
								</div>
								<span className="absolute left-3 bottom-4 text-5xl text-white font-semibold">
									1
								</span>
							</div>
							<h3 className="text-3xl text-gray-500 font-bold flex items-center">
								Snap or Upload a Photo
							</h3>
							<p className="text-gray-500 font-normal mt-3">
								Capture a clear shot of affected leaves or fruits. Our AI works
								best with close-ups!
							</p>
						</div>
						<div className="step">
							<div className="relative mb-3">
								<div className="h-96 overflow-hidden rounded-xl">
									<Image
										src={uploadImage}
										alt="Step 1- Upload Image"
										className="object-cover w-full h-full"
									/>
								</div>
								<span className="absolute left-3 bottom-4 text-5xl text-white font-semibold">
									2
								</span>
							</div>{" "}
							<h3 className="text-3xl text-gray-500 font-bold">
								Instant Analysis
							</h3>
							<p className="text-gray-500 font-normal mt-3">
								Get AI-powered results in <strong>under 10 seconds</strong>. We
								detect 50+ common diseases.
							</p>
						</div>
						<div className="step">
							<div className="relative mb-3">
								<div className="h-96 overflow-hidden rounded-xl">
									<Image
										src={uploadImage}
										alt="Step 1- Upload Image"
										className="object-cover w-full h-full"
									/>
								</div>
								<span className="absolute left-3 bottom-4 text-5xl text-white font-semibold">
									3
								</span>
							</div>{" "}
							<h3 className="text-3xl text-gray-500 font-bold">
								Treat & Prevent
							</h3>
							<p className="text-gray-500 font-normal mt-3">
								Receive tailored solutions – organic remedies, chemical
								treatments, and prevention tips.
							</p>
						</div>
					</div>
				</div>
				{/* Weather forecast */}
				<div className="px-8 lg:px-16 mt-72">
					<h1 className="text-gray-600 font-bold text-4xl lg:text-6xl text-center max-w-5xl mx-auto">
						☘️Weather-Aware Crop Selector
					</h1>
					<p className="text-gray-500 text-lg font-normal mt-3 text-center">
						AI adjusts recommendations based on upcoming frost, rain, or
						heatwaves
					</p>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
						<div className="lg:mx-auto flex flex-col justify-center items-start gap-4">
							<div className="flex gap-5 items-center">
								<div className="bg-[#E8F6E9] w-12 h-12 rounded-full text-[#00D26A] flex justify-center items-center mb-4 flex-shrink-0">
									<GiCheckMark className="text-lg lg:text-3xl" />
								</div>
								<h3 className="text-lg lg:text-3xl text-gray-500 font-bold mb-4">
									Location-Based Suggestions
								</h3>
							</div>
							<div className="flex gap-5 items-center">
								<div className="bg-[#E8F6E9] w-12 h-12 rounded-full text-[#00D26A] flex justify-center items-center mb-4 flex-shrink-0">
									<GiCheckMark className="text-lg lg:text-3xl" />
								</div>
								<h3 className="text-lg lg:text-3xl text-gray-500 font-bold mb-4">
									Real-Time Weather Adaptation
								</h3>
							</div>
							<div className="flex gap-5 items-center">
								<div className="bg-[#E8F6E9] w-12 h-12 rounded-full text-[#00D26A] flex justify-center items-center mb-4 flex-shrink-0">
									<GiCheckMark className="text-lg lg:text-3xl" />
								</div>
								<h3 className="text-lg lg:text-3xl text-gray-500 font-bold mb-4">
									Maximized Harvest Potential
								</h3>
							</div>
						</div>
						<div className="h-96 overflow-hidden rounded-xl">
							<Image
								src={uploadImage}
								alt="Step 1- Upload Image"
								className="object-cover w-full h-full"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Footer */}
		<div className="bg-[#0e9853] py-10">
			<div className="container mx-auto text-center">

			</div>
		</div>
		</div>
		</>
	);
}
