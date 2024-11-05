import React from "react";
import { ProjectInstance } from "../dataStructure/project/instance/projectInstance.ts";

const Project: React.FC = () => {
  return (
    <div className="flex flex-col min-h-full bg-gray-100 p-6">
      {ProjectInstance.map((project, index) => (
        <div key={index} className="mb-4">
          <h2 className="text-lg font-semibold">{project.name}</h2>
          <p className="text-sm">{project.description}</p>
        </div>
      ))}
    </div>
  );
};
export default Project;
