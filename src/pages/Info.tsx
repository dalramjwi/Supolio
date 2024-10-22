import React, { Profiler } from "react";
import data from "../data/data.json";
import InfoList from "../components/organisms/info/InfoList.tsx";
import InfoListNot from "../components/organisms/info/InfoListNot.tsx";

const Info: React.FC = () => {
  const infoData = data.info;

  // Profiler 콜백 함수
  function onRenderCallback(
    id: string,
    phase: "mount" | "update" | "nested-update",
    actualDuration: number,
    baseDuration: number,
    startTime: number,
    commitTime: number
  ) {
    console.log(`${id} [${phase}] - 실제 걸린 시간: ${actualDuration}ms`);
  }

  // 두 컴포넌트에 대해 Profiler 적용
  return (
    <div className="flex flex-col min-h-full bg-gray-100 p-6">
      <div className="flex flex-col justify-center items-center flex-grow text-center bg-white rounded-lg shadow-lg p-10 border border-gray-300">
        <Profiler id="InfoList" onRender={onRenderCallback}>
          <h1>메모이제이션 적용된 InfoList</h1>
          <InfoList infoData={infoData} />
        </Profiler>

        <Profiler id="InfoListNot" onRender={onRenderCallback}>
          <h1>메모이제이션 없는 InfoListNot</h1>
          <InfoListNot infoData={infoData} />
        </Profiler>
      </div>
    </div>
  );
};

export default Info;
