import React, { useState } from 'react';

const ToggleText = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleText = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center w-80">
        <h1 className="text-2xl font-bold text-blue-700 mb-6">Toggle Message</h1>

        <button
          onClick={toggleText}
          className="bg-blue-600 hover:bg-blue-700 transition-all text-white font-medium py-2 px-6 rounded-lg shadow-md"
        >
          {isVisible ? 'Hide Text' : 'Show Text'}
        </button>

        {isVisible && (
          <p className="mt-6 text-xl text-green-700 font-semibold transition-all duration-500 ease-in-out">
            👋 Hello World!
          </p>
        )}
      </div>
    </div>
  );
};

export default ToggleText;
