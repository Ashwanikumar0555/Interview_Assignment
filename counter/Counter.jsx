import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 gap-4">
      <h1 className="text-4xl font-bold text-blue-700">Counter App</h1>
      <div className="text-5xl font-semibold text-gray-800">{count}</div>
      <div className="flex gap-4">
        <button
          onClick={decrement}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl"
        >
          - Decrement
        </button>
        <button
          onClick={reset}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-xl"
        >
          Reset
        </button>
        <button
          onClick={increment}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl"
        >
          + Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
