import React, { useState } from "react";
import CustomNavLink from "../../../atoms/base/NavLink.tsx";
import * as styles from "../css/SideNavLink.css.ts";
import Div from "../../../atoms/base/Div.tsx";
const SSideNavLink: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Div className={styles.linkContainer}>
      <div className={styles.menuButton} onClick={toggleMenu}></div>
      {isOpen && (
        <Div className={styles.navLinksContainer}>
          <CustomNavLink
            to="/main"
            className={`${styles.linkStyle} ${
              isOpen ? styles.linkStyleOpen : ""
            }`}
          >
            About ME
          </CustomNavLink>
          <CustomNavLink
            to="/info"
            className={`${styles.linkStyle} ${
              isOpen ? styles.linkStyleOpen : ""
            }`}
          >
            Info
          </CustomNavLink>
          <CustomNavLink
            to="/project"
            className={`${styles.linkStyle} ${
              isOpen ? styles.linkStyleOpen : ""
            }`}
          >
            Projects
          </CustomNavLink>
        </Div>
      )}
    </Div>
  );
};

export default SSideNavLink;
