import React, { useState } from "react";
import Modal from "./Modal.tsx";
import { stackColors } from "../data/stackCss.ts";

// 프로젝트의 구조에 맞는 타입 정의
interface Project {
  title: string;
  period: string;
  stack?: string[];
  data: string[];
  imgnavigate?: { [key: number]: string };
  content: string;
  details?: string;
  review?: string;
  githubLink?: string[]; // 여러 개의 GitHub 링크 처리
  notionLink?: string; // notion 링크 추가
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
  const [showGithubModal, setShowGithubModal] = useState(false); // GitHub 모달을 제어하는 상태

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

  const handleGithubClick = () => {
    if (project.githubLink && project.githubLink.length === 1) {
      // GitHub 링크가 하나일 경우 바로 이동
      window.open(project.githubLink[0], "_blank");
    } else if (project.githubLink && project.githubLink.length > 1) {
      // GitHub 링크가 여러 개일 경우 모달을 보여줌
      setShowGithubModal(true);
    }
  };

  const handleGithubVersionClick = (link: string) => {
    window.open(link, "_blank");
    setShowGithubModal(false); // 모달 닫기
  };

  // 모달 내부 콘텐츠 정의
  const content = (
    <div className="max-h-full overflow-y-auto">
      <div className="text-base text-center font-medium mb-2">
        {project.period}
      </div>
      {/* 제목을 가운데 정렬 + 링크를 우측에 배치 */}
      <div className="flex justify-center items-center mb-2 relative">
        <div className="text-3xl font-bold text-center">{project.title}</div>
        {/* GitHub 및 Notion 링크를 우측 상단에 배치 */}
        <div className="absolute right-0 top-0 flex gap-2">
          {project.githubLink && (
            <button
              onClick={handleGithubClick}
              className="bg-gray-400 text-white px-3 py-1 rounded-full"
            >
              GitHub
            </button>
          )}
          {project.notionLink && (
            <a
              href={project.notionLink} // Notion 링크로 이동
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-400 text-white px-3 py-1 rounded-full"
            >
              Notion
            </a>
          )}
        </div>
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

      {/* 이미지 설명 영역 */}
      {project.imgnavigate && project.imgnavigate[currentImageIndex] && (
        <div className="text-sm text-center italic mb-4">
          {project.imgnavigate[currentImageIndex]}
        </div>
      )}

      {/* 상세기능, 후기 섹션 */}
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
    <>
      <Modal
        show={show}
        close={onClose}
        content={
          <div className="w-[80vw] h-[80vh] min-w-[80vw] max-w-[80vw] min-h-[80vh] max-h-[80vh] overflow-y-auto">
            {content}
          </div>
        }
      />
      {/* GitHub 버전 선택 모달 */}
      <Modal
        show={showGithubModal}
        close={() => setShowGithubModal(false)}
        content={
          <div className="flex flex-col gap-2">
            {project.githubLink?.map((link, index) => (
              <button
                key={index}
                onClick={() => handleGithubVersionClick(link)}
                className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400"
              >
                버전 {index + 1}.0
              </button>
            ))}
          </div>
        }
      />
    </>
  );
};

export default ProjectModal;
