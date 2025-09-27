import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";
import { FaSearchLocation } from "react-icons/fa";
import { useNavigate } from "react-router";

const LoadingAnimation = () => {
  return (
    <div className="fixed inset-0 bg-[#0D1117] flex justify-center items-center z-50 animate-fadeOut">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5">
          TruthLens <span className="text-purple-400">AI</span>
        </h1>
      </div>
    </div>
  );
};

function LandingPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="bg-[#0D1117] text-gray-200 min-h-screen font-sans animate-fadeIn">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full filter blur-3xl opacity-50 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            TruthLens <span className="text-purple-400">AI</span>
          </div>
          <div className="hidden md:flex items-center space-x-8"></div>
          <div className="flex items-center space-x-4">
            <button
              className="text-white hover:text-gray-300 transition duration-300"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>
            <button
              className="bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 transition duration-300 transform hover:scale-105"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign Up
            </button>
          </div>
        </nav>

        <header className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
            Navigate the World of Information with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              Clarity
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            TruthLens AI provides instant fact-checking, concise summaries, and
            reliable source recommendations to combat misinformation. Make
            informed decisions, effortlessly.
          </p>
        </header>

        <section id="features" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Why Choose TruthLens AI?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 p-8 rounded-2xl text-center shadow-lg hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2">
                <div className="inline-block bg-purple-500/20 text-purple-400 p-4 rounded-full mb-4">
                  <FaCheckCircle size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Fake News Detector
                </h3>
                <p className="text-gray-400">
                  Our advanced AI cross-references claims against a vast
                  database of verified sources to provide a real-time factual
                  consistency score.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-blue-500/30 p-8 rounded-2xl text-center shadow-lg hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2">
                <div className="inline-block bg-blue-500/20 text-blue-400 p-4 rounded-full mb-4">
                  <IoMdDocument size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Intelligent Summarizer
                </h3>
                <p className="text-gray-400">
                  Can't read the full article? Get the key takeaways in seconds.
                  Our AI extracts the most critical information, saving you
                  time.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-green-500/30 p-8 rounded-2xl text-center shadow-lg hover:border-green-500 transition-all duration-300 transform hover:-translate-y-2">
                <div className="inline-block bg-green-500/20 text-green-400 p-4 rounded-full mb-4">
                  <FaSearchLocation size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Legit Source Recommendation
                </h3>
                <p className="text-gray-400">
                  Based on your query, we suggest highly reputable and unbiased
                  sources, helping you build a more informed perspective.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-gray-800 mt-20">
          <div className="container mx-auto px-6 py-8 text-center text-gray-500">
            <p>&copy; made with love ❤ bugbarner.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default LandingPage;
