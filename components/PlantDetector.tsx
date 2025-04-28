'use client';

import { useEffect, useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import { Camera, Upload, Leaf, AlertCircle, Info } from 'lucide-react';
import TopNav from "../components/TopNav";

// Disease information database
const diseaseInfo = {
  "Healthy": {
    description: "Your plant appears healthy with no visible signs of disease.",
    treatment: [
      "Continue regular watering and fertilization schedule",
      "Monitor for any changes in appearance",
      "Maintain good air circulation around plants"
    ]
  },
  "Powdery Mildew": {
    description: "A fungal disease that appears as white powdery spots on leaves and stems.",
    treatment: [
      "Improve air circulation around plants",
      "Apply neem oil or fungicidal spray",
      "Remove and destroy heavily infected leaves",
      "Avoid overhead watering"
    ]
  },
  "Rust": {
    description: "A fungal disease recognized by orange-brown pustules primarily on leaf undersides.",
    treatment: [
      "Remove and destroy infected plant parts",
      "Apply fungicide specifically labeled for rust",
      "Avoid overhead watering",
      "Increase spacing between plants for better air circulation"
    ]
  },
  "Leaf Spot": {
    description: "Various fungal diseases causing spots on leaves that may be brown, black, or tan with defined margins.",
    treatment: [
      "Remove and dispose of infected leaves",
      "Apply appropriate fungicide",
      "Avoid wetting foliage when watering",
      "Ensure adequate plant spacing"
    ]
  },
  "Early Blight": {
    description: "A fungal disease causing dark, concentric rings on lower/older leaves first.",
    treatment: [
      "Remove infected leaves immediately",
      "Apply copper-based fungicide",
      "Mulch around plants to prevent soil splashing",
      "Rotate crops in future seasons"
    ]
  },
  "Late Blight": {
    description: "A serious fungal disease causing dark water-soaked spots on leaves and fruits.",
    treatment: [
      "Remove infected plants entirely and destroy (do not compost)",
      "Apply preventative fungicide before infection",
      "Increase plant spacing for better airflow",
      "Avoid overhead irrigation"
    ]
  },
  "Bacterial Infection": {
    description: "Bacterial diseases often present as water-soaked lesions, spots with yellow halos, or wilting.",
    treatment: [
      "Remove infected plants to prevent spread",
      "Apply copper-based bactericide",
      "Disinfect gardening tools after use",
      "Avoid working with plants when wet"
    ]
  },
  "Viral Disease": {
    description: "Viral infections often cause mottling, distortion, or unusual patterns on leaves.",
    treatment: [
      "Remove and destroy infected plants (viruses cannot be cured)",
      "Control insect vectors like aphids",
      "Disinfect tools between plants",
      "Plant resistant varieties in the future"
    ]
  },
  "Fungal Wilt": {
    description: "Causes wilting despite adequate soil moisture, often starting with lower leaves.",
    treatment: [
      "Remove and destroy infected plants",
      "Improve soil drainage",
      "Rotate crops for 3-4 years",
      "Use disease-resistant varieties in the future"
    ]
  },
  "Downy Mildew": {
    description: "Appears as yellow patches on leaf tops with fuzzy gray-purple growth underneath.",
    treatment: [
      "Improve air circulation around plants",
      "Apply fungicide labeled for downy mildew",
      "Water at soil level early in the day",
      "Remove infected plant material"
    ]
  },
  "Gray Mold": {
    description: "Also known as Botrytis, causes fuzzy gray growth on affected areas.",
    treatment: [
      "Remove affected plant parts",
      "Reduce humidity around plants",
      "Apply appropriate fungicide",
      "Dispose of fallen debris regularly"
    ]
  },
  "Nutrient Deficiency": {
    description: "Various patterns of yellowing, stunting, or discoloration based on the specific deficiency.",
    treatment: [
      "Test soil pH and nutrient levels",
      "Apply appropriate fertilizer based on deficiency",
      "Consider foliar feeding for quick correction",
      "Adjust soil pH if necessary for nutrient availability"
    ]
  }
};

export default function PlantDetector() {
  const [activeTab, setActiveTab] = useState('diagnose');
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [model, setModel] = useState<tf.LayersModel | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [confidence, setConfidence] = useState<number | null>(null);
  const [diseaseDetails, setDiseaseDetails] = useState<any>(null);

  const [showCamera, setShowCamera] = useState(false);
  const webcamRef = useRef<Webcam>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  useEffect(() => {
    const loadModel = async () => {
      const loadedModel = await tf.loadLayersModel("/model/model.json");
      setModel(loadedModel);
      console.log("✅ Model loaded");
    };
    loadModel();
  }, []);

  const analyzeImage = async (imageSrc: string) => {
    if (!model) return;

    const img = new Image();
    img.src = imageSrc;
    img.onload = async () => {
      const tensor = tf.browser
        .fromPixels(img)
        .resizeNearestNeighbor([224, 224])
        .toFloat()
        .div(tf.scalar(255.0))
        .expandDims();

      const predictionTensor = model.predict(tensor) as tf.Tensor;
      const predictionArray = await predictionTensor.data();
      
      // For multi-class classification
      const classLabels = [
        "Healthy", 
        "Powdery Mildew", 
        "Rust", 
        "Leaf Spot", 
        "Early Blight", 
        "Late Blight",
        "Bacterial Infection", 
        "Viral Disease", 
        "Fungal Wilt", 
        "Downy Mildew", 
        "Gray Mold", 
        "Nutrient Deficiency"
      ];
      
      // Find the class with highest probability
      const maxIndex = predictionArray.indexOf(Math.max(...predictionArray));
      const predictedClass = classLabels[maxIndex];
      
      // Add appropriate emoji based on condition
      const emoji = predictedClass === "Healthy" ? "🌿" : "🥀";
      setPrediction(`${predictedClass} ${emoji}`);
      setConfidence(predictionArray[maxIndex] * 100);
      setDiseaseDetails(diseaseInfo[predictedClass]);
      setAnalysisComplete(true);
    };
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const imageDataUrl = reader.result as string;
      setCapturedImage(imageDataUrl);
      analyzeImage(imageDataUrl);
    };
    reader.readAsDataURL(file);
  };

  const handleWebcamCapture = () => {
    const screenshot = webcamRef.current?.getScreenshot();
    if (!screenshot) return;

    setCapturedImage(screenshot);
    analyzeImage(screenshot);
    setShowCamera(false); // hide camera after capture
  };

  const resetAnalysis = () => {
    setCapturedImage(null);
    setPrediction(null);
    setConfidence(null);
    setDiseaseDetails(null);
    setAnalysisComplete(false);
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <TopNav />

      <main className="flex-1 p-4 md:p-6 overflow-auto">
        {!analysisComplete ? (
          <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-center text-green-700 mb-6">Detect Plant Problems Instantly</h2>

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

            {showCamera ? (
              <div className="flex flex-col items-center space-y-6">
                <Webcam
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  className="rounded-lg w-full max-w-md"
                  videoConstraints={{ facingMode: "environment" }}
                />
                <div className="flex gap-4">
                  <button 
                    onClick={handleWebcamCapture}
                    className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-sm hover:bg-green-700">
                    Capture
                  </button>
                  <button 
                    onClick={() => setShowCamera(false)}
                    className="text-gray-600 hover:text-gray-800">
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center space-y-8">
                <div className="w-full max-w-2xl border-2 border-dashed border-green-300 rounded-xl p-8 flex flex-col items-center bg-green-50">
                  <div className="flex flex-col items-center text-center">
                    <Leaf className="text-green-500 mb-4" size={48} />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Upload or Take a Photo</h3>
                    <p className="text-gray-600 mb-6">Take a clear photo of the affected plant part for best results</p>
                  </div>

                  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full justify-center">
                    <label className="flex items-center justify-center bg-white border border-green-300 text-green-700 px-6 py-3 rounded-lg font-medium text-lg shadow-sm hover:bg-green-50 cursor-pointer">
                      <Upload className="mr-2" size={20} />
                      Upload Photo
                      <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                    </label>

                    <button 
                      onClick={() => setShowCamera(true)}
                      className="flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-medium text-lg shadow-sm hover:bg-green-700">
                      <Camera className="mr-2" size={20} />
                      Take Photo
                    </button>
                  </div>
                </div>
              </div>
            )}
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
              <div className="w-full md:w-2/5">
                <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center overflow-hidden">
                  {capturedImage ? (
                    <img src={capturedImage} alt="Plant sample" className="rounded-lg object-cover w-full h-full" />
                  ) : (
                    <span>No image</span>
                  )}
                </div>
              </div>

              <div className="w-full md:w-3/5">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <AlertCircle className={`${prediction?.includes('Healthy') ? 'text-green-600' : 'text-amber-600'} mr-2`} size={24} />
                    <h3 className="font-bold text-xl text-gray-800">Detected: {prediction}</h3>
                  </div>
                  
                  {confidence !== null && (
                    <div className="mb-4">
                      <p className="text-gray-700 mb-2">Confidence: {confidence.toFixed(1)}%</p>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className={`h-2.5 rounded-full ${confidence > 80 ? 'bg-green-600' : confidence > 50 ? 'bg-yellow-500' : 'bg-red-500'}`} 
                          style={{ width: `${confidence}%` }}>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {diseaseDetails && (
                    <div className="mt-6 pt-6 border-t border-green-200">
                      <div className="flex items-center mb-3">
                        <Info className="text-blue-600 mr-2" size={20} />
                        <h4 className="font-semibold text-lg text-gray-800">About this condition</h4>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{diseaseDetails.description}</p>
                      
                      <h5 className="font-medium text-gray-800 mb-2">Recommended treatment:</h5>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        {diseaseDetails.treatment.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                      
                      {!prediction?.includes('Healthy') && (
                        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
                          <p className="text-amber-800 text-sm">
                            <strong>Important:</strong> This is an AI-based diagnosis and should be confirmed with a professional plant pathologist for serious cases.
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}