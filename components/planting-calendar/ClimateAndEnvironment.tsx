import React from 'react';
import {
    ThermometerSun,
    MapPin,
} from "lucide-react";


const ClimateAndEnvironment = ({formData, handleInputChange}) => {
  return (
    <div>
            <div className="space-y-6">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-blue-100 p-2 rounded-full mr-3">
                                                <ThermometerSun className="text-blue-600" size={24} />
                                            </div>
                                            <h2 className="text-xl font-semibold text-gray-800">
                                                Climate & Environment
                                            </h2>
                                        </div>
        
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-gray-700 mb-2">Location</label>
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        className="w-full p-3 pl-10 border border-gray-300 rounded-lg"
                                                        placeholder="City, State or Zip Code"
                                                        value={formData.location}
                                                        onChange={(e) =>
                                                            handleInputChange(
                                                                "climate",
                                                                "location",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    <MapPin
                                                        className="absolute left-3 top-3.5 text-gray-400"
                                                        size={18}
                                                    />
                                                </div>
                                            </div>
        
                                            <div>
                                                <label className="block text-gray-700 mb-2">Season</label>
                                                <select
                                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                                    value={formData.season}
                                                    onChange={(e) =>
                                                        handleInputChange("climate", "season", e.target.value)
                                                    }
                                                >
                                                    <option value="">-- Select Season --</option>
                                                    <option value="spring">Spring</option>
                                                    <option value="summer">Summer</option>
                                                    <option value="fall">Fall</option>
                                                    <option value="winter">Winter</option>
                                                    <option value="dry">Dry Season</option>
                                                    <option value="rainy">Rainy Season</option>
                                                </select>
                                            </div>
        
                                            <div>
                                                <label className="block text-gray-700 mb-2">
                                                    Sunlight Exposure
                                                </label>
                                                <select
                                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                                    value={formData.sunlight}
                                                    onChange={(e) =>
                                                        handleInputChange("climate", "sunlight", e.target.value)
                                                    }
                                                >
                                                    <option value="">-- Select Sunlight --</option>
                                                    <option value="full">Full Sun (6+ hours)</option>
                                                    <option value="partial">Partial Sun (3-6 hours)</option>
                                                    <option value="shade">
                                                        Mostly Shade (less than 3 hours)
                                                    </option>
                                                </select>
                                            </div>
        
                                            <div>
                                                <label className="block text-gray-700 mb-2">
                                                    Frost Risk
                                                </label>
                                                <div className="flex gap-4 mt-2">
                                                    <label className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            name="frostRisk"
                                                            value="true"
                                                            checked={formData.frostRisk === true}
                                                            onChange={() =>
                                                                handleInputChange("climate", "frostRisk", true)
                                                            }
                                                            className="mr-2"
                                                        />
                                                        Yes
                                                    </label>
                                                    <label className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            name="frostRisk"
                                                            value="false"
                                                            checked={formData.frostRisk === false}
                                                            onChange={() =>
                                                                handleInputChange("climate", "frostRisk", false)
                                                            }
                                                            className="mr-2"
                                                        />
                                                        No
                                                    </label>
                                                </div>
                                            </div>
        
                                            <div className="md:col-span-2">
                                                <label className="block text-gray-700 mb-2">
                                                    Temperature Range (°F)
                                                </label>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-sm text-gray-600 mb-1">
                                                            Daytime
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="w-full p-3 border border-gray-300 rounded-lg"
                                                            placeholder="E.g., 70-85"
                                                            value={formData.temperatureRange.day}
                                                            onChange={(e) =>
                                                                setFormData({
                                                                    ...formData,
                                                                    temperatureRange: {
                                                                        ...formData.temperatureRange,
                                                                        day: e.target.value,
                                                                    },
                                                                })
                                                            }
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm text-gray-600 mb-1">
                                                            Nighttime
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="w-full p-3 border border-gray-300 rounded-lg"
                                                            placeholder="E.g., 50-65"
                                                            value={formData.temperatureRange.night}
                                                            onChange={(e) =>
                                                                setFormData({
                                                                    ...formData,
                                                                    temperatureRange: {
                                                                        ...formData.temperatureRange,
                                                                        night: e.target.value,
                                                                    },
                                                                })
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
    </div>
  )
}

export default ClimateAndEnvironment