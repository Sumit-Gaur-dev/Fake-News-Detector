import React from "react";

const Summarized = ({ text }) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm mb-[10px] text-white rounded-2xl shadow-xl p-6 w-full border border-purple-500/30 min-h-1/3 mx-auto">
      <h1 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2 text-gray-200">
        Analyzed Text Snippet
      </h1>
      <p className="text-gray-300 leading-relaxed text-justify">{text}</p>
    </div>
  );
};

export default Summarized;
