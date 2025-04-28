'use client';

import React, {useState} from 'react';
import { CloudRain, Search, Sun, Cloud, ChevronRight, Check } from 'lucide-react';


const WeatherSection = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const weatherDetails = [
        { day: 'Mon', icon: <Sun size={24} className="text-yellow-500" />, temp: '72°F', suitable: true },
        { day: 'Tue', icon: <Sun size={24} className="text-yellow-500" />, temp: '75°F', suitable: true },
        { day: 'Wed', icon: <CloudRain size={24} className="text-blue-500" />, temp: '65°F', suitable: false },
        { day: 'Thu', icon: <Cloud size={24} className="text-gray-500" />, temp: '68°F', suitable: true },
        { day: 'Fri', icon: <Sun size={24} className="text-yellow-500" />, temp: '74°F', suitable: true },
        { day: 'Sat', icon: <CloudRain size={24} className="text-blue-500" />, temp: '62°F', suitable: false },
        { day: 'Sun', icon: <Sun size={24} className="text-yellow-500" />, temp: '70°F', suitable: true }
      ]

  return (
    <div>
        <div className="py-20 lg:py-40 bg-gradient-to-b from-blue-500 to-teal-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Plant at the Perfect Time
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-blue-100 mx-auto">
              Our smart weather forecast helps you determine the best time to plant your crops.
            </p>
          </div>

          {/* Weather Search */}
          <div className="mt-10 max-w-xl mx-auto">
            <div className="flex flex-col lg:flex-row rounded-md shadow-sm">
              <div className="relative flex items-stretch flex-grow focus-within:z-10 mb-3 lg:mb-0">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="focus:ring-green-500 focus:border-green-500 block w-full rounded-r-md lg:rounded-r-none rounded-none rounded-l-md pl-10 text-sm border-gray-300 p-4 bg-white"
                  placeholder="Search for a crop (e.g., Tomatoes)"
                />
              </div>
              <button className="relative inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md rounded-l-md lg:rounded-l-none text-white bg-green-700 hover:bg-green-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                Find Best Time
              </button>
            </div>
          </div>

          {/* Weather Forecast Preview */}
          <div className="mt-10 bg-white shadow-xl rounded-lg overflow-hidden max-w-4xl mx-auto">
            <div className="px-6 py-4 bg-blue-50 border-b border-blue-100">
              <h3 className="text-lg font-semibold text-blue-800">7-Day Weather Forecast & Planting Guide</h3>
            </div>
            
            <div className="grid grid-cols-4 lg:grid-cols-7 gap-2 p-4">
              {weatherDetails.map((day, idx) => (
                <div key={idx} className={`flex flex-col items-center p-3 rounded-lg ${day.suitable ? 'bg-green-50' : 'bg-gray-50'}`}>
                  <span className="font-medium text-gray-800">{day.day}</span>
                  <div className="my-2">{day.icon}</div>
                  <span className="font-bold">{day.temp}</span>
                  {day.suitable ? (
                    <span className="mt-2 text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full flex items-center">
                      <Check size={12} className="mr-1" /> Plant
                    </span>
                  ) : (
                    <span className="mt-2 text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-full">
                      Wait
                    </span>
                  )}
                </div>
              ))}
            </div>
            
            {/* Crop Specific Recommendations */}
            <div className="px-6 py-4 bg-green-50 border-t border-green-100">
              <h4 className="font-medium text-green-800">Tomatoes: Recommended Planting Days</h4>
              <p className="text-gray-600 text-sm mt-1">Monday, Tuesday, Thursday, Friday, and Sunday are optimal based on temperature and precipitation forecast.</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a href="/weather" className="inline-flex items-center text-white font-medium hover:underline">
              Explore the full planting calendar
              <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherSection