// src/pages/Project.tsx
import React, { useState } from "react";
import { ProjectInstance } from "../dataStructure/project/instance/projectInstance.ts";
import { stackColors } from "../dataStructure/stackCss.ts";
import { ProjectDataStructure } from "../dataStructure/project/class/projectDataStructure.ts";
import Modal from "../components/molecules/Modal.tsx";

const Project: React.FC = () => {
  const [selectedProject, setSelectedProject] =
    useState<ProjectDataStructure | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showGithubModal, setShowGithubModal] = useState(false);

  const handleProjectClick = (project: ProjectDataStructure) => {
    setSelectedProject(project);
    setCurrentImageIndex(0); // 새로운 프로젝트 선택 시 이미지 인덱스 초기화
  };

  const handlePrevImage = () => {
    if (selectedProject && selectedProject.img.length > 0) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedProject.img.length - 1 : prevIndex - 1
      );
    }
  };

  const handleNextImage = () => {
    if (selectedProject && selectedProject.img.length > 0) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === selectedProject.img.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const handleGitHubClick = () => {
    if (
      Array.isArray(selectedProject?.link[0]) &&
      selectedProject?.link[0].length > 1
    ) {
      // 여러 개의 GitHub 링크가 있을 경우 모달을 띄웁니다.
      setShowGithubModal(true);
    } else {
      // 하나의 GitHub 링크만 있을 경우 바로 열립니다.
      const githubLink = selectedProject?.link[0] as string;
      if (githubLink) window.open(githubLink, "_blank", "noopener,noreferrer");
    }
  };

  const handleGithubVersionClick = (link: string) => {
    window.open(link, "_blank");
    setShowGithubModal(false); // 모달 닫기
  };

  return (
    <div className="flex min-h-full bg-gray-100 p-6">
      {/* 선택된 프로젝트 상세 정보 (왼쪽) */}
      <div className="flex-1 p-4 bg-gray-200">
        {selectedProject ? (
          <div className="max-h-full overflow-y-scroll scrollbar-hidden">
            <div className="text-base text-center font-medium mb-3">
              {selectedProject.period.join(", ")}
            </div>
            <div className="flex justify-center items-center mb-3 relative">
              <div className="text-3xl font-bold text-center">
                {selectedProject.name}
              </div>
              <div className="absolute right-0 top-0 flex gap-2">
                {selectedProject.link[0] && (
                  <button
                    onClick={handleGitHubClick}
                    className="bg-gray-400 text-white px-3 py-1 rounded-full hover:bg-gray-500 transition"
                  >
                    GitHub
                  </button>
                )}
                {selectedProject.link[1] && (
                  <a
                    href={selectedProject.link[1] as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-400 text-white px-3 py-1 rounded-full hover:bg-gray-500 transition"
                  >
                    Notion
                  </a>
                )}
              </div>
            </div>

            {selectedProject.stack && selectedProject.stack.length > 0 && (
              <div className="flex justify-center gap-2 flex-wrap mb-4">
                {selectedProject.stack.map((tech) => (
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
              <div className="font-bold text-2xl mb-3">주요 기능 및 설명</div>
              <div className="text-lg mt-2 mb-4">
                {selectedProject.introduce}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {selectedProject.detail && (
                <div>
                  <div className="font-bold text-2xl mb-3">제작 과정</div>
                  <div className="text-lg mt-2 mb-2">
                    {selectedProject.detail}
                  </div>
                </div>
              )}
              {selectedProject.contribute && (
                <div>
                  <div className="font-bold text-2xl mb-3">담당한 기능</div>
                  <div className="text-lg mt-2 mb-2">
                    {selectedProject.contribute}
                  </div>
                </div>
              )}

              {selectedProject.img && selectedProject.img.length > 0 && (
                <div className="w-full h-[55vh] bg-white rounded-md flex items-center justify-center border relative mb-4">
                  <button
                    className="absolute left-2 bg-gray-300 px-2 py-1 rounded-full hover:bg-gray-400 transition text-white"
                    onClick={handlePrevImage}
                  >
                    ◀
                  </button>
                  <img
                    src={selectedProject.img[currentImageIndex].imgurl}
                    alt={
                      selectedProject.img[currentImageIndex].description ||
                      "Project content"
                    }
                    className="w-full h-full object-contain rounded-md"
                  />
                  <button
                    className="absolute right-2 bg-gray-300 px-2 py-1 rounded-full hover:bg-gray-400 transition text-white"
                    onClick={handleNextImage}
                  >
                    ▶
                  </button>
                </div>
              )}

              {/* 이미지 설명 영역: description을 표시 */}
              {selectedProject.img &&
                selectedProject.img[currentImageIndex] && (
                  <div className="text-base text-center mb-4">
                    {selectedProject.img[currentImageIndex].description}
                  </div>
                )}
              {selectedProject.review && (
                <div>
                  <div className="font-bold text-2xl mb-3">회고</div>
                  <div className="text-lg mt-2">{selectedProject.review}</div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">프로젝트를 선택해주세요</p>
        )}
      </div>

      {/* 프로젝트 목록 (오른쪽) */}
      <div className="flex flex-col w-1/3 p-4 bg-white border-l border-gray-300">
        {ProjectInstance.map((project, index) => (
          <div
            key={index}
            className="mb-4 cursor-pointer"
            onClick={() => handleProjectClick(project)}
          >
            <h2 className="text-lg font-semibold">{project.name}</h2>
            <p className="text-sm">{project.description}</p>
          </div>
        ))}
      </div>

      {/* GitHub 버전 선택 모달 */}
      <Modal
        show={showGithubModal}
        close={() => setShowGithubModal(false)}
        content={
          <div className="flex flex-col gap-2">
            {Array.isArray(selectedProject?.link[0]) &&
              selectedProject?.link[0].map((link, index) => (
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
    </div>
  );
};

export default Project;
