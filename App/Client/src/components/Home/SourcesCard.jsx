import React from "react";

const SourcesCard = ({ url, content }) => {
  return (
    <div className="w-full bg-gray-800/50 backdrop-blur-sm text-white border border-purple-500/30 rounded-2xl shadow-lg p-5 flex flex-col gap-3">
      <h2 className="text-lg font-bold text-purple-400 truncate">{url}</h2>
      <p className="text-gray-300 leading-relaxed text-sm">{content}</p>
    </div>
  );
};

export default SourcesCard;
