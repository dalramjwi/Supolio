import React from "react";
import * as styles from "../css/InfoLaptop.css.ts";

const InfoLaptop: React.FC = () => {
  return (
    <div className={styles.infobackground}>
      <div className={styles.infodesk}></div>
      <div className={styles.laptopContainer}>
        <div className={styles.notebook}>
          <div className={styles.display}></div>
          <div className={styles.keyboard}></div>
        </div>
      </div>
    </div>
  );
};

export default InfoLaptop;
