import React from "react";
import HtmlElementDiv from "./../../../molecules/base/HtmlElementDiv.tsx";
import { MainInstance } from "../../../../dataStructure/main/instance/mainInstance.ts";
const DescriptionSection: React.FC = () => {
  return (
    <HtmlElementDiv htmlContent={MainInstance.description}></HtmlElementDiv>
  );
};

export default DescriptionSection;
