import React from "react";
import { ButtonProps } from "../interfaces/molecules/Button.interface";

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
