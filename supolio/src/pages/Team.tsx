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
    <div className="grid grid-cols-3 gap-4">
      {/* 프로젝트 데이터를 반복하여 카드 생성 */}
      {Object.keys(projectData.team).map((projectKey) => {
        const project = projectData.team[projectKey];
        return (
          <div
            key={project.title}
            className="w-52 h-72 bg-gray-200 rounded-lg shadow-lg p-4 flex flex-col justify-between cursor-pointer"
            onClick={() => openModal(project)}
          >
            <div className="flex justify-between items-center">
              <div className="text-sm font-bold">{project.title}</div>
              <div className="flex items-center gap-1">
                {project.stack &&
                  Array.isArray(project.stack) &&
                  project.stack.map((tech, index) => (
                    <span
                      key={index}
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: stackColors[tech] || "#000" }} // 스택 색상 적용
                    ></span>
                  ))}
              </div>
            </div>
            <div className="w-full h-40 bg-white rounded-md mt-4 flex items-center justify-center">
              이미지
            </div>
            <div className="w-full text-center bg-gray-600 text-white font-bold py-2 rounded mt-4">
              {project.description.slice(0, 20)}...
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
