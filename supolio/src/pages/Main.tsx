import React from "react";

const Main: React.FC = () => {
  return (
    <div className="flex flex-col min-h-full bg-gray-100 p-6">
      <div className="flex flex-col justify-center items-center flex-grow text-center bg-white rounded-lg shadow-lg p-6 border border-gray-300">
        <h1 className="text-6xl font-extrabold text-gray-800 mb-8">김수현</h1>
        <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-2">About Me</h2>

        <p className="text-xl text-gray-600 mb-4 mt-3">
          인간이 서로 연결될 때 기술은 단순한 도구를 넘어 더욱 의미 있는 역할을
          하게 됩니다.
          <br />
          예를 들어, 기술은 사람들 간의 의사소통을 원활하게 하고 다양한 문화와
          배경을 가진 이들이 서로 이해하고 협력할 수 있는 플랫폼을 제공합니다.
        </p>
        <p className="text-xl text-gray-600 mb-0">
          저는 사람들 간의 관계를 기술로 이어주는 가교와 같은 개발자가 되고
          싶습니다.
          <br />
          기술을 통해 사람들의 경험을 풍부하게 하고 커뮤니티를 형성하며 서로의
          이해를 증진시키는 데 기여하고자 합니다.
        </p>
      </div>
    </div>
  );
};

export default Main;
