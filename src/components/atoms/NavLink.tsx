import React from "react";
import { NavLink as ReactNavLink } from "react-router-dom";

const NavLink: React.FC<NavLinkProps> = ({
  to,
  className,
  children,
  ...rest
}) => {
  return (
    <ReactNavLink to={to} className={className} {...rest}>
      {children}
    </ReactNavLink>
  );
};

export default NavLink;
