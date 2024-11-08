import React from "react";
import { ProjectDataStructure } from "../../../../dataStructure/project/class/projectDataStructure.ts";
import Div from "../../../atoms/base/Div.tsx";
import ProjectDetailSections from "./ProjectDetailSections.tsx";

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
      <ProjectDetailSections
        project={project}
        currentImageIndex={currentImageIndex}
        onPrevImage={onPrevImage}
        onNextImage={onNextImage}
        onGitHubClick={onGitHubClick}
      />
    </Div>
  </Div>
);

export default ProjectDetail;
