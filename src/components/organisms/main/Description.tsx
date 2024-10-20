import React from "react";
import Div from "../../atoms/Div.tsx";
import { MainInstance } from "../../../dataStructure/main/instance/instance.ts";
//todo css 빼기
const DescriptionSection: React.FC = () => {
  return (
    <Div className="text-xl text-gray-600 mb-4 mt-3 relative z-10">
      {MainInstance.description}
    </Div>
  );
};

export default DescriptionSection;
