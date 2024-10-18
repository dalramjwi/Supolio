import React from "react";
import ProjectListSection from "../organisms/ProjectListSection";

const OverviewTemplate: React.FC = () => {
  return (
    <div className="flex flex-col min-h-full bg-gray-100 p-6">
      <ProjectListSection />
    </div>
  );
};

export default OverviewTemplate;
