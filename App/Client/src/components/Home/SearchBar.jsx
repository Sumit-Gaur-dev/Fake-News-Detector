import { useState, useRef, useEffect } from "react";
import { FiSend } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/features/homeDataSlice";
export default function SearchBar() {
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const textareaRef = useRef(null);
  const dispatch = useDispatch();

  const messageSender = () => {
    setSent(true);
    if (message.length < 10) {
      alert("Too short prompt");
      setMessage("");
      return null;
    }
    dispatch(fetchData(message));
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // reset
      textarea.style.height = Math.min(textarea.scrollHeight, 160) + "px"; // max 160px (~8 lines)
    }
  }, [message]);

  return (
    <div className="fixed bottom-0 w-3/5 mx-[90px] rounded-2xl my-[50px] bg-gray-800/40 backdrop-blur-sm border border-purple-500/60 shadow-2xl shadow-purple-500/30 px-4 py-3 flex items-end">
      <textarea
        ref={textareaRef}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask a follow-up question..."
        // Added 'custom-scrollbar' class and increased right padding
        className="custom-scrollbar w-full pr-14 resize-none overflow-y-auto max-h-40 bg-slate-800/70 text-gray-200 rounded-xl p-3 text-base focus:outline-none focus:ring-2 focus:ring-purple-500 border border-transparent focus:border-transparent"
        rows={1}
      />

      {/* Send button */}
      <button
        onClick={messageSender}
        // Changed position from right-6 to right-8
        className={`${
          sent ? "cursor-none invisible" : "cursor-pointer"
        } absolute right-8 bottom-6 text-purple-400 hover:text-purple-300 hover:scale-110 transition-all duration-200`}
      >
        <FiSend size={24} />
      </button>
    </div>
  );
}
