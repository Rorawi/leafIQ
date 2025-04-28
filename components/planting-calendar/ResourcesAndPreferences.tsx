import React from "react";
import { Sun } from "lucide-react";

const ResourcesAndPreferences = ({ formData, handleInputChange }) => {
	return (
		<div>
			<div className="space-y-6">
				<div className="flex items-center mb-4">
					<div className="bg-amber-100 p-2 rounded-full mr-3">
						<Sun className="text-amber-600" size={24} />
					</div>
					<h2 className="text-xl font-semibold text-gray-800">
						Resources & Preferences
					</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label className="block text-gray-700 mb-2">Farming Goal</label>
						<select
							className="w-full p-3 border border-gray-300 rounded-lg"
							value={formData.farmingGoal}
							onChange={(e) =>
								handleInputChange("preferences", "farmingGoal", e.target.value)
							}
						>
							<option value="">-- Select Goal --</option>
							<option value="personal">Personal Use</option>
							<option value="market">Market Sale</option>
							<option value="both">Both Personal & Market</option>
						</select>
					</div>

					<div>
						<label className="block text-gray-700 mb-2">
							Available Land Size
						</label>
						<input
							type="text"
							className="w-full p-3 border border-gray-300 rounded-lg"
							placeholder="E.g., 1 acre, 500 sq ft"
							value={formData.landSize}
							onChange={(e) =>
								handleInputChange("preferences", "landSize", e.target.value)
							}
						/>
					</div>

					<div>
						<label className="block text-gray-700 mb-2">
							Labor Availability
						</label>
						<select
							className="w-full p-3 border border-gray-300 rounded-lg"
							value={formData.laborAvailability}
							onChange={(e) =>
								handleInputChange(
									"preferences",
									"laborAvailability",
									e.target.value
								)
							}
						>
							<option value="">-- Select Labor Availability --</option>
							<option value="alone">Working Alone</option>
							<option value="family">Family Help</option>
							<option value="workers">Hired Workers</option>
						</select>
					</div>

					<div>
						<label className="block text-gray-700 mb-2">
							Budget for Inputs
						</label>
						<select
							className="w-full p-3 border border-gray-300 rounded-lg"
							value={formData.budget}
							onChange={(e) =>
								handleInputChange("preferences", "budget", e.target.value)
							}
						>
							<option value="">-- Select Budget Level --</option>
							<option value="low">Limited/Low</option>
							<option value="medium">Medium</option>
							<option value="high">High</option>
						</select>
					</div>

					<div className="md:col-span-2">
						<label className="block text-gray-700 mb-2">Preferred Crops</label>
						<input
							type="text"
							className="w-full p-3 border border-gray-300 rounded-lg"
							placeholder="E.g., Tomatoes, Corn, Beans"
							value={formData.preferredCrops}
							onChange={(e) =>
								handleInputChange(
									"preferences",
									"preferredCrops",
									e.target.value.split(",").map((crop) => crop.trim())
								)
							}
						/>
						<p className="text-sm text-gray-500 mt-1">
							Separate multiple crops with commas
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResourcesAndPreferences;
