import React, { useEffect, useState } from "react";
import { MdOutlineShield } from "react-icons/md";
import { CiAt, CiEdit } from "react-icons/ci";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/features/LoginSlice";

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

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { token, isAuthenticated } = useSelector((state) => state.login);

  const dispatch = useDispatch();

  const info = useSelector((state) => state.login);
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUser({ email, password }));
    console.log(email, password);
    navigate("/home");
  };
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900 text-gray-300">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full filter blur-3xl opacity-50 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 w-full max-w-md p-8 space-y-8 bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl shadow-xl">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <MdOutlineShield className="size-14 font-bold" />
          </div>
          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
          <p className="text-gray-400">Sign in to TruthLens AI Dashboard</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <label className="text-sm font-medium text-gray-400">Email</label>
            <div className="relative mt-2">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <CiAt className=" size-5 font-bold" />
              </span>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="you@example.com"
                required
                autoFocus
                className="w-full pl-10 pr-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition duration-300"
              />
            </div>
          </div>

          <div className="relative">
            <label className="text-sm font-medium text-gray-400">
              Password
            </label>
            <div className="relative mt-2">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaLock className=" font-bold" />
              </span>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="enter password"
                required
                className="w-full pl-10 pr-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition duration-300"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center items-center py-3 px-4 text-white font-semibold bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg shadow-md hover:shadow-lg hover:shadow-purple-500/50 transition duration-300 transform hover:scale-105 disabled:opacity-75 disabled:cursor-not-allowed"
            >
              {isLoading ? <SpinnerIcon /> : "Sign In"}
            </button>
          </div>
        </form>

        <p className="text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="font-medium text-purple-400 hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
