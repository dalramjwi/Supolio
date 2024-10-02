import React from "react";

const Main: React.FC = () => {
  return (
    <div className="flex flex-col min-h-full">
      <div className="flex flex-col justify-center items-center flex-grow text-center">
        <h1 className="text-5xl font-bold mb-6">김수현</h1>
        <p className="text-xl mb-6">
          인간이 서로 연결될 때, 기술은 단순한 도구를 넘어 의미 있는 역할을
          합니다.
        </p>
        <p className="text-xl mb-12">
          저는 그 중 하나의 축이 되어 사람들 간의 관계를 기술로 이어주는 가교와
          같은 개발자가 되고 싶습니다.
        </p>
        <span className="text-lg font-semibold">info</span>
      </div>
    </div>
  );
};

export default Main;
