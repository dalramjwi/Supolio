import React from "react";
import AboutMeSection from "../organisms/AboutMeSection.tsx";

const MainTemplate: React.FC = () => {
  return (
    <div className="flex flex-col min-h-full bg-gray-100 p-6">
      <AboutMeSection />
    </div>
  );
};

export default MainTemplate;
