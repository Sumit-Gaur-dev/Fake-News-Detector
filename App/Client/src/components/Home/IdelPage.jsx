import React from "react";
import { FaRobot, FaLightbulb, FaEdit, FaQuestionCircle } from "react-icons/fa";

const IdelPage = () => {
  const examplePrompts = [
    "Instant Analysis",
    "Source Verification",
    "Bias Detection",
    "Summarised",
  ];

  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-6 text-gray-100 sm:p-8 bg-black rounded-lg shadow-xl">
      <div className="mb-6 flex flex-col items-center">
        <FaRobot className="text-6xl text-black" />
        <h1 className="text-4xl font-extrabold tracking-tight text-purple-800">
          Hello! I'm your AI Assistant
        </h1>
        <p className="mt-2 text-lg text-gray-400">How can I help you today?</p>
      </div>

      <div className="mb-10 max-w-2xl text-center">
        <p className="text-gray-300 leading-relaxed">
          Welcome! I am here to help you detect fake news and provide you with
          reliable information.
        </p>
      </div>

      <div className="w-full max-w-3xl">
        <h2 className="text-center text-2xl font-semibold mb-6 text-blue-300">
          <FaLightbulb className="inline-block mr-2 text-yellow-400" />
          Start a Conversation
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
          {examplePrompts.map((prompt, index) => (
            <button
              key={index}
              onClick={() => onPromptSelect && onPromptSelect(prompt)}
              className="flex items-center justify-center rounded-xl bg-gray-800 p-4 text-center text-base font-medium text-gray-200 transition-all duration-200 ease-in-out hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 shadow-md"
            >
              {index % 2 === 0 ? (
                <FaEdit className="mr-2 text-purple-400" />
              ) : (
                <FaQuestionCircle className="mr-2 text-green-400" />
              )}
              {prompt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IdelPage;
