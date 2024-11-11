import React from "react";
import CustomNavLink from "../../../atoms/base/NavLink.tsx";
import * as styles from "../css/SideNavLink.css.ts";
import Div from "../../../atoms/base/Div.tsx";
//! 추후에 path json으로 data 로직화 하는 것 고려
const SSideNavLink: React.FC = () => {
  return (
    <Div className={styles.linkContainer}>
      <CustomNavLink to="/main" className={styles.linkStyle}>
        About ME
      </CustomNavLink>
      <CustomNavLink to="/info" className={styles.linkStyle}>
        Info
      </CustomNavLink>
      <CustomNavLink to="/project" className={styles.linkStyle}>
        Projects
      </CustomNavLink>
    </Div>
  );
};

export default SSideNavLink;
