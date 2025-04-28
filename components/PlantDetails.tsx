import React from "react";
import Image from "next/image";
import uploadImage from "../public/assets/uploadPhoto.jpg";
import { LuSpeech } from "react-icons/lu";
import { FaNotesMedical } from "react-icons/fa6";

const PlantDetails = () => {
	return (
		<div>
            <div className="overflow-y-scroll scrollbar-none">
			<div className="p-6 bg-[#282828] rounded-2xl mb-6">
				<div className="flex gap-4">
                    <div className="flexx-grow-1">

					<div className="h-[130px] w-[130px] bg-[#1F1F1F] rounded-xl overflow-hidden">
						<Image src={uploadImage} alt="" />
					</div>
                    </div>
					<div className="flex flex-col justify-between flex-grow-1">
						<div>
							<h1 className="text-4xl font-medium text-white text-start">
								Disease Name
							</h1>
							<p className="font-normal text-[#767474] text-md text-start">
								Plant Name
							</p>
						</div>
						<div className="text-3xl flex justify-end w-full text-white cursor-pointer">
							<LuSpeech />
						</div>
					</div>
				</div>
			</div>

			<div className="p-6 bg-[#FCFCFC] rounded-2xl mb-4">
				<div className="mb-4">
					<h2 className="text-xl font-semibold text-start">
						Disease Name on Plant Name
					</h2>
					<div className="text-[#767474] text-md font-normal mt-2">
						<p className="text-start">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
							ut erat nec ligula facilisis tincidunt. Donec ac nunc a enim
							efficitur facilisis. Sed euismod, nisi vel consectetur interdum,
							nisl nisi aliquet nunc, eget aliquam nunc nisl euismod nisi.
						</p>
					</div>
				</div>
				<div className="mb-4">
					<h2 className="text-xl font-semibold text-start">
						Treatment and Prevention
					</h2>
					<div className="text-[#767474] text-md font-normal mt-2">
						<ul className="list-disc list-inside">
							<li className="mb-2 text-start">
								<span className="text-black font-semibold">Fungicides:</span>{" "}
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
								rem non voluptates voluptatibus tempora, doloremque corrupti
								labore quo quas reprehenderit.
							</li>
							<li className="mb-2 text-start">
								<span className="text-black font-semibold">Fungicides:</span>{" "}
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
								rem non voluptates voluptatibus tempora, doloremque corrupti
								labore quo quas reprehenderit.
							</li>
							<li className="mb-2 text-start">
								<span className="text-black font-semibold">Fungicides:</span>{" "}
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
								rem non voluptates voluptatibus tempora, doloremque corrupti
								labore quo quas reprehenderit.
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="p-4 bg-[#FCFCFC] rounded-2xl">
                <div className="bg-gray-100 p-3 rounded-xl flex gap-2">
                    <div>
                    <button className="rounded-md p-3 bg-green-700 text-white">
                        <FaNotesMedical />
                    </button>

                    </div>
                    <div>
                        <p className="text-start">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora assumenda sint porro architecto ea debitis distinctio nesciunt consequatur neque ullam, illo mollitia, repudiandae, ducimus natus nisi quasi hic impedit itaque?
                        </p>
                    </div>
                </div>

            </div>
            </div>
                <div className="flex gap-3 justify-end mt-5 pt-3 bg-white">
                    <button className="rounded-md px-6 py-3 border border-green-800 text-green-800">Re-generate</button>
                    <button className="rounded-md px-6 py-3 bg-green-500 text-white">Share</button>
                </div>
		</div>
	);
};

export default PlantDetails;
