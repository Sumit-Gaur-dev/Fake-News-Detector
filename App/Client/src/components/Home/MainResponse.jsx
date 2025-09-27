import GraphCard from "./GraphCard";
import IdelPage from "./IdelPage";
import ScoreCard from "./ScoreCard";
import SourcesCard from "./SourcesCard";
import Summarized from "./Summarized";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const MainRespionse = () => {
  const data = useSelector((state) => state.aiData);
  useEffect(() => {
    console.log("render");
  }, [data]);
  return (
    <>
      {data.status === "idle" ? (
        <IdelPage />
      ) : data.status === "loading" ? (
        <div className="flex items-center justify-center text-white w-full min-h-[500px]">
          Loading
        </div>
      ) : (
        <div className="h-11/12 w-full mx-[5px] mb-[100px] justify-center">
          <Summarized text={data.summary} />
          <div className="flex justify-center gap-6 min-h-[200px] h-1/3">
            <ScoreCard score={data.score} />
          </div>
          <div className="flex gap-10 w-full">
            {data.sources.map((item, indx) => (
              <SourcesCard key={indx} url={item.srcName} content={item.data} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MainRespionse;
