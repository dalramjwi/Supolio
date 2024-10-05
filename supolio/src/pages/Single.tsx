import React, { useState } from "react";
import ProjectModal from "../components/ProjectModal.tsx";
import { projectData } from "../data/project.ts";
import { stackColors } from "../data/stackCss.ts";

const Single: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const projects = projectData.single; // single 객체만 가져옴

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
      <div className="flex flex-col justify-center items-center flex-grow text-center bg-white rounded-lg shadow-lg p-6 border border-gray-300">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {/* 최대 3개 열로 설정 */}
          {/* 프로젝트 데이터를 반복하여 카드 생성 */}
          {Object.keys(projects).map((projectKey) => {
            const project = projects[projectKey];
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
                            style={{
                              backgroundColor: stackColors[tech] || "#000",
                            }} // 스택 색상 적용
                          ></span>
                        ))}
                    </div>
                  </div>
                  <div className="w-full h-40 bg-white rounded-md flex items-center justify-center">
                    {/* 이미지 표시 부분 */}
                    {project.thumbnail && (
                      <img
                        src={project.thumbnail}
                        alt={`${project.title} thumbnail`}
                        className="object-cover w-full h-full rounded-md"
                      />
                    )}
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
      </div>
    </div>
  );
};

export default Single;
