import React from "react";
import { ProjectDataStructure } from "../../../../dataStructure/project/class/projectDataStructure.ts";
import Div from "../../../atoms/base/Div.tsx";
import Button from "../../../atoms/base/Button.tsx";
import HtmlElementDiv from "../../../molecules/base/HtmlElementDiv.tsx";
import ModalButtonGroup from "../../../molecules/base/ModalButtonGroup.tsx";
import Img from "../../../atoms/base/Img.tsx";
import { stackColors } from "../../../../dataStructure/stackCss.ts";

interface ProjectDetailSectionsProps {
  project: ProjectDataStructure;
  currentImageIndex: number;
  onPrevImage: () => void;
  onNextImage: () => void;
  onGitHubClick: () => void;
}

const ProjectDetailSections: React.FC<ProjectDetailSectionsProps> = ({
  project,
  currentImageIndex,
  onPrevImage,
  onNextImage,
  onGitHubClick,
}) => {
  const sections = [
    {
      label: "기간",
      content: (
        <Div className="text-base text-center font-medium mb-3">
          {project.period.join(" ~ ")}
        </Div>
      ),
    },
    {
      label: "프로젝트 이름",
      content: (
        <Div className="flex justify-center items-center mb-3 relative">
          <Div className="text-3xl font-bold text-center">{project.name}</Div>
          <Div className="absolute right-0 top-0 flex gap-2">
            {project.link[0] && (
              <Button
                onClick={onGitHubClick}
                className="bg-gray-400 text-white px-3 py-1 rounded-full hover:bg-gray-500 transition"
              >
                GitHub
              </Button>
            )}
            {project.link[1] && (
              <a
                href={project.link[1] as string}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-400 text-white px-3 py-1 rounded-full hover:bg-gray-500 transition"
              >
                Notion
              </a>
            )}
          </Div>
        </Div>
      ),
    },
    {
      label: "사용 기술",
      content: (
        <Div className="flex justify-center gap-2 flex-wrap mb-4">
          {project.stack.map((tech) => (
            <Div
              key={tech}
              className="text-black px-2 py-1 rounded-md text-base"
              style={{ backgroundColor: stackColors[tech] || "#333" }}
            >
              {tech}
            </Div>
          ))}
        </Div>
      ),
    },
    {
      label: "주요 기능 및 설명",
      content: (
        <Div>
          <Div className="font-bold text-2xl mb-3">주요 기능 및 설명</Div>
          <HtmlElementDiv
            className="text-lg mt-2 mb-4"
            htmlContent={project.introduce}
          />
        </Div>
      ),
    },
    {
      label: "제작 과정",
      content: project.detail ? (
        <Div>
          <Div className="font-bold text-2xl mb-3">제작 과정</Div>
          <HtmlElementDiv
            className="text-lg mt-2 mb-2"
            htmlContent={project.detail}
          />
        </Div>
      ) : null,
    },
    {
      label: "담당한 기능",
      content: project.contribute ? (
        <Div>
          <Div className="font-bold text-2xl mb-3">담당한 기능</Div>
          <HtmlElementDiv
            className="text-lg mt-2 mb-2"
            htmlContent={project.contribute}
          />
        </Div>
      ) : null,
    },
    {
      label: "이미지",
      content:
        project.img.length > 0 ? (
          <Div className="w-full h-[55vh] bg-white rounded-md flex items-center justify-center border relative mb-4">
            <ModalButtonGroup
              onPrev={onPrevImage}
              onNext={onNextImage}
              disablePrev={currentImageIndex === 0}
              disableNext={currentImageIndex === project.img.length - 1}
            />
            <Img
              src={project.img[currentImageIndex].imgurl}
              alt={
                project.img[currentImageIndex].description || "Project content"
              }
              className="w-full h-full object-contain rounded-md"
            />
            {project.img[currentImageIndex]?.description && (
              <Div className="text-base text-center mt-2">
                {project.img[currentImageIndex].description}
              </Div>
            )}
          </Div>
        ) : null,
    },
    {
      label: "회고",
      content: project.review ? (
        <Div>
          <Div className="font-bold text-2xl mb-3">회고</Div>
          <HtmlElementDiv
            className="text-lg mt-2"
            htmlContent={project.review}
          />
        </Div>
      ) : null,
    },
  ];

  return (
    <>
      {sections.map((section, index) => (
        <Div key={index} className="mb-4">
          {section.content}
        </Div>
      ))}
    </>
  );
};

export default ProjectDetailSections;
