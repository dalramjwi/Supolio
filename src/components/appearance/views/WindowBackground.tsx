import React from "react";
import * as styles from "../css/WindowBackground.css.ts";

const WindowBackground: React.FC = () => {
  return (
    <div className={styles.room}>
      <div className={styles.outsideBackground}></div>
      <div className={styles.window}>
        <div className={styles.stars}></div>
        <div className={styles.moon}></div>
        <div className={styles.cloud}></div>
        <div className={styles.bush}></div>
      </div>
      <div className={styles.windowSill}></div>
      <div className={styles.calendarShadowPaper}></div>
      <div className={styles.calendar}>
        <div className={styles.calendarDot}></div>
        <div className={styles.calendarDashedLine}></div>
        <div className={styles.calendarHeader}>New Moon</div>
        <div className={styles.calendarBottomLine}></div>
      </div>
    </div>
  );
};

export default WindowBackground;
