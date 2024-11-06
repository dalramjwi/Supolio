import React from "react";
import { ProjectDataStructure } from "../../../dataStructure/project/class/projectDataStructure.ts";
import Div from "../../atoms/Div.tsx";
import Button from "../../atoms/Button.tsx";
import HtmlElementDiv from "../../molecules/HtmlElementDiv.tsx";
import ModalButtonGroup from "../../molecules/ModalButtonGroup.tsx";
import Img from "../../atoms/Img.tsx";
import { stackColors } from "../../../dataStructure/stackCss.ts";

interface ProjectDetailProps {
  project: ProjectDataStructure;
  currentImageIndex: number;
  onPrevImage: () => void;
  onNextImage: () => void;
  onGitHubClick: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  project,
  currentImageIndex,
  onPrevImage,
  onNextImage,
  onGitHubClick,
}) => (
  <Div className="flex-1 p-4 bg-gray-200">
    <Div className="max-h-full overflow-y-scroll scrollbar-hidden">
      <Div className="text-base text-center font-medium mb-3">
        {project.period.join(" ~ ")}
      </Div>
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
      <Div>
        <Div className="font-bold text-2xl mb-3">주요 기능 및 설명</Div>
        <HtmlElementDiv
          className="text-lg mt-2 mb-4"
          htmlContent={project.introduce}
        />
      </Div>
      <Div className="flex flex-col gap-4">
        {project.detail && (
          <Div>
            <Div className="font-bold text-2xl mb-3">제작 과정</Div>
            <HtmlElementDiv
              className="text-lg mt-2 mb-2"
              htmlContent={project.detail}
            />
          </Div>
        )}
        {project.contribute && (
          <Div>
            <Div className="font-bold text-2xl mb-3">담당한 기능</Div>
            <HtmlElementDiv
              className="text-lg mt-2 mb-2"
              htmlContent={project.contribute}
            />
          </Div>
        )}
        {project.img.length > 0 && (
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
          </Div>
        )}
        {project.img[currentImageIndex]?.description && (
          <Div className="text-base text-center mb-4">
            {project.img[currentImageIndex].description}
          </Div>
        )}
        {project.review && (
          <Div>
            <Div className="font-bold text-2xl mb-3">회고</Div>
            <HtmlElementDiv
              className="text-lg mt-2"
              htmlContent={project.review}
            />
          </Div>
        )}
      </Div>
    </Div>
  </Div>
);

export default ProjectDetail;
