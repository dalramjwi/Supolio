import React, { useState } from "react";
import Modal from "./Modal.tsx";

interface StudyModalProps {
  show: boolean;
  close: () => void;
}

const StudyModal: React.FC<StudyModalProps> = ({ show, close }) => {
  const contentData = [
    {
      title: "일일 작업 목록 관리",
      description: `매일의 작업 및 학습 목표를 명확히 하게 위해, 일일 작업 목록(Todo List)을 작성합니다. 이 과정은 다음과 같이 이루어집니다.
      1. 작업 및 학습할 내용 리스트 업: 매일 그날 수행해야 할 작업과 학습해야 할 내용을 정리합니다.
      2. 우선순위 조정: 각 작업의 중요성과 시급성을 평가해 우선순위를 조정합니다.
      3. 진행 상황 모니터링: 하루가 끝난 후 작업 일지를 작성할 때 완료한 작업을 점검하고 끝내지 못한 작업은 이월합니다.
      이러한 일일 작업 목록 관리 방법은 제 학습과 업무의 효율성을 극대화하는 데 큰 도움이 되었으며, 체계적인 접근 방식을 통해 목표 달성에 기여하고 있습니다.`,
      imageUrl: "path/to/your/image1.jpg", // 이미지 경로를 지정하세요.
    },
    {
      title: "일일 작업 일지 / 작업 기록",
      description: `학습 내용을 요약하고, 느낀 점을 기록해 자기 발전을 위했습니다. 각 작업을 어떤 이유에서 어떻게 했는지, 문제가 있었다면 어떻게 해결했는지 간략히 기록해 하루의 성과와 개선할 점을 명확히 했습니다.
      *예시*
      **작업 과정에서 발생한 궁금증 해결 및 기록**: 작업 중 발생한 문제를 구체적으로 기록하고, 이를 해결한 과정을 정리해 유사한 문제 발생 시 참고하거나 동료에게 공유하며 문제를 해결하는 방안으로 활용했습니다.
      *예시*
      **개념 학습 정리**: 개념을 학습한 후, 이를 체계적으로 정리하는 과정을 통해 이해도를 높이고 기억을 강화했습니다.`,
      imageUrl: "path/to/your/image2.jpg", // 이미지 경로를 지정하세요.
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!show) return null;

  const handleSwipe = (direction: string) => {
    if (direction === "next" && currentIndex < contentData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (direction === "prev" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const content = (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">
        {contentData[currentIndex].title}
      </h2>
      <img
        src={contentData[currentIndex].imageUrl}
        alt={contentData[currentIndex].title}
        className="w-full h-40 object-cover mb-2" // 이미지 자리에 임시 이미지 경로 사용
      />
      <p className="text-gray-700 whitespace-pre-line mb-4">
        {contentData[currentIndex].description}
      </p>
      <div className="flex justify-between">
        <button
          onClick={() => handleSwipe("prev")}
          disabled={currentIndex === 0}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          ◀
        </button>
        <button
          onClick={() => handleSwipe("next")}
          disabled={currentIndex === contentData.length - 1}
          className="bg-black text-white px-4 py-2 rounded disabled:opacity-50"
        >
          ▶
        </button>
      </div>
    </div>
  );

  return (
    <Modal
      show={show}
      close={close}
      content={
        <div className="w-[80vw] h-[80vh] min-w-[80vw] max-w-[80vw] min-h-[80vh] max-h-[80vh] overflow-y-auto">
          {content}
        </div>
      }
    />
  );
};

export default StudyModal;
