import React from "react";
import {
    Leaf

} from "lucide-react";

const SoilFormation = ({formData, handleInputChange}) => {
	return (
		<div>
			{" "}
			<div className="space-y-6">
				<div className="flex items-center mb-4">
					<div className="bg-green-100 p-2 rounded-full mr-3">
						<Leaf className="text-green-600" size={24} />
					</div>
					<h2 className="text-xl font-semibold text-gray-800">
						Soil Information
					</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label className="block text-gray-700 mb-2">Soil pH Level</label>
						<select
							className="w-full p-3 border border-gray-300 rounded-lg"
							value={formData.soilPH}
							onChange={(e) =>
								handleInputChange("soil", "soilPH", e.target.value)
							}
						>
							<option value="">-- Select pH Level --</option>
							<option value="acidic">Acidic (Below 6.0)</option>
							<option value="neutral">Neutral (6.0 - 7.0)</option>
							<option value="alkaline">Alkaline (Above 7.0)</option>
							<option value="unknown">I don't know</option>
						</select>
					</div>

					<div>
						<label className="block text-gray-700 mb-2">Soil Type</label>
						<select
							className="w-full p-3 border border-gray-300 rounded-lg"
							value={formData.soilType}
							onChange={(e) =>
								handleInputChange("soil", "soilType", e.target.value)
							}
						>
							<option value="">-- Select Soil Type --</option>
							<option value="sandy">Sandy</option>
							<option value="clay">Clay</option>
							<option value="loam">Loam</option>
							<option value="silt">Silty</option>
							<option value="mixed">Mixed</option>
						</select>
					</div>

					<div>
						<label className="block text-gray-700 mb-2">Drainage</label>
						<select
							className="w-full p-3 border border-gray-300 rounded-lg"
							value={formData.drainage}
							onChange={(e) =>
								handleInputChange("soil", "drainage", e.target.value)
							}
						>
							<option value="">-- Select Drainage Type --</option>
							<option value="poor">Poor (water pools)</option>
							<option value="moderate">Moderate</option>
							<option value="good">Good (drains quickly)</option>
						</select>
					</div>

					<div>
						<label className="block text-gray-700 mb-2">
							Do you use compost or manure?
						</label>
						<div className="flex gap-4 mt-2">
							<label className="flex items-center">
								<input
									type="radio"
									name="organicMatter"
									value="true"
									checked={formData.organicMatter === true}
									onChange={() =>
										handleInputChange("soil", "organicMatter", true)
									}
									className="mr-2"
								/>
								Yes
							</label>
							<label className="flex items-center">
								<input
									type="radio"
									name="organicMatter"
									value="false"
									checked={formData.organicMatter === false}
									onChange={() =>
										handleInputChange("soil", "organicMatter", false)
									}
									className="mr-2"
								/>
								No
							</label>
						</div>
					</div>

					<div className="md:col-span-2">
						<label className="block text-gray-700 mb-2">
							Previous Crops (last 1-2 years)
						</label>
						<input
							type="text"
							className="w-full p-3 border border-gray-300 rounded-lg"
							placeholder="E.g., Tomatoes, Corn, Beans"
							value={formData.previousCrops}
							onChange={(e) =>
								handleInputChange(
									"soil",
									"previousCrops",
									e.target.value.split(",").map((crop) => crop.trim())
								)
							}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SoilFormation;
