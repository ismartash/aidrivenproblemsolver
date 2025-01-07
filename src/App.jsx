import React, { useState } from 'react';
import Camera from './components/Camera';
import ImageUpload from './components/ImageUpload';
import Solution from './components/Solution';
import { analyzeMathProblem } from './services/geminiService';
import './App.css';

function App() {
  const [mode, setMode] = useState('select');
  const [image, setImage] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleImage = async (imageData) => {
    setImage(imageData);
    setLoading(true);
    setError(null);
    
    try {
      const result = await analyzeMathProblem(imageData);
      setAnalysis(result);
      setMode('result');
    } catch (error) {
      setError(error.message);
      setAnalysis(null);
    } finally {
      setLoading(false);
    }
  };

  const renderContent = () => {
    switch (mode) {
      case 'select':
        return (
          <div className="flex flex-col gap-4">
            <button
              onClick={() => setMode('camera')}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600 transition-colors"
            >
              Use Camera
            </button>
            <ImageUpload onUpload={handleImage} />
            {error && (
              <div className="text-red-500 bg-red-100 p-3 rounded-lg mt-4">
                {error}
              </div>
            )}
          </div>
        );
      case 'camera':
        return (
          <Camera
            onCapture={handleImage}
            onBack={() => {
              setMode('select');
              setError(null);
            }}
          />
        );
      case 'result':
        return (
          <div className="w-full max-w-2xl">
            {image && (
              <img
                src={image}
                alt="Captured math problem"
                className="mb-4 rounded-lg shadow max-w-full h-auto"
              />
            )}
            {loading ? (
              <div className="text-center p-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"></div>
                <p>Analyzing your math problem...</p>
              </div>
            ) : (
              <>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h2 className="text-xl font-bold mb-2">Analysis Result</h2>
                  <pre className="whitespace-pre-wrap text-gray-700">{analysis}</pre>
                </div>
                <button
                  onClick={() => {
                    setMode('select');
                    setError(null);
                    setImage(null);
                    setAnalysis(null);
                  }}
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Analyze Another Problem
                </button>
              </>
            )}
            {error && (
              <div className="text-red-500 bg-red-100 p-3 rounded-lg mt-4">
                {error}
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Math Problem Solver
        </h1>
        <div className="flex justify-center">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;