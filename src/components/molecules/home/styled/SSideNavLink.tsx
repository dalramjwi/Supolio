import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import CustomNavLink from "../../../atoms/base/NavLink.tsx";
import * as styles from "../css/SideNavLink.css.ts";

const SSideNavLink: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const isCurrentPath = (path: string) => location.pathname === path;

  return (
    <div className={styles.linkContainer}>
      {/* 메뉴 버튼 */}
      <button className={styles.menuButton} onClick={toggleMenu}>
        MENU
      </button>

      {/* 서브 메뉴 아이템 */}
      {isOpen && (
        <>
          <CustomNavLink
            to="/project"
            className={`${styles.subMenuOne[isOpen ? "visible" : "hidden"]} ${
              styles.subMenuColors.main
            } ${isCurrentPath("/project") ? styles.grayScale : ""}`}
          >
            Projects
          </CustomNavLink>
          <CustomNavLink
            to="/info"
            className={`${styles.subMenuTwo[isOpen ? "visible" : "hidden"]} ${
              styles.subMenuColors.info
            } ${isCurrentPath("/info") ? styles.grayScale : ""}`}
          >
            Info
          </CustomNavLink>
          <CustomNavLink
            to="/main"
            className={`${styles.subMenuThree[isOpen ? "visible" : "hidden"]} ${
              styles.subMenuColors.projects
            } ${isCurrentPath("/main") ? styles.grayScale : ""}`}
          >
            Read ME
          </CustomNavLink>
        </>
      )}
    </div>
  );
};

export default SSideNavLink;
