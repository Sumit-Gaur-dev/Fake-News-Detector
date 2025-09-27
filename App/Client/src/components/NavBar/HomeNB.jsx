import { MdOutlineShield, MdLogout } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { resetState } from "../../store/features/homeDataSlice";

const HomeNB = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNewDetection = () => {
    dispatch(resetState());
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="fixed top-0 left-2 mt-5 flex min-w-80 min-h-[96%] flex-col items-center rounded-2xl border border-purple-500/30 bg-gray-800/50 backdrop-blur-sm">
      <div className="mt-[30px] flex items-center justify-center gap-1">
        <MdOutlineShield className="size-16 text-purple-400" />
        <div className="flex flex-col">
          <span className="text-2xl font-semibold text-white">TruthLens</span>
          <span className="font-mono text-gray-400">AI Powered</span>
        </div>
      </div>

      <div className="flex w-full flex-grow flex-col items-center justify-center">
        <button
          onClick={handleNewDetection}
          className="m-2 w-4/5 transform rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 p-[10px] text-xl font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
        >
          + New Detection
        </button>
      </div>

      <button
        onClick={handleLogout}
        className="mb-5 flex w-4/5 items-center justify-center gap-2 transform rounded-lg bg-gray-700/50 p-[10px] text-lg font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-red-500/70 hover:shadow-lg hover:shadow-red-500/50"
      >
        <MdLogout className="size-5" />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default HomeNB;
