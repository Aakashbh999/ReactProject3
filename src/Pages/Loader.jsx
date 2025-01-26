import React from "react";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black/50 flex items-center justify-center z-50">
      <div className="loader animate-spin rounded-full border-t-4 border-b-4 border-gray-800 h-16 w-16"></div>
    </div>
  );
};

export default Loader;
