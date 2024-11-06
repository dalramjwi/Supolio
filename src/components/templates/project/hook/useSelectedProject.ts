import { useState } from "react";
import { ProjectDataStructure } from "../../../../dataStructure/project/class/projectDataStructure";

const useSelectedProject = () => {
  const [selectedProject, setSelectedProject] =
    useState<ProjectDataStructure | null>(null);

  const handleProjectClick = (project: ProjectDataStructure) => {
    setSelectedProject(project);
  };

  return { selectedProject, handleProjectClick };
};

export default useSelectedProject;
