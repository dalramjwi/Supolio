import React, { useState } from "react";
import CustomNavLink from "../../../atoms/base/NavLink.tsx";
import * as styles from "../css/SideNavLink.css.ts";

const SSideNavLink: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

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
            }`}
          >
            Projects
          </CustomNavLink>
          <CustomNavLink
            to="/info"
            className={`${styles.subMenuTwo[isOpen ? "visible" : "hidden"]} ${
              styles.subMenuColors.info
            }`}
          >
            Info
          </CustomNavLink>
          <CustomNavLink
            to="/main"
            className={`${styles.subMenuThree[isOpen ? "visible" : "hidden"]} ${
              styles.subMenuColors.projects
            }`}
          >
            Read ME
          </CustomNavLink>
        </>
      )}
    </div>
  );
};

export default SSideNavLink;
