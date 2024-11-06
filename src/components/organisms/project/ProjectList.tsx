import React from "react";
import { ProjectDataStructure } from "../../../dataStructure/project/class/projectDataStructure.ts";
import Div from "../../atoms/Div.tsx";
import HtmlElementDiv from "../../molecules/HtmlElementDiv.tsx";

interface ProjectListProps {
  projects: ProjectDataStructure[];
  onProjectSelect: (project: ProjectDataStructure) => void;
}
//todo interface 분리 및 style 속성 추가
const ProjectList: React.FC<ProjectListProps> = ({
  projects,
  onProjectSelect,
}) => (
  <Div className="flex flex-col w-1/3 p-4 bg-white border-l border-gray-300">
    {projects.map((project, index) => (
      <Div
        key={index}
        className="mb-4 cursor-pointer"
        onClick={() => onProjectSelect(project)}
      >
        <HtmlElementDiv
          className="text-lg font-semibold"
          htmlContent={project.name}
        />
        <HtmlElementDiv className="text-sm" htmlContent={project.description} />
      </Div>
    ))}
  </Div>
);

export default ProjectList;
