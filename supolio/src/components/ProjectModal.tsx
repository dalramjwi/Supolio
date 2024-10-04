import React, { useState } from "react";
import Modal from "./Modal.tsx";
import { stackColors } from "../data/stackCss.ts";

// 프로젝트의 구조에 맞는 타입 정의
interface Project {
  title: string;
  period: string;
  stack?: string[];
  data: string[];
  content: string;
  details?: string;
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
    <div className="max-h-full overflow-y-auto">
      <div className="text-base text-center font-medium mb-2">
        {project.period}
      </div>
      {/* 제목을 가운데 정렬 */}
      <div className="flex justify-center items-center mb-2">
        <div className="text-3xl font-bold text-center">{project.title}</div>
      </div>

      {/* 스택 부분: 각 스택에 해당하는 색상을 배경으로 설정 */}
      {project.stack && (
        <div className="flex justify-center gap-2 flex-wrap mb-4">
          {project.stack.map((tech) => (
            <div
              key={tech}
              className="text-black px-2 py-1 rounded-md text-base"
              style={{ backgroundColor: stackColors[tech] || "#333" }}
            >
              {tech}
            </div>
          ))}
        </div>
      )}

      {/* 기능 섹션 */}
      <div>
        <div className="font-bold">기능</div>
        <div className="text-sm mt-2">{project.content}</div>
      </div>

      {/* 이미지 스와이프 영역 */}
      {project.data && project.data.length > 0 && (
        <div className="w-full h-[50vh] bg-white rounded-md flex items-center justify-center border relative mb-4">
          <button
            className="absolute left-2 bg-gray-300 px-2 py-1 rounded-full"
            onClick={handlePrevImage}
          >
            ◀
          </button>
          <img
            src={project.data[currentImageIndex]}
            alt="Project content"
            className="w-full h-full object-contain rounded-md" // object-contain 사용하여 이미지 비율 유지
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
        {project.details && (
          <div>
            <div className="font-bold">상세기능</div>
            <div className="text-sm mt-2">{project.details}</div>
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

  return (
    <Modal
      show={show}
      close={onClose}
      content={
        <div className="w-[80vw] h-[80vh] min-w-[80vw] max-w-[80vw] min-h-[80vh] max-h-[80vh] overflow-y-auto">
          {content}
        </div>
      }
    />
  );
};

export default ProjectModal;
