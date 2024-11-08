import React from "react";
import CustomNavLink from "../atoms/NavLink.tsx";
import { container } from "./app.css.ts";
//! 추후에 path json으로 data 로직화 하는 것 고려
const HomeNavLink: React.FC = () => {
  return (
    <>
      <CustomNavLink to="/main">Main</CustomNavLink>
      <CustomNavLink to="/info">Info</CustomNavLink>
      <CustomNavLink to="/project">Project</CustomNavLink>
      <div className={container}>Hello, Vanilla Extract!</div>
    </>
  );
};

export default HomeNavLink;
