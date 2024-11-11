import React from "react";
import CustomNavLink from "../../../atoms/base/NavLink.tsx";
//! 추후에 path json으로 data 로직화 하는 것 고려
const HomeNavLink: React.FC = () => {
  return (
    <>
      <CustomNavLink to="/main">Read ME</CustomNavLink>
      <CustomNavLink to="/info">Info</CustomNavLink>
      <CustomNavLink to="/project">Projects</CustomNavLink>
    </>
  );
};

export default HomeNavLink;
