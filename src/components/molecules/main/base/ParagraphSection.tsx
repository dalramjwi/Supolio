import React from "react";
import Div from "../../../atoms/base/Div.tsx";
import { MainInstance } from "../../../../dataStructure/main/instance/mainInstance.ts";
const ParagraphSection: React.FC = () => {
  return <Div>{MainInstance.paragraph}</Div>;
};

export default ParagraphSection;
