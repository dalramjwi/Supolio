import React from "react";
import NameSection from "../../../molecules/main/base/NameSection";
import ParagraphSection from "../../../molecules/main/base/ParagraphSection";
import DescriptionSection from "../../../molecules/main/base/Description";

const MainContent: React.FC = () => {
  return (
    <>
      <NameSection />
      <ParagraphSection />
      <DescriptionSection />
    </>
  );
};

export default MainContent;
