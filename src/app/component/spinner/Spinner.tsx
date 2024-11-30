import React from 'react';

const Spinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-10 h-10">
        {/* Spinner Circle */}
        <div className="absolute w-full h-full border-4 border-gray-300 rounded-full animate-spin border-t-blue-500"></div>
        {/* Center Text */}
        <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-gray-500">
          Loading
        </div>
      </div>
    </div>
  );
};

export default Spinner;
