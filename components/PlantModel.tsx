// components/PlantModel.tsx
"use client";

import { useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';

export default function PlantModel() {
  const [model, setModel] = useState<tf.LayersModel | null>(null);

  useEffect(() => {
    const loadModel = async () => {
      try {
        const loadedModel = await tf.loadLayersModel('/model/model.json');
        setModel(loadedModel);
        console.log('Model loaded!', loadedModel);
        console.log('Model shape',loadedModel.inputs[0].shape);  // e.g., [null, 224, 224, 3]
      } catch (err) {
        console.error('Error loading model:', err);
      }
    };

    loadModel();
  }, []);



  return (
    <div className=''>
      <h2>🌿 Plant Model</h2>
      {model ? <p>✅ Model loaded successfully!</p> : <p>⏳ Loading model...</p>}
    </div>
  );
}
