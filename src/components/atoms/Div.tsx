import React from "react";
import { DivProps } from "../interface/molecules/Div.interface";

const Div: React.FC<DivProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default Div;
