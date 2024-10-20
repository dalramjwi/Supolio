import React from "react";
import Div from "../../atoms/Div.tsx";
import { MainInstance } from "../../../dataStructure/main/instance/instance.ts";
const ParagraphSection: React.FC = () => {
  return (
    <Div className="text-2xl font-bold text-gray-800 mt-6 mb-2 relative z-10">
      {MainInstance.paragraph}
    </Div>
  );
};

export default ParagraphSection;
