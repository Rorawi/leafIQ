// pages/planting-calendar.js
import React, { useState } from 'react';
import Head from 'next/head';
import { 
  Sun, Cloud, CloudRain, ChevronLeft, ChevronRight, 
  Calendar, MapPin, Search, ArrowRight, Check
} from 'lucide-react';

export default function PlantingCalendar() {
  const [currentMonth, setCurrentMonth] = useState("April");
  const [currentYear, setCurrentYear] = useState(2025);
  const [selectedCrop, setSelectedCrop] = useState("Tomatoes");
  
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const daysInMonth = 30; // Simplified for April
  const firstDayOfMonth = 2; // Tuesday
  
  // Calendar data
  const calendarDays = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null); // Empty cells for days before the 1st
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }
  
  // Crop planting data (sample)
  const cropsData = [
    { 
      name: "Tomatoes", 
      optimalDays: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 29, 30],
      acceptableDays: [16, 17, 18, 19, 20],
      harvestPeriod: "65-85 days",
      varieties: ["Roma", "Beefsteak", "Cherry"],
      notes: "Needs full sun, consistent water, and well-drained soil."
    },
    { 
      name: "Peppers", 
      optimalDays: [5, 6, 7, 8, 9, 10, 11],
      acceptableDays: [1, 2, 3, 4, 12, 13, 14, 15],
      harvestPeriod: "60-90 days",
      varieties: ["Bell", "Habanero", "Cayenne"],
      notes: "Thrives in warm weather and needs regular fertilizing."
    },
    {
      name: "Okra",
      optimalDays: [15, 16, 17, 18, 19, 20],
      acceptableDays: [10, 11, 12, 13, 14, 21, 22, 23],
      harvestPeriod: "50-65 days",
      varieties: ["Clemson Spineless", "Red Burgundy", "Star of David"],
      notes: "Heat-loving crop that grows quickly in warm weather."
    }
  ];
  
  const selectedCropData = cropsData.find(crop => crop.name === selectedCrop);
  
  const getDateClass = (day) => {
    if (!day || !selectedCropData) return "";
    
    if (selectedCropData.optimalDays.includes(day)) 
      return "bg-green-600 text-white";
    if (selectedCropData.acceptableDays.includes(day)) 
      return "bg-yellow-500 text-gray-800";
    return "bg-gray-200 text-gray-700";
  };
  
  const previousMonth = () => {
    const currentIndex = months.indexOf(currentMonth);
    if (currentIndex > 0) {
      setCurrentMonth(months[currentIndex - 1]);
    } else {
      setCurrentMonth(months[11]);
      setCurrentYear(currentYear - 1);
    }
  };
  
  const nextMonth = () => {
    const currentIndex = months.indexOf(currentMonth);
    if (currentIndex < 11) {
      setCurrentMonth(months[currentIndex + 1]);
    } else {
      setCurrentMonth(months[0]);
      setCurrentYear(currentYear + 1);
    }
  };

  return (
    <div className="min-h-screen">
      <Head>
        <title>GrowGuide - Planting Calendar</title>
        <meta name="description" content="Crop recommendation and planting calendar system" />
      </Head>
      
      <div className="lg:container lg:mx-auto lg:px-4 py-8">
        <div className="relative">
        {/* Header */}
        <header className="flex justify-end items-center mb-6">
          <div className="flex items-center gap-2 hidden">
            <div className="bg-white p-2 rounded-full">
              <Calendar className="h-6 w-6 text-green-600" />
            </div>
            <h1 className="text-2xl font-semibold">GrowGuide</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Accra, Ghana</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="">
                <Cloud className="h-5 w-5" />
              </div>
              <span>Cloudy</span>
            </div>
          </div>
        </header>
        
        {/* Page Title */}
        <div className="text-center my-10">
          <h2 className="text-3xl font-bold mb-2">Planting Calendar</h2>
          <p className="text-green-700">Plan your perfect growing season with our personalized planting guide</p>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 bg-white text-green-800 rounded-lg p-4 shadow-lg">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search crops..." 
                className="w-full bg-gray-100 pl-10 pr-4 py-2 rounded-lg text-green-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            
            <h3 className="text-lg font-semibold mb-3">Crop Selection</h3>
            
            <div className="space-y-2 mb-6">
              {cropsData.map(crop => (
                <div 
                  key={crop.name}
                  onClick={() => setSelectedCrop(crop.name)}
                  className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-gray-100 ${selectedCrop === crop.name ? 'bg-gray-100 border-l-4 border-green-600' : ''}`}
                >
                  {selectedCrop === crop.name ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <div className="w-4"></div>
                  )}
                  <span>{crop.name}</span>
                </div>
              ))}
            </div>
            
            <h3 className="text-lg font-semibold mb-3">Legend</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-600 rounded-sm"></div>
                <span>Optimal planting day</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-400 rounded-sm"></div>
                <span>Acceptable planting day</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-100 rounded-sm"></div>
                <span>Not recommended</span>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-2">Growing Zone</h3>
              <p className="text-green-800">Zone 12b - Tropical</p>
              <p className="text-sm text-green-700 mt-1">Year-round growing season</p>
            </div>
          </div>
          
          {/* Calendar */}
          <div className="lg:col-span-2 bg-[#d6f9e5] text-green-800 rounded-lg p-4 shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <button 
                onClick={previousMonth}
                className="bg-green-100 text-green-700 p-2 rounded-full hover:bg-green-200"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <h3 className="text-xl font-semibold">{currentMonth} {currentYear}</h3>
              
              <button 
                onClick={nextMonth}
                className="bg-green-100 text-green-700 p-2 rounded-full hover:bg-green-200"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            
            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 mb-6">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
                <div key={day} className="text-center p-2 font-medium text-green-700">
                  {day}
                </div>
              ))}
              
              {calendarDays.map((day, index) => (
                <div 
                  key={index}
                  className={`aspect-square p-1 rounded-lg ${day ? getDateClass(day) : ""}`}
                >
                  {day && (
                    <div className="h-full flex flex-col">
                      <span className="text-right p-1">{day}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Selected Crop Info */}
            {selectedCropData && (
              <div className="bg-green-400/5 rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-2 text-green-800">{selectedCropData.name}: Planting Guide</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-green-700 font-medium">Optimal Planting Days</h4>
                    <p>April {selectedCropData.optimalDays.join(", ")}</p>
                  </div>
                  <div>
                    <h4 className="text-green-700 font-medium">Harvest Period</h4>
                    <p>{selectedCropData.harvestPeriod} after planting</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-green-700 font-medium mb-1">Recommended Varieties</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCropData.varieties.map((variety, index) => (
                      <span key={index} className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm">
                        {variety}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-green-700 font-medium mb-1">Growing Notes</h4>
                  <p className="text-sm">{selectedCropData.notes}</p>
                </div>
                
                <div className="mt-4 pt-4 border-t border-green-200 flex flex-col lg:flex-row justify-between items-center">
                  <div>
                    <h4 className="text-green-700 font-medium">Next planting opportunity:</h4>
                    <p className="text-sm">TODAY - Ideal conditions</p>
                  </div>
                  <button className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hidden">
                    <span>Add to My Plan</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Weather Forecast */}
        <div className="mt-8 bg-white text-green-800 rounded-lg p-4 shadow-lg">
          <h3 className="text-lg font-semibold mb-4">7-Day Weather Forecast</h3>
          
          <div class="grid grid-cols-4 lg:grid-cols-7 gap-2">
            {[
              {day: "Mon", icon: <Sun className="h-6 w-6 text-yellow-500" />, temp: "72°F", plant: true},
              {day: "Tue", icon: <Sun className="h-6 w-6 text-yellow-500" />, temp: "75°F", plant: true},
              {day: "Wed", icon: <CloudRain className="h-6 w-6 text-blue-500" />, temp: "65°F", plant: false},
              {day: "Thu", icon: <Cloud className="h-6 w-6 text-gray-500" />, temp: "68°F", plant: true},
              {day: "Fri", icon: <Sun className="h-6 w-6 text-yellow-500" />, temp: "74°F", plant: true},
              {day: "Sat", icon: <CloudRain className="h-6 w-6 text-blue-500" />, temp: "62°F", plant: false},
              {day: "Sun", icon: <Sun className="h-6 w-6 text-yellow-500" />, temp: "70°F", plant: true}
            ].map((day, index) => (
              <div key={index} className="bg-green-50 rounded-lg p-3 text-center">
                <p className="font-medium">{day.day}</p>
                <div className="my-2">{day.icon}</div>
                <p>{day.temp}</p>
                <div className={`mt-2 text-xs px-2 py-1 rounded text-white ${day.plant ? 'bg-green-600' : 'bg-gray-500'}`}>
                  {day.plant ? 'Plant' : 'Wait'}
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
        
        <div className='fixed bottom-0 left-50 translate-x-1 bg-white p-3 rounded-3xl shadow-lg w-fit hidden'>
        <div className=''> 
        <h3 className="text-sm font-semibold text-center mb-2">Legend</h3>
            <div className="flex justify-center gap-5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-600 rounded-xs"></div>
                <span className='text-xs'>Optimal planting day</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-xs"></div>
                <span className='text-xs'>Acceptable planting day</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gray-100 rounded-xs"></div>
                <span className='text-xs'>Not recommended</span>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="mt-8 text-center">
          <p className="text-green-100 text-sm">GrowGuide - Crop Recommendation System</p>
        </footer>
      </div>
    </div>
  );
}