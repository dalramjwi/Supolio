import React from "react";
import HtmlElementDiv from "./../../molecules/HtmlElementDiv.tsx";
import { MainInstance } from "../../../dataStructure/main/instance/instance.ts";
//todo css 빼기
const DescriptionSection: React.FC = () => {
  return (
    <HtmlElementDiv
      className="text-xl text-gray-600 mb-4 mt-3 relative z-10"
      htmlContent={MainInstance.description}
    ></HtmlElementDiv>
  );
};

export default DescriptionSection;
