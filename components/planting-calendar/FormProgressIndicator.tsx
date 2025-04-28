import React from "react";
import { Leaf, Droplets, ThermometerSun, Sun, Bug } from "lucide-react";

const FormProgressIndicator = ({ formStep, setFormStep }) => {
	const steps = [
		{
			title: "Soil Information",
			icon: <Leaf className="" size={24} />,
		},
		{
			title: "Climate & Environment",
			icon: <ThermometerSun className="" size={24} />,
		},
		{
			title: "Water Availability",
			icon: <Droplets className="" size={24} />,
		},
		{
			title: "Resources & Preferences",
			icon: <Sun className="" size={24} />,
		},
		{
			title: "Crop Rotation & Pests",
			icon: <Bug className="" size={24} />,
		},
	];

	return (
		<div>
			<div className="mb-8 relative">
				<div className="absolute top-1/4 left-0 w-full transform -translate-y-1/2 h-[2px] bg-gray-200">
					<div
						className="h-[2px] bg-green-600"
						style={{
							width: `${(formStep - 1) / (steps.length - 1) * 100}%`,
						}}
					></div>
				</div>
				<div className="flex items-center w-full justify-between mb-2">
					{steps.map((step, index) => (
						<div
							key={index}
							className={`flex flex-col items-center mb-4 z-10 ${
								formStep === index + 1
									? "text-green-600"
									: formStep > index + 1
									? "text-green-400"
									: "text-gray-500"
							}`}

						>
							<div
								className={`bg-gray-100 p-2 rounded-full mr-3 w-fit ${
									formStep === index + 1 ? "bg-green-100" : formStep > index + 1? "bg-green-200" : "bg-gray-200"
								}`}
							>
								<div
									className={`${
										formStep === index + 1 ? "text-green-400" : formStep > index + 1 ? "text-green-400" : "text-gray-400"
									}`}
								>
									{step.icon}
								</div>
							</div>
							<span className="text-sm font-medium hidden lg:block">{step.title}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default FormProgressIndicator;
