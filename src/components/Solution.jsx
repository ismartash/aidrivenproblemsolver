import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

const Solution = ({ steps, isCorrect }) => {
  return (
    <div className="mt-4 p-4 bg-white rounded-lg shadow">
      <h3 className="text-xl font-bold mb-4">Solution Analysis</h3>
      {steps.map((step, index) => (
        <div
          key={index}
          className={`flex items-start gap-2 mb-2 ${
            step.isCorrect ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {step.isCorrect ? (
            <FaCheck className="mt-1" />
          ) : (
            <FaTimes className="mt-1" />
          )}
          <div>
            <p className="font-medium">Step {index + 1}:</p>
            <p>{step.explanation}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Solution;