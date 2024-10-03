import React, { useState } from "react";
import Modal from "./Modal.tsx";

interface ProjectModalProps {
  images: string[];
  show: boolean;
  onClose: () => void;
}

// ProjectModal 컴포넌트
const ProjectModal: React.FC<ProjectModalProps> = ({
  images,
  show,
  onClose,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // 모달 내부 콘텐츠 정의
  const content = (
    <div>
      <div className="text-sm text-center font-medium mb-4">
        기간: 5.24 - 6.12
      </div>
      {/* 제목을 가운데 정렬 */}
      <div className="flex justify-center items-center mb-4">
        <div className="text-sm font-bold text-center">임시 제목</div>
      </div>
      <div className="text-sm italic mb-4">javascript 스택</div>

      {/* 이미지 스와이프 영역 */}
      <div className="w-full h-40 bg-white rounded-md flex items-center justify-center border relative mb-4">
        <button
          className="absolute left-2 bg-gray-300 px-2 py-1 rounded-full"
          onClick={handlePrevImage}
        >
          ◀
        </button>
        <img
          src={images[currentImageIndex]}
          alt="Modal content"
          className="w-full h-full object-cover rounded-md"
        />
        <button
          className="absolute right-2 bg-gray-300 px-2 py-1 rounded-full"
          onClick={handleNextImage}
        >
          ▶
        </button>
      </div>

      {/* 기능, 상세기능, 후기 섹션 */}
      <div className="flex flex-col gap-4">
        <div>
          <div className="font-bold">기능</div>
          <div className="text-sm mt-2">
            기능 설명: 게시글 작성 및 수정 기능 포함
          </div>
        </div>

        <div>
          <div className="font-bold">상세기능</div>
          <div className="text-sm mt-2">
            상세기능 설명: 삭제 및 조회 기능 포함
          </div>
        </div>

        <div>
          <div className="font-bold">후기</div>
          <div className="text-sm mt-2">
            후기: 서버 사이드 렌더링 중요성 깨달음
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal show={show} close={onClose} content={content} /> // Modal 컴포넌트 사용
  );
};

export default ProjectModal;
