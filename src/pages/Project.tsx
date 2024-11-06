import React, { useState } from "react";
import { ProjectInstance } from "../dataStructure/project/instance/projectInstance.ts";
import { stackColors } from "../dataStructure/stackCss.ts";
import { ProjectDataStructure } from "../dataStructure/project/class/projectDataStructure.ts";
import Modal from "../components/molecules/Modal.tsx";
import Button from "../components/atoms/Button.tsx";
import Div from "../components/atoms/Div.tsx";
import Img from "../components/atoms/Img.tsx";
import ModalButtonGroup from "../components/molecules/ModalButtonGroup.tsx";
import HtmlElementDiv from "../components/molecules/HtmlElementDiv.tsx";

const Project: React.FC = () => {
  const [selectedProject, setSelectedProject] =
    useState<ProjectDataStructure | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showGithubModal, setShowGithubModal] = useState(false);

  const handleProjectClick = (project: ProjectDataStructure) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
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
      setShowGithubModal(true);
    } else {
      const githubLink = selectedProject?.link[0] as string;
      if (githubLink) window.open(githubLink, "_blank", "noopener,noreferrer");
    }
  };

  const handleGithubVersionClick = (link: string) => {
    window.open(link, "_blank");
    setShowGithubModal(false);
  };

  return (
    <Div className="flex min-h-full bg-gray-100 p-6">
      {/* 선택된 프로젝트 상세 정보 (왼쪽) */}
      <Div className="flex-1 p-4 bg-gray-200">
        {selectedProject ? (
          <Div className="max-h-full overflow-y-scroll scrollbar-hidden">
            <Div className="text-base text-center font-medium mb-3">
              {selectedProject.period.join(" ~ ")}
            </Div>
            <Div className="flex justify-center items-center mb-3 relative">
              <Div className="text-3xl font-bold text-center">
                {selectedProject.name}
              </Div>
              <Div className="absolute right-0 top-0 flex gap-2">
                {selectedProject.link[0] && (
                  <Button
                    onClick={handleGitHubClick}
                    className="bg-gray-400 text-white px-3 py-1 rounded-full hover:bg-gray-500 transition"
                  >
                    GitHub
                  </Button>
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
              </Div>
            </Div>

            {selectedProject.stack && selectedProject.stack.length > 0 && (
              <Div className="flex justify-center gap-2 flex-wrap mb-4">
                {selectedProject.stack.map((tech) => (
                  <Div
                    key={tech}
                    className="text-black px-2 py-1 rounded-md text-base"
                    style={{ backgroundColor: stackColors[tech] || "#333" }}
                  >
                    {tech}
                  </Div>
                ))}
              </Div>
            )}

            <Div>
              <Div className="font-bold text-2xl mb-3">주요 기능 및 설명</Div>
              <HtmlElementDiv
                className="text-lg mt-2 mb-4"
                htmlContent={selectedProject.introduce}
              ></HtmlElementDiv>
            </Div>

            <Div className="flex flex-col gap-4">
              {selectedProject.detail && (
                <Div>
                  <Div className="font-bold text-2xl mb-3">제작 과정</Div>
                  <HtmlElementDiv
                    className="text-lg mt-2 mb-2"
                    htmlContent={selectedProject.detail}
                  ></HtmlElementDiv>
                </Div>
              )}
              {selectedProject.contribute && (
                <Div>
                  <Div className="font-bold text-2xl mb-3">담당한 기능</Div>
                  <HtmlElementDiv
                    className="text-lg mt-2 mb-2"
                    htmlContent={selectedProject.contribute}
                  ></HtmlElementDiv>
                </Div>
              )}

              {selectedProject.img && selectedProject.img.length > 0 && (
                <Div className="w-full h-[55vh] bg-white rounded-md flex items-center justify-center border relative mb-4">
                  <ModalButtonGroup
                    onPrev={handlePrevImage}
                    onNext={handleNextImage}
                    disablePrev={currentImageIndex === 0}
                    disableNext={
                      currentImageIndex === selectedProject.img.length - 1
                    }
                  />
                  <Img
                    src={selectedProject.img[currentImageIndex].imgurl}
                    alt={
                      selectedProject.img[currentImageIndex].description ||
                      "Project content"
                    }
                    className="w-full h-full object-contain rounded-md"
                  />
                </Div>
              )}

              {selectedProject.img &&
                selectedProject.img[currentImageIndex] && (
                  <Div className="text-base text-center mb-4">
                    {selectedProject.img[currentImageIndex].description}
                  </Div>
                )}
              {selectedProject.review && (
                <Div>
                  <Div className="font-bold text-2xl mb-3">회고</Div>
                  <HtmlElementDiv
                    className="text-lg mt-2"
                    htmlContent={selectedProject.review}
                  ></HtmlElementDiv>
                </Div>
              )}
            </Div>
          </Div>
        ) : (
          <Div className="text-center text-gray-500">
            프로젝트를 선택해주세요
          </Div>
        )}
      </Div>

      {/* 프로젝트 목록 (오른쪽) */}
      <Div className="flex flex-col w-1/3 p-4 bg-white border-l border-gray-300">
        {ProjectInstance.map((project, index) => (
          <Div
            key={index}
            className="mb-4 cursor-pointer"
            onClick={() => handleProjectClick(project)}
          >
            <HtmlElementDiv
              className="text-lg font-semibold"
              htmlContent={project.name}
            >
              {project.name}
            </HtmlElementDiv>
            <HtmlElementDiv
              className="text-sm"
              htmlContent={project.description}
            ></HtmlElementDiv>
          </Div>
        ))}
      </Div>

      {/* GitHub 버전 선택 모달 */}
      <Modal
        show={showGithubModal}
        close={() => setShowGithubModal(false)}
        content={
          <Div className="flex flex-col gap-2">
            {Array.isArray(selectedProject?.link[0]) &&
              selectedProject?.link[0].map((link, index) => (
                <Button
                  key={index}
                  onClick={() => handleGithubVersionClick(link)}
                  className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400"
                >
                  버전 {index + 1}.0
                </Button>
              ))}
          </Div>
        }
      />
    </Div>
  );
};

export default Project;
