'use client';

import React, { useState, useEffect } from 'react';
import { CloudRain, Search, Sun, Cloud, ChevronRight, Check, CloudLightning, CloudSnow, Locate, Moon, Sunrise, Sunset } from 'lucide-react';
import {db} from '@/lib/firebase/client'; // Import Firestore database instance
import { collection, query, where, getDocs } from 'firebase/firestore';


const WeatherSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [currentWeather, setCurrentWeather] = useState('sunny'); // Default weather
  const [timeOfDay, setTimeOfDay] = useState('day');
  const [isLoading, setIsLoading] = useState(true);


  useEffect(()=>{
    const q = query(
      collection(db, 'cropsDB'),
      where('optimalUSDAZones', 'array-contains', 12)
    );

    try {
      const  fetchCropData =async() => {
        const snapshot = await getDocs(q);
        snapshot.forEach(doc => {
          console.log(doc.id, '=>', doc.data());
        });
      }
      fetchCropData();
    
    } catch(error) {
      console.error('Error fetching documents: ', error);
    }

  },[])

  
  const weatherDetails = [
    { day: 'Mon', icon: <Sun size={24} className="text-yellow-500" />, temp: '72°F', suitable: true },
    { day: 'Tue', icon: <Sun size={24} className="text-yellow-500" />, temp: '75°F', suitable: true },
    { day: 'Wed', icon: <CloudRain size={24} className="text-blue-500" />, temp: '65°F', suitable: false },
    { day: 'Thu', icon: <Cloud size={24} className="text-gray-500" />, temp: '68°F', suitable: true },
    { day: 'Fri', icon: <Sun size={24} className="text-yellow-500" />, temp: '74°F', suitable: true },
    { day: 'Sat', icon: <CloudRain size={24} className="text-blue-500" />, temp: '62°F', suitable: false },
    { day: 'Sun', icon: <Sun size={24} className="text-yellow-500" />, temp: '70°F', suitable: true }
  ];

  // Weather icon mapping
  const weatherIcons = {
    sunny: <Sun size={64} className="text-yellow-500" />,
    rainy: <CloudRain size={64} className="text-blue-500" />,
    cloudy: <Cloud size={64} className="text-gray-500" />,
    stormy: <CloudLightning size={64} className="text-yellow-200" />,
    snowy: <CloudSnow size={64} className="text-white" />,
    default: <Sun size={64} className="text-yellow-500" />
  };

  // Time of day to gradient mapping (bottom to top gradients)
  const timeGradients = {
    dawn: 'bg-gradient-to-t from-amber-400 via-rose-300 to-blue-400', // Dawn: orange/pink to blue
    day: 'bg-gradient-to-t from-blue-300 via-blue-400 to-sky-500',     // Day: light blue to darker blue 
    dusk: 'bg-gradient-to-t from-orange-500 via-purple-500 to-blue-800', // Dusk: sunset colors
    night: 'bg-gradient-to-t from-gray-900 via-blue-900 to-black',     // Night: dark blue to black
    default: 'bg-gradient-to-t from-blue-500 to-sky-500'
  };

  useEffect(() => {
    // Get user's location and determine local time
    getUserLocation();
  });
  
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          
          // Here you would typically make an API call to get location name from coordinates
          // For demo purposes, we'll use a placeholder approach
          fetchLocationName(latitude, longitude);
          
          // Get local time based on coordinates
          determineLocalTimeAndWeather(latitude, longitude);
        },
        error => {
          console.error('Error getting location:', error);
          setLocation('New York'); // Default location
          determineLocalTimeAndWeather(40.7128, -74.0060); // NY coordinates
          setIsLoading(false);
        }
      );
    } else {
      setLocation('New York'); // Default location
      determineLocalTimeAndWeather(40.7128, -74.0060); // NY coordinates
      setIsLoading(false);
    }
  };
  
  const fetchLocationName = async (lat, lon) => {
    try {
      // In a production app, you would use a geocoding API
      // For now we'll simulate this process
      
      // Example coordinates for a few well-known cities for demonstration
      if (Math.abs(lat - 5.6037) < 0.1 && Math.abs(lon - (-0.1870)) < 0.1) {
        setLocation('Accra, Ghana');
      } else if (Math.abs(lat - 40.7128) < 0.1 && Math.abs(lon - (-74.0060)) < 0.1) {
        setLocation('New York, USA');
      } else if (Math.abs(lat - 51.5074) < 0.1 && Math.abs(lon - (-0.1278)) < 0.1) {
        setLocation('London, UK');
      } else {
        // If not a recognized location, just use coordinates
        setLocation(`${lat.toFixed(2)}, ${lon.toFixed(2)}`);
      }
    } catch (error) {
      console.error('Error fetching location name:', error);
      setLocation(`${lat.toFixed(2)}, ${lon.toFixed(2)}`);
    }
  };
  
  const determineLocalTimeAndWeather = (lat, lon) => {
    try {
      // Get current UTC time
      const now = new Date();
      
      // Calculate approximate time zone offset (in hours) based on longitude
      // Each 15 degrees of longitude represents roughly 1 hour time difference
      const timezoneOffsetHours = Math.round(lon / 15);
      
      // Get the local time by adding the offset to UTC time
      const localHour = (now.getUTCHours() + timezoneOffsetHours + 24) % 24;
      
      // Set time of day based on local hour
      setTimeOfDay(determineTimeOfDayPeriod(localHour));
      
      // Simulate fetching weather for the location
      simulateWeatherFetch();
    } catch (error) {
      console.error('Error determining local time:', error);
      // Fallback to browser's local time
      const hour = new Date().getHours();
      setTimeOfDay(determineTimeOfDayPeriod(hour));
      simulateWeatherFetch();
    } finally {
      setIsLoading(false);
    }
  };
  
  const determineTimeOfDayPeriod = (hour) => {
    // Dawn: 5-7 AM
    if (hour >= 5 && hour < 7) return 'dawn';
    // Day: 7 AM-3 PM
    if (hour >= 7 && hour < 15) return 'day';
    // Dusk: 3-6 PM
    if (hour >= 15 && hour < 18) return 'dusk';
    // Night: 8 PM-5 AM
    return 'night';
  };
  
  const handleLocationSearch = () => {
    if (searchQuery.trim()) {
      setLocation(searchQuery);
      simulateWeatherFetch();
    }
  };
  
  const simulateWeatherFetch = () => {
    // In a real app, you would make an API call to a weather service
    // For this demo, we'll randomly select a weather condition
    const weatherTypes = ['sunny', 'rainy', 'cloudy', 'stormy', 'snowy'];
    const randomWeather = weatherTypes[Math.floor(Math.random() * weatherTypes.length)];
    setCurrentWeather(randomWeather);
  };
  
  // Get the gradient based on time of day
  const currentGradient = timeGradients[timeOfDay] || timeGradients.default;
  
  // Get the weather icon based on current weather
  const weatherIcon = weatherIcons[currentWeather] || weatherIcons.default;
  
  // Get time of day icon
  const getTimeIcon = () => {
    switch(timeOfDay) {
      case 'dawn':
        return <Sunrise size={24} className="text-amber-500 mr-2" />;
      case 'day':
        return <Sun size={24} className="text-yellow-500 mr-2" />;
      case 'dusk':
        return <Sunset size={24} className="text-orange-500 mr-2" />;
      case 'night':
        return <Moon size={24} className="text-blue-200 mr-2" />;
      default:
        return <Sun size={24} className="text-yellow-500 mr-2" />;
    }
  };

  return (
    <div>
      <div className={`py-15 lg:pt-30 transition-all duration-1000 relative ${currentGradient}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=''>
          {!isLoading && (
              <div className="text-xl text-white mx-auto flex items-center justify-end">
                <div className="flex items-center mr-4">
                  {getTimeIcon()}
                  <span>{timeOfDay.charAt(0).toUpperCase() + timeOfDay.slice(1)} in {location}</span>
                </div>
                <div className="flex items-center hidden">
                  <div className="mr-2 scale-75">
                    {weatherIcons[currentWeather] ? React.cloneElement(weatherIcons[currentWeather], { size: 24 }) : null}
                  </div>
                  <span>{currentWeather.charAt(0).toUpperCase() + currentWeather.slice(1)}</span>
                </div>
              </div>
            )}
          </div>
          
          {/* Weather Icon for Current Condition */}
          <div className="absolute top-20 hidden">
            {weatherIcon}
          </div>
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
                  placeholder="Enter location (e.g., Miami, FL)"
                />
              </div>
              <button 
                onClick={handleLocationSearch}
                className="relative inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md rounded-l-md lg:rounded-l-none text-white bg-green-700 hover:bg-green-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                Update Weather
              </button>
            </div>
            <button 
              onClick={getUserLocation}
              className="flex items-center justify-center mt-3 mx-auto text-white hover:underline">
              <Locate className="h-4 w-4 mr-1" /> Use my current location
            </button>
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
            <a href="/planting-calendar" className="inline-flex items-center text-white font-medium hover:underline">
              Explore the full planting calendar
              <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherSection;