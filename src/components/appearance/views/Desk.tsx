import React from "react";
import Laptop from "./Laptop.tsx";
import * as styles from "../css/Desk.css.ts";

interface DeskProps {
  children: JSX.Element | JSX.Element[];
}

const Desk: React.FC<DeskProps> = ({ children }) => {
  return (
    <div className={styles.deskContainer}>
      {/* 테이블 */}
      <div className={styles.table}>
        {/* 노트패드 */}
        <div className={styles.notepad}></div>

        {/* 노트북 */}
        <Laptop />

        {/* 컵 및 그림자 */}
        <div className={styles.cupLocation}>
          <div className={styles.cupShadow}></div>
          <div className={styles.cup}>
            <div className={styles.cupTop}></div>
            <div className={styles.handle}></div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Desk;
