import React from "react";
import * as styles from "../css/SearchBar.css.ts";

const SearchBar: React.FC = () => {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.placeholderText}>
        김수현의 포트폴리오
        <span className={styles.blinkingCursor}>|</span>
      </div>
      <div className={styles.searchIcon}></div>
    </div>
  );
};

export default SearchBar;
