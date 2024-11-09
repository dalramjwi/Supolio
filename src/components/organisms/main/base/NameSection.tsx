import React from "react";
import Div from "../../../atoms/base/Div.tsx";
import { MainInstance } from "../../../../dataStructure/main/instance/mainInstance.ts";
const NameSection: React.FC = () => {
  return <Div>{MainInstance.name}</Div>;
};

export default NameSection;
