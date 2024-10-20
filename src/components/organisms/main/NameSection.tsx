import React from "react";
import Div from "../../atoms/Div.tsx";
import { MainInstance } from "../../../dataStructure/main/instance/instance.ts";
//todo css 빼기
const NameSection: React.FC = () => {
  return (
    <Div className="text-6xl font-extrabold text-gray-800 mb-8 relative z-10">
      {MainInstance.name}
    </Div>
  );
};

export default NameSection;
