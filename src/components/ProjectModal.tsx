import React, { useState } from "react";
import { stackColors } from "../dataStructure/stackCss.ts";
import Modal from "./molecules/Modal.tsx";
import ModalButtonGroup from "./molecules/ModalButtonGroup.tsx";

interface Project {
  title: string;
  period: string;
  stack?: string[];
  data: string[];
  imgnavigate?: { [key: number]: string };
  content: string;
  contribute?: string;
  details?: string;
  review?: string;
  githubLink?: string[];
  notionLink?: string;
}

interface ProjectModalProps {
  project: Project;
  show: boolean;
  onClose: () => void;
}

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

  const content = (
    <div className="max-h-full overflow-y-scroll scrollbar-hidden">
      <div className="text-base text-center font-medium mb-3">
        {project.period}
      </div>
      <div className="flex justify-center items-center mb-3 relative">
        <div className="text-3xl font-bold text-center">{project.title}</div>
      </div>

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

      {project.data && project.data.length > 0 && (
        <div className="w-full h-[55vh] bg-white rounded-md flex items-center justify-center border relative mb-4">
          <ModalButtonGroup
            onPrev={handlePrevImage}
            onNext={handleNextImage}
            disablePrev={currentImageIndex === 0}
            disableNext={currentImageIndex === project.data.length - 1}
          />
          <img
            src={project.data[currentImageIndex]}
            alt="Project content"
            className="w-full h-full object-contain rounded-md"
          />
        </div>
      )}

      {project.imgnavigate && project.imgnavigate[currentImageIndex] && (
        <div className="text-base text-center mb-4">
          {project.imgnavigate[currentImageIndex]}
        </div>
      )}
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
