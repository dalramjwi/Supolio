import React from "react";
import CustomNavLink from "../../atoms/base/NavLink.tsx";
import * as styles from "../css/HomeNavLink.css.ts";
import Dog from "../css/dog.tsx";
import Div from "../../atoms/base/Div.tsx";
import SearchBar from "../css/SearchBar.tsx";
//! 추후에 로직 변경 고려
const SHomeNavLink: React.FC = () => {
  return (
    <Div className={styles.container}>
      <Dog />
      <SearchBar />
      <Div className={styles.linkContainer}>
        <CustomNavLink to="/main" className={styles.linkStyle}>
          Main
        </CustomNavLink>
        <CustomNavLink to="/info" className={styles.linkStyle}>
          Info
        </CustomNavLink>
        <CustomNavLink to="/project" className={styles.linkStyle}>
          Projects
        </CustomNavLink>
      </Div>
    </Div>
  );
};

export default SHomeNavLink;
