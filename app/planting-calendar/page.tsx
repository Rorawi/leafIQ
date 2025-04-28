"use client";

import { useState } from "react";
import {
	ChevronLeft,
	ChevronRight,
	Leaf,
    CheckCircle,
    Hammer

} from "lucide-react";
import TopNav from "../../components/TopNav";
import SoilFormation from "../../components/planting-calendar/SoilFormation";
import ClimateAndEnvironment from "../../components/planting-calendar/ClimateAndEnvironment";
import WaterAvailability from "../../components/planting-calendar/WaterAvailability";
import ResourcesAndPreferences from "../../components/planting-calendar/ResourcesAndPreferences";
import CropRotationAndPest from "../../components/planting-calendar/CropRotationAndPest";
import FormProgressIndicator from "../../components/planting-calendar/FormProgressIndicator";
import PlantCalendar from "../../components/planting-calendar/PlantCalendar";

export default function PlantingCalendar() {
	// State management
	const [formStep, setFormStep] = useState(1);
	const [showCalendar, setShowCalendar] = useState(false);
	const [currentMonth, setCurrentMonth] = useState(new Date());

	// Form data state
	const [formData, setFormData] = useState({
		// Soil Information
		soilPH: "",
		soilType: "",
		drainage: "",
		fertility: { nitrogen: "", phosphorus: "", potassium: "" },
		organicMatter: false,
		previousCrops: [],

		// Climate & Environment
		location: "",
		season: "",
		temperatureRange: { day: "", night: "" },
		sunlight: "",
		frostRisk: false,

		// Water Availability
		waterSource: "",
		waterSchedule: "",
		rainfall: "",

		// Resources & Preferences
		farmingGoal: "",
		landSize: "",
		preferredCrops: [],
		laborAvailability: "",
		budget: "",

		// Crop Rotation & Pests
		knownPests: "",
		companionPlanting: false,
		farmingMethod: "",
	});

	// Sample planting calendar data (this would come from the recommendation algorithm)
	const plantingData = [
		{
			crop: "Tomato",
			plantingWindow: {
				start: new Date(2025, 4, 10),
				end: new Date(2025, 4, 25),
			},
			maintenanceDates: [
				{ action: "Fertilize", date: new Date(2025, 5, 15) },
				{ action: "Prune", date: new Date(2025, 6, 1) },
			],
			harvestWindow: {
				start: new Date(2025, 7, 10),
				end: new Date(2025, 7, 30),
			},
		},
		{
			crop: "Lettuce",
			plantingWindow: {
				start: new Date(2025, 3, 1),
				end: new Date(2025, 3, 15),
			},
			maintenanceDates: [
				{ action: "Thin Seedlings", date: new Date(2025, 3, 20) },
			],
			harvestWindow: {
				start: new Date(2025, 4, 15),
				end: new Date(2025, 5, 5),
			},
		},
		{
			crop: "Carrots",
			plantingWindow: {
				start: new Date(2025, 3, 15),
				end: new Date(2025, 4, 1),
			},
			maintenanceDates: [
				{ action: "Thin Seedlings", date: new Date(2025, 4, 10) },
			],
			harvestWindow: {
				start: new Date(2025, 6, 1),
				end: new Date(2025, 6, 20),
			},
		},
	];

	// Helper function to check if a date has an event
	const getDateActivity = (date) => {
		const activities = [];

		plantingData.forEach((crop) => {
			// Check planting window
			if (
				date >= crop.plantingWindow.start &&
				date <= crop.plantingWindow.end
			) {
				activities.push({ type: "planting", crop: crop.crop });
			}

			// Check maintenance dates
			crop.maintenanceDates.forEach((maintenance) => {
				if (date.toDateString() === maintenance.date.toDateString()) {
					activities.push({
						type: "maintenance",
						crop: crop.crop,
						action: maintenance.action,
					});
				}
			});

			// Check harvest window
			if (date >= crop.harvestWindow.start && date <= crop.harvestWindow.end) {
				activities.push({ type: "harvest", crop: crop.crop });
			}
		});

		return activities;
	};

	// Handle form input changes
	const handleInputChange = (section, field, value) => {
		setFormData((prevData) => ({
			...prevData,
			[field]: value,
		}));
	};

	// Navigate through form steps
	const nextStep = () => {
		if (formStep < 5) {
			setFormStep(formStep + 1);
		} else {
			// Submit form and show calendar
			setShowCalendar(true);
		}
	};

	const prevStep = () => {
		if (formStep > 1) {
			setFormStep(formStep - 1);
		}
	};

	// Calendar navigation
	const nextMonth = () => {
		setCurrentMonth(
			new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
		);
	};

	const prevMonth = () => {
		setCurrentMonth(
			new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
		);
	};

	// Generate calendar days
	const generateCalendarDays = () => {
		const year = currentMonth.getFullYear();
		const month = currentMonth.getMonth();

		// First day of the month
		const firstDay = new Date(year, month, 1);
		// Last day of the month
		const lastDay = new Date(year, month + 1, 0);

		const days = [];

		// Add days from previous month to fill the first week
		const firstDayOfWeek = firstDay.getDay(); // 0 = Sunday, 6 = Saturday
		for (let i = firstDayOfWeek - 1; i >= 0; i--) {
			days.push({
				date: new Date(year, month, -i),
				isCurrentMonth: false,
			});
		}

		// Add all days in current month
		for (let i = 1; i <= lastDay.getDate(); i++) {
			const date = new Date(year, month, i);
			days.push({
				date,
				isCurrentMonth: true,
				activities: getDateActivity(date) || [],
			});
		}

		// Add days from next month to complete the last week
		const lastDayOfWeek = lastDay.getDay(); // 0 = Sunday, 6 = Saturday
		for (let i = 1; i < 7 - lastDayOfWeek; i++) {
			days.push({
				date: new Date(year, month + 1, i),
				isCurrentMonth: false,
			});
		}

		return days;
	};

	return (
		<div className="flex flex-col min-h-screen bg-gradient-to-br from-green-50 to-blue-50 ">
			<TopNav />

<div className="pt-15 lg:pt-20">
			<main className="flex-1 p-4 md:p-6 overflow-auto ">
				{!showCalendar ? (
					// Farm Data Collection Form
					<div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6">
						<h1 className="text-2xl font-bold text-center text-green-700 mb-6">
							Crop Recommendation & Planting Calendar
						</h1>

						{/* Form Progress Indicator */}
						<FormProgressIndicator formStep={formStep} setFormStep={setFormStep} />

						{/* Form Step 1: Soil Information */}
						{formStep === 1 && (
						<SoilFormation handleInputChange={handleInputChange} formData={formData}/>
						)}

						{/* Form Step 2: Climate & Environment */}
						{formStep === 2 && (
						<ClimateAndEnvironment handleInputChange={handleInputChange} formData={formData}/>
						)}

						{/* Form Step 3: Water Availability */}
						{formStep === 3 && (
							<WaterAvailability
                                handleInputChange={handleInputChange}
                                formData={formData}
                                />  
						)}

						{/* Form Step 4: Resources & Preferences */}
						{formStep === 4 && (
							<ResourcesAndPreferences
                                handleInputChange={handleInputChange}
                                formData={formData}
                                />
						)}

						{/* Form Step 5: Crop Rotation & Pests */}
						{formStep === 5 && (
							<CropRotationAndPest
                                handleInputChange={handleInputChange}
                                formData={formData}
                                />
						)}

						{/* Form Navigation Buttons */}
						<div className="flex justify-between mt-8">
							<button
								onClick={prevStep}
								className={`px-6 py-2.5 rounded-lg border border-gray-300 ${
									formStep === 1
										? "opacity-50 cursor-not-allowed"
										: "hover:bg-gray-50"
								}`}
								disabled={formStep === 1}
							>
								<ChevronLeft className="inline mr-1" size={18} />
								Previous
							</button>

							<button
								onClick={nextStep}
								className="px-6 py-2.5 rounded-lg bg-green-600 text-white hover:bg-green-700"
							>
								{formStep === 5 ? "Generate Calendar" : "Next"}
								{formStep !== 5 && (
									<ChevronRight className="inline ml-1" size={18} />
								)}
							</button>
						</div>
					</div>
				) : (
					// Planting Calendar View
					<PlantCalendar
                        plantingData={plantingData}
                        currentMonth={currentMonth}
                        generateCalendarDays={generateCalendarDays}
                        prevMonth={prevMonth}
                        nextMonth={nextMonth}
                        getDateActivity={getDateActivity}
                        />
				)}
			</main>
</div>
		</div>
	);
}
