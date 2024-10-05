import React, { useState } from "react";
import ProjectModal from "../components/ProjectModal.tsx";
import { projectData } from "../data/project.ts";
import { stackColors } from "../data/stackCss.ts";
import { projectColors } from "../data/overviewCss.ts"; // projectColors import

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
    <div className="flex flex-col min-h-full bg-gray-100 p-6">
      <div className="flex flex-col justify-center items-center flex-grow bg-white rounded-lg shadow-lg p-4 border border-gray-300">
        <div className="grid gap-x-16 gap-y-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {/* 최대 3개 열로 설정 */}
          {/* 프로젝트 데이터를 반복하여 카드 생성 */}
          {Object.keys(projectData.team).map((projectKey) => {
            const project = projectData.team[projectKey];
            return (
              <div
                key={project.title}
                className={`h-[55vh] w-full max-w-sm ${projectColors[projectKey]} rounded-lg shadow-lg flex flex-col justify-between cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-opacity-80 overflow-hidden`}
                onClick={() => openModal(project)}
              >
                <div className="flex flex-col p-4 h-full justify-between">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-2xl font-bold">{project.title}</div>
                    <div className="flex items-center gap-1">
                      {project.stack &&
                        Array.isArray(project.stack) &&
                        project.stack.map((tech, index) => (
                          <span
                            key={index}
                            className="w-3 h-3 rounded-full border border-black" // 동그라미에 검은색 테두리 추가
                            style={{
                              backgroundColor: stackColors[tech] || "#000",
                            }} // 스택 색상 적용
                          ></span>
                        ))}
                    </div>
                  </div>
                  <div className="w-full h-64 bg-white rounded-md flex items-center justify-center mb-2">
                    {/* 이미지 표시 부분 */}
                    {project.thumbnail && (
                      <img
                        src={project.thumbnail}
                        alt={`${project.title} thumbnail`}
                        className="w-full h-full rounded-md"
                      />
                    )}
                  </div>
                  <div
                    className="w-full bg-gray-600 text-white py-2 rounded min-h-44 flex items-center justify-center pl-2 pr-2"
                    dangerouslySetInnerHTML={{ __html: project.description }} // HTML 렌더링
                  />
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
      </div>
    </div>
  );
};

export default Team;
