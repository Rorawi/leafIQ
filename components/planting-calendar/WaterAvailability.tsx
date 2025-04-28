import React from 'react';
import {
	Droplets,

} from "lucide-react";

const WaterAvailability = ({formData, handleInputChange}) => {
  return (
    <div>
        <div className="space-y-6">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-blue-100 p-2 rounded-full mr-3">
                                                <Droplets className="text-blue-600" size={24} />
                                            </div>
                                            <h2 className="text-xl font-semibold text-gray-800">
                                                Water Availability
                                            </h2>
                                        </div>
        
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-gray-700 mb-2">
                                                    Water Source
                                                </label>
                                                <select
                                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                                    value={formData.waterSource}
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            "water",
                                                            "waterSource",
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option value="">-- Select Water Source --</option>
                                                    <option value="borehole">Borehole/Well</option>
                                                    <option value="river">River/Stream</option>
                                                    <option value="rainwater">Rainwater Collection</option>
                                                    <option value="municipal">Municipal/Tap Water</option>
                                                    <option value="none">No Irrigation System</option>
                                                </select>
                                            </div>
        
                                            <div>
                                                <label className="block text-gray-700 mb-2">
                                                    Watering Schedule
                                                </label>
                                                <select
                                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                                    value={formData.waterSchedule}
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            "water",
                                                            "waterSchedule",
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option value="">-- Select Schedule --</option>
                                                    <option value="daily">Daily</option>
                                                    <option value="twice-week">2-3 times per week</option>
                                                    <option value="weekly">Weekly</option>
                                                    <option value="rainfall">Depend on rainfall only</option>
                                                </select>
                                            </div>
        
                                            <div>
                                                <label className="block text-gray-700 mb-2">
                                                    Rainfall Pattern
                                                </label>
                                                <select
                                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                                    value={formData.rainfall}
                                                    onChange={(e) =>
                                                        handleInputChange("water", "rainfall", e.target.value)
                                                    }
                                                >
                                                    <option value="">-- Select Rainfall Pattern --</option>
                                                    <option value="regular">Regular/Predictable</option>
                                                    <option value="irregular">Irregular/Unpredictable</option>
                                                    <option value="seasonal">Seasonal</option>
                                                    <option value="scarce">Scarce</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
    </div>
  )
}

export default WaterAvailability