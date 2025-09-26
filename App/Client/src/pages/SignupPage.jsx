import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShield } from "react-icons/md";
import { CiAt } from "react-icons/ci";
import { FaLock } from "react-icons/fa";

// --- You can reuse the SVG Icons from LoginPage.js or import them ---

const LogoIcon = () => (
  <svg
    className="w-12 h-12 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      d="M12 2.05c-1.2 0-2.4.2-3.5.6-1.1.4-2.2.9-3.1 1.6-1 .7-1.8 1.6-2.5 2.5-.7.9-1.2 2-1.6 3.1-.4 1.1-.6 2.3-.6 3.5s.2 2.4.6 3.5c.4 1.1.9 2.2 1.6 3.1.7 1 1.6 1.8 2.5 2.5.9.7 2 .9 3.1 1.6 1.1.4 2.3.6 3.5.6s2.4-.2 3.5-.6c1.1-.4 2.2-.9 3.1-1.6 1-.7 1.8-1.6 2.5-2.5.7-.9 1.2-2 1.6-3.1.4-1.1.6-2.3.6-3.5s-.2-2.4-.6-3.5c-.4-1.1-.9-2.2-1.6-3.1-.7-1-1.6-1.8-2.5-2.5-.9-.7-2-1.2-3.1-1.6C14.4 2.25 13.2 2.05 12 2.05z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.5 12.5l2 2 4-4"
    />
  </svg>
);

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-gray-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const EmailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-gray-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
    />
  </svg>
);

const PasswordIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-gray-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    />
  </svg>
);

const SpinnerIcon = () => (
  <svg
    className="animate-spin h-5 w-5 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    // Simulate a network request
    setTimeout(() => {
      setIsLoading(false);
      alert("Account created successfully!");
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900 text-gray-300">
      {/* Background Gradient Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full filter blur-3xl opacity-50 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 w-full max-w-md p-8 space-y-6 bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl shadow-xl">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <MdOutlineShield className="size-14 font-bold" />
          </div>
          <h1 className="text-3xl font-bold text-white">Create an Account</h1>
          <p className="text-gray-400">Join TruthLens AI today</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Full Name Input */}
          <div className="relative">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaRegUser />
              </span>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full pl-10 pr-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition duration-300"
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="relative">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <CiAt />
              </span>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                className="w-full pl-10 pr-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition duration-300"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="relative">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaLock />
              </span>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                required
                className="w-full pl-10 pr-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition duration-300"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center items-center mt-4 py-3 px-4 text-white font-semibold bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg shadow-md hover:shadow-lg hover:shadow-purple-500/50 transition duration-300 transform hover:scale-105 disabled:opacity-75 disabled:cursor-not-allowed"
            >
              {isLoading ? <SpinnerIcon /> : "Create Account"}
            </button>
          </div>
        </form>

        <p className="text-center text-sm text-gray-400">
          Already have an account?{" "}
          <a href="#" className="font-medium text-purple-400 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUpPage;
