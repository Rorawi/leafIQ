"use client";
import { useEffect, useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import { GrCloudUpload } from "react-icons/gr";
import PlantDetails from "./PlantDetails";
import Image from "next/image";

export default function PlantPredictor() {
	const [model, setModel] = useState<tf.LayersModel | null>(null);
	const [prediction, setPrediction] = useState<string | null>(null);
	const webcamRef = useRef<Webcam>(null);
	const [uploadedImage, setUploadedImage] = useState<string | null>(null);
	const [activeTab, setActiveTab] = useState<"upload" | "live">("upload");

	useEffect(() => {
		const loadModel = async () => {
			const loadedModel = await tf.loadLayersModel("/model/model.json");
			setModel(loadedModel);
			console.log("✅ Model loaded");
		};
		loadModel();
	}, []);

	const captureAndPredict = async () => { 
		if (!webcamRef.current || !model) return;

		const screenshot = webcamRef.current.getScreenshot();
		if (!screenshot) return;

		const img = new Image();
		img.src = screenshot;
		img.onload = async () => {
			const tensor = tf.browser
				.fromPixels(img)
				.resizeNearestNeighbor([224, 224])
				.toFloat()
				.div(tf.scalar(255.0))
				.expandDims();

			const predictionTensor = model.predict(tensor) as tf.Tensor;
			const predictionArray = await predictionTensor.data();

			const label =
				predictionArray[1] > predictionArray[0] ? "Healthy 🌿" : "Unhealthy 🥀";
			setPrediction(label);
		};
	};

	const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files?.[0]) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setUploadedImage(reader.result as string);
				setActiveTab("upload");
			};
			reader.readAsDataURL(event.target.files[0]);
		}
	};

	console.log(prediction)

	return (
		<div>
			<div className="space-y-4">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
					<div className="">
						<div className="flex justify-center bg-gray-100 py-2 px-8 rounded-md space-x-4 w-fit mx-auto">
							<button
								className={`px-4 py-2 bg-transparent text-black rounded cursor-pointer ${
									activeTab === "upload" ? "bg-green-500" : ""
								}`}
								onClick={() => setActiveTab("upload")}
							>
								Upload Image
							</button>
							<button
								className={`px-4 py-2 bg-transparent text-black rounded cursor-pointer ${
									activeTab === "live" ? "bg-green-500" : ""
								}`}
								onClick={() => setActiveTab("live")}
							>
								Live Camera
							</button>
						</div>
						{activeTab === "upload" && (
							<div className="mt-4 w-full h-full flex justify-center items-center">
								<label
									htmlFor="file-upload"
									className="border-2 border-dashed border-green-400 rounded-2xl p-6 text-center hover:bg-green-50 transition h-full block cursor-pointer w-full"
								>
									<div className="flex justify-center items-center flex-col h-100">
										<h4 className="text-3xl font-medium text-gray-700">
											<GrCloudUpload />
										</h4>
										<p className="text-sm text-gray-500">
											Drag and drop an image here, or click to select one
										</p>
										<input
											id="file-upload"
											type="file"
											accept="image/*"
											onChange={handleImageUpload}
											className="sr-only"
										/>
									</div>
								</label>

								{uploadedImage && (
									<Image
										src={uploadedImage || ""}
										alt="Uploaded"
										className="mt-4 rounded-md w-full"
										width={500}
										height={500}
									/>
								)}
							</div>
						)}

						{activeTab === "live" && (
							<div className="mt-4">
								<Webcam
									ref={webcamRef}
									screenshotFormat="image/jpeg"
									videoConstraints={{
										facingMode: "environment",
									}}
									className="rounded-md w-full max-h-1/4"
								/>

								<button
									onClick={captureAndPredict}
									className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
								>
									Capture & Predict
								</button>
							</div>
						)}
					</div>

					<div className="">
						{prediction && (
							<p className="text-lg font-medium">
								Result: <span className="font-bold">{prediction}</span>
							</p>
						)}
						<PlantDetails />
					</div>
				</div>
			</div>
		</div>
	);
}
