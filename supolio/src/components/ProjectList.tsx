import React from "react";
import { projectColors } from "../data/overviewCss.ts";

interface Props {
  handleProjectClick: (project: string) => void;
}

// 프로젝트 리스트를 렌더링하는 컴포넌트
const ProjectList: React.FC<Props> = ({ handleProjectClick }) => {
  return (
    <div className="flex flex-col justify-center gap-4 pl-8">
      {Object.keys(projectColors).map((project) => (
        <div
          key={project}
          className={`p-3 text-black rounded flex items-center justify-between cursor-pointer ${projectColors[project]}`}
          onClick={() => handleProjectClick(project)}
        >
          {project}
          <span>▶</span>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
