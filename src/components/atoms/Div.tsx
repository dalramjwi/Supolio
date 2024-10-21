import React from "react";
import { DivProps } from "../interfaces/molecules/Div.interface";

const Div: React.FC<DivProps> = ({ children, className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};

export default Div;
