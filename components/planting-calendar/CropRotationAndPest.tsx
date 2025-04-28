import React from 'react';
import { Cloud } from 'lucide-react';

const CropRotationAndPest = ({formData, handleInputChange}) => {
  return (
    <div>
        <div className="space-y-6">
								<div className="flex items-center mb-4">
									<div className="bg-rose-100 p-2 rounded-full mr-3">
										<Cloud className="text-rose-600" size={24} />
									</div>
									<h2 className="text-xl font-semibold text-gray-800">
										Crop Rotation & Pests
									</h2>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<label className="block text-gray-700 mb-2">
											Known Pests/Diseases
										</label>
										<input
											type="text"
											className="w-full p-3 border border-gray-300 rounded-lg"
											placeholder="E.g., Aphids, Tomato Blight"
											value={formData.knownPests}
											onChange={(e) =>
												handleInputChange(
													"rotation",
													"knownPests",
													e.target.value
												)
											}
										/>
									</div>

									<div>
										<label className="block text-gray-700 mb-2">
											Open to Companion Planting?
										</label>
										<div className="flex gap-4 mt-2">
											<label className="flex items-center">
												<input
													type="radio"
													name="companionPlanting"
													value="true"
													checked={formData.companionPlanting === true}
													onChange={() =>
														handleInputChange(
															"rotation",
															"companionPlanting",
															true
														)
													}
													className="mr-2"
												/>
												Yes
											</label>
											<label className="flex items-center">
												<input
													type="radio"
													name="companionPlanting"
													value="false"
													checked={formData.companionPlanting === false}
													onChange={() =>
														handleInputChange(
															"rotation",
															"companionPlanting",
															false
														)
													}
													className="mr-2"
												/>
												No
											</label>
										</div>
									</div>

									<div>
										<label className="block text-gray-700 mb-2">
											Farming Method
										</label>
										<div className="flex gap-4 mt-2">
											<label className="flex items-center">
												<input
													type="radio"
													name="farmingMethod"
													value="organic"
													checked={formData.farmingMethod === "organic"}
													onChange={() =>
														handleInputChange(
															"rotation",
															"farmingMethod",
															"organic"
														)
													}
													className="mr-2"
												/>
												Organic
											</label>
											<label className="flex items-center">
												<input
													type="radio"
													name="farmingMethod"
													value="conventional"
													checked={formData.farmingMethod === "conventional"}
													onChange={() =>
														handleInputChange(
															"rotation",
															"farmingMethod",
															"conventional"
														)
													}
													className="mr-2"
												/>
												Conventional
											</label>
										</div>
									</div>
								</div>
							</div>
    </div>
  )
}

export default CropRotationAndPest