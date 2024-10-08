import React from "react";
import { LiProps } from "../interfaces/molecules/Li.interface";

const Li: React.FC<LiProps> = ({ children, className }) => {
  return <li className={className}>{children}</li>;
};

export default Li;
