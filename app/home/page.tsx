'use client';

import React, { useState } from 'react';
import { Camera, Upload, Leaf, AlertCircle, Check, Info } from 'lucide-react';
import TopNav from "../../components/TopNav"

export default function PlantGuardApp() {
  const [activeTab, setActiveTab] = useState('diagnose');
  const [analysisComplete, setAnalysisComplete] = useState(false);
  
  const handleAnalysis = () => {
    setAnalysisComplete(true);
  };
  
  const resetAnalysis = () => {
    setAnalysisComplete(false);
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <TopNav />

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 overflow-auto">
        {!analysisComplete ? (
          <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-center text-green-700 mb-6">Detect Plant Problems Instantly</h2>
            
            {/* Tabs */}
            <div className="flex justify-center mb-8">
              <div className="flex p-1 bg-gray-100 rounded-lg">
                <button 
                  className={`px-6 py-3 text-lg font-medium rounded-lg transition ${activeTab === 'diagnose' ? 'bg-white shadow-sm text-green-700' : 'text-gray-600'}`}
                  onClick={() => setActiveTab('diagnose')}>
                  Diagnose Plant
                </button>
                <button 
                  className={`px-6 py-3 text-lg font-medium rounded-lg transition ${activeTab === 'history' ? 'bg-white shadow-sm text-green-700' : 'text-gray-600'}`}
                  onClick={() => setActiveTab('history')}>
                  History
                </button>
              </div>
            </div>
            
            {/* Upload Section */}
            <div className="flex flex-col items-center space-y-8">
              <div className="w-full max-w-2xl border-2 border-dashed border-green-300 rounded-xl p-8 flex flex-col items-center bg-green-50">
                <div className="flex flex-col items-center text-center">
                  <Leaf className="text-green-500 mb-4" size={48} />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Upload or Take a Photo</h3>
                  <p className="text-gray-600 mb-6">Take a clear photo of the affected plant part for best results</p>
                </div>
                
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full justify-center">
                  <button className="flex items-center justify-center bg-white border border-green-300 text-green-700 px-6 py-3 rounded-lg font-medium text-lg shadow-sm hover:bg-green-50">
                    <Upload className="mr-2" size={20} />
                    Upload Photo
                  </button>
                  <button className="flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-medium text-lg shadow-sm hover:bg-green-700">
                    <Camera className="mr-2" size={20} />
                    Take Photo
                  </button>
                </div>
              </div>
              
              <button 
                onClick={handleAnalysis}
                className="bg-gradient-to-r from-teal-500 to-green-500 text-white px-8 py-4 rounded-lg font-bold text-xl shadow-md hover:shadow-lg w-full max-w-md">
                Analyze with AI
              </button>
            </div>
            
            {/* Features */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Camera className="text-blue-600 mr-2" size={20} />
                  <h3 className="font-semibold text-lg">Instant Analysis</h3>
                </div>
                <p className="text-gray-700">Get results in seconds with our advanced AI technology</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Leaf className="text-green-600 mr-2" size={20} />
                  <h3 className="font-semibold text-lg">Treatment Tips</h3>
                </div>
                <p className="text-gray-700">Receive customized care advice for your specific plant issue</p>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Info className="text-amber-600 mr-2" size={20} />
                  <h3 className="font-semibold text-lg">Plant Database</h3>
                </div>
                <p className="text-gray-700">Access information on 10,000+ plant species and conditions</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-green-700">Analysis Results</h2>
              <button 
                onClick={resetAnalysis}
                className="text-green-600 hover:text-green-800 font-medium">
                New Analysis
              </button>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              {/* Plant Image */}
              <div className="w-full md:w-2/5">
                <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
                  <img src="/api/placeholder/400/400" alt="Plant sample" className="rounded-lg" />
                </div>
              </div>
              
              {/* Analysis Results */}
              <div className="w-full md:w-3/5">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center mb-2">
                    <AlertCircle className="text-red-600 mr-2" size={20} />
                    <h3 className="font-bold text-lg text-red-700">Detected: Powdery Mildew</h3>
                  </div>
                  <p className="text-gray-800 mb-2">Confidence: 96%</p>
                  <p className="text-gray-700">A fungal disease that appears as a white powdery substance on leaf surfaces.</p>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <h3 className="font-bold text-lg text-blue-700 mb-2">Treatment Options:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
                      <p>Remove and dispose of heavily infected leaves</p>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
                      <p>Apply neem oil or fungicide specifically labeled for powdery mildew</p>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
                      <p>Improve air circulation around plants to reduce humidity</p>
                    </li>
                  </ul>
                </div>
                
                {/* Severity Gauge */}
                <div className="mb-6">
                  <h3 className="font-bold text-lg text-gray-700 mb-2">Severity Level:</h3>
                  <div className="h-4 bg-gray-200 rounded-full">
                    <div className="h-4 bg-gradient-to-r from-yellow-300 to-red-500 rounded-full w-3/4"></div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 mt-1">
                    <span>Mild</span>
                    <span>Moderate</span>
                    <span>Severe</span>
                  </div>
                </div>
                
                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-green-600 text-white px-4 py-3 rounded-lg font-medium text-lg shadow-sm hover:bg-green-700 flex-1 flex justify-center items-center">
                    Detailed Report
                  </button>
                  <button className="bg-blue-600 text-white px-4 py-3 rounded-lg font-medium text-lg shadow-sm hover:bg-blue-700 flex-1 flex justify-center items-center">
                    Find Products
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p className="text-lg">PlantGuard AI - Keeping your garden healthy with technology</p>
      </footer>
    </div>
  );
}