const ScoreCard = ({ score }) => {
  let msg;
  if (score < 20 && score > 0) {
    msg = "fetal";
  } else if (score > 21 && score < 40) {
    msg = "weak";
  }
  if (score > 41 && score < 60) {
    msg = "Average";
  }
  if (score > 61 && score < 80) {
    msg = "Strong";
  }
  if (score > 81 && score < 100) {
    msg = "True";
  }
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-800/50 backdrop-blur-sm mb-[10px] text-white p-6 border border-purple-500/50 rounded-2xl shadow-xl shadow-purple-500/40">
      <div className="text-center">
        <h1 className="text-6xl m-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
          {score}%
        </h1>
        <span className="px-6 py-2 m-1 bg-purple-500/20 text-purple-300 font-medium rounded-full">
          {msg}
        </span>
      </div>
    </div>
  );
};
export default ScoreCard;
