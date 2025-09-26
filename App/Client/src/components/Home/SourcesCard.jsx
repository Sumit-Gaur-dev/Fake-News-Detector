import React from "react";

const SourcesCard = ({ url, content }) => {
  // Function to trim content to 50 words
  // const getTrimmedContent = (text, wordLimit = 50) => {
  //   const words = text.split(" "); // ✅ split by space into words
  //   if (words.length <= wordLimit) return text;
  //   return words.slice(0, wordLimit).join(" ") + " ...";
  // };

  return (
    <div className="w-full bg-gray-800/50 backdrop-blur-sm text-white border border-purple-500/30 rounded-2xl shadow-lg p-5 flex flex-col gap-3">
      <h2 className="text-lg font-bold text-purple-400 truncate">{url}</h2>
      <p className="text-gray-300 leading-relaxed text-sm">
        {/* {getTrimmedContent(content)} */}
        {content}
      </p>
    </div>
  );
};

export default SourcesCard;
