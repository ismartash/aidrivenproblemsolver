import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { FaCamera, FaSync } from 'react-icons/fa';

const Camera = ({ onCapture, onBack }) => {
  const webcamRef = useRef(null);
  const [facingMode, setFacingMode] = useState('user');

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    onCapture(imageSrc);
  };

  const toggleCamera = () => {
    setFacingMode(prevMode => prevMode === 'user' ? 'environment' : 'user');
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Webcam
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={{ facingMode }}
        className="rounded-lg shadow-lg"
      />
      <div className="flex gap-4">
        <button
          onClick={capture}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <FaCamera /> Capture
        </button>
        <button
          onClick={toggleCamera}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <FaSync /> Switch Camera
        </button>
        <button
          onClick={onBack}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Camera;