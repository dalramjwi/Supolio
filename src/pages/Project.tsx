import React from "react";
import { ProjectInstance } from "../dataStructure/project/instance/projectInstance.ts";
import ProjectTemplate from "../components/templates/project/ProjectTemplate.tsx";

const Project: React.FC = () => {
  return (
    <div className="flex min-h-full bg-gray-100 p-6">
      <ProjectTemplate projectData={ProjectInstance} />
    </div>
  );
};

export default Project;
