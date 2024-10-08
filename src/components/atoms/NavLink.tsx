import React from "react";
import { NavLink } from "react-router-dom";

const CustomNavLink: React.FC<React.ComponentProps<typeof NavLink>> = ({
  to,
  className,
  children,
  ...rest
}) => {
  return (
    <NavLink to={to} className={className} {...rest}>
      {children}
    </NavLink>
  );
};

export default CustomNavLink;
