import React, { useState } from "react";
import Modal from "./Modal.tsx";

// 프로젝트의 구조에 맞는 타입 정의
interface ProjectDetails {
  version: string;
  description: string;
}

interface Project {
  title: string;
  period: string;
  stack: string[];
  data: string[];
  content: string;
  details?: ProjectDetails[];
  review?: string;
}

interface ProjectModalProps {
  project: Project;
  show: boolean;
  onClose: () => void;
}

// ProjectModal 컴포넌트
const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  show,
  onClose,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.data.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.data.length - 1 ? 0 : prevIndex + 1
    );
  };

  // 모달 내부 콘텐츠 정의
  const content = (
    <div>
      <div className="text-sm text-center font-medium mb-4">
        기간: {project.period}
      </div>
      {/* 제목을 가운데 정렬 */}
      <div className="flex justify-center items-center mb-4">
        <div className="text-sm font-bold text-center">{project.title}</div>
      </div>
      <div className="text-sm italic mb-4">{project.stack.join(", ")}</div>

      {/* 이미지 스와이프 영역 */}
      {project.data && project.data.length > 0 && (
        <div className="w-full h-40 bg-white rounded-md flex items-center justify-center border relative mb-4">
          <button
            className="absolute left-2 bg-gray-300 px-2 py-1 rounded-full"
            onClick={handlePrevImage}
          >
            ◀
          </button>
          <img
            src={project.data[currentImageIndex]}
            alt="Project content"
            className="w-full h-full object-cover rounded-md"
          />
          <button
            className="absolute right-2 bg-gray-300 px-2 py-1 rounded-full"
            onClick={handleNextImage}
          >
            ▶
          </button>
        </div>
      )}

      {/* 기능, 상세기능, 후기 섹션 */}
      <div className="flex flex-col gap-4">
        <div>
          <div className="font-bold">기능</div>
          <div className="text-sm mt-2">{project.content}</div>
        </div>

        {project.details && project.details.length > 0 && (
          <div>
            <div className="font-bold">상세기능</div>
            {project.details.map((detail, index) => (
              <div key={index} className="text-sm mt-2">
                {detail.version}: {detail.description}
              </div>
            ))}
          </div>
        )}

        {project.review && (
          <div>
            <div className="font-bold">후기</div>
            <div className="text-sm mt-2">{project.review}</div>
          </div>
        )}
      </div>
    </div>
  );

  return <Modal show={show} close={onClose} content={content} />;
};

export default ProjectModal;
