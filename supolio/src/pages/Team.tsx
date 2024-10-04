import React, { useState } from "react";
import ProjectModal from "../components/ProjectModal.tsx";
import { projectData } from "../data/project.ts";
import { stackColors } from "../data/stackCss.ts";

const Team: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-4">
      {/* 최대 3개 열로 설정 */}
      {/* 프로젝트 데이터를 반복하여 카드 생성 */}
      {Object.keys(projectData.team).map((projectKey) => {
        const project = projectData.team[projectKey];
        return (
          <div
            key={project.title}
            className="h-[65vh] w-full bg-gray-200 rounded-lg shadow-lg flex flex-col justify-between cursor-pointer transition-all hover:shadow-xl overflow-hidden" // 카드 높이 및 너비 설정
            onClick={() => openModal(project)}
          >
            <div className="flex flex-col p-4 h-full justify-between">
              <div className="flex justify-between items-center mb-2">
                <div className="text-sm font-bold">{project.title}</div>
                <div className="flex items-center gap-1">
                  {project.stack &&
                    Array.isArray(project.stack) &&
                    project.stack.map((tech, index) => (
                      <span
                        key={index}
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: stackColors[tech] || "#000" }} // 스택 색상 적용
                      ></span>
                    ))}
                </div>
              </div>
              <div className="w-full h-40 bg-white rounded-md flex items-center justify-center">
                {/* 이미지 표시 부분 */}
                이미지
              </div>
              {/* 설명 부분의 고정 높이 증가 */}
              <div className="w-full text-center bg-gray-600 text-white font-bold py-2 rounded h-20 flex items-center justify-center">
                {project.description} {/* 고정 높이에 맞춰 설명 표시 */}
              </div>
            </div>
          </div>
        );
      })}

      {/* ProjectModal 사용: 선택된 프로젝트를 모달로 전달 */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          show={isModalOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Team;
