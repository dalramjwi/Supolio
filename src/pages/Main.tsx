import React from "react";
import NameSection from "../components/organisms/main/base/NameSection.tsx";
import ParagraphSection from "../components/organisms/main/base/ParagraphSection.tsx";
import DescriptionSection from "../components/organisms/main/base/Description.tsx";
const Main: React.FC = () => {
  return (
    <>
      <NameSection />
      <ParagraphSection />
      <DescriptionSection />
    </>
  );
};

export default Main;
