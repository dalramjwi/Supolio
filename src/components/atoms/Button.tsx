import React from "react";
import { ButtonProps } from "../interfaces/molecules/Button.interface";

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  ...rest
}) => {
  return (
    <button className={className} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
