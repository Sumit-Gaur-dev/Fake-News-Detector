import { useState } from "react";
import { MdOutlineShield } from "react-icons/md";
const HomeNB = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const userInfo = {
    userName: "Jason",
    userEmail: "me@gamil.com",
    userPhoto:
      "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
  };

  const handleSelect = (index) => {
    setSelectedIndex(index);
    console.log("Selected:", data[index].querry);
  };
  return (
    <div className="min-w-80 min-h-11/12 top-0 fixed mt-5 left-2 bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl flex flex-col items-center justify-between">
      <div className="flex justify-center items-center gap-1 mt-[30px]">
        <MdOutlineShield className="text-purple-400 size-16" />
        <div className="flex flex-col">
          <span className="text-white text-2xl font-semibold">TruthLens</span>
          <span className="text-gray-400 font-mono">AI Powered</span>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center">
        <button className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg text-white p-[10px] m-2 w-4/5 text-xl font-semibold shadow-md hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300">
          + New Detection
        </button>
      </div>

      <div className="w-[80%] border-t border-gray-700 h-20 flex items-center py-10">
        <img
          className="w-15 h-15 rounded-full object-cover"
          src={userInfo.userPhoto}
        />
        <div className="flex-col flex mx-2">
          <span className="font-bold text-xl text-gray-200">
            {userInfo.userName}
          </span>
          <span className="font-light text-gray-400">{userInfo.userEmail}</span>
        </div>
      </div>
    </div>
  );
};
export default HomeNB;
