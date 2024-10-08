import React from "react";
import { UlProps } from "../interfaces/molecules/Ul.interface";

const Ul: React.FC<UlProps> = ({ children, className }) => {
  return <ul className={className}>{children}</ul>;
};

export default Ul;
