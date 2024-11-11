import React from "react";
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
        <div className={styles.notebook}>
          <div className={styles.display}>
            {/* 화살표 */}
            <div className={styles.arrow}>
              <div className={styles.arrowBefore}></div>
              <div className={styles.arrowAfter}></div>
            </div>{" "}
            {/* 커서 */}
            <div className={styles.cursor}></div>
          </div>
          <div className={styles.keyboard}>
            {/* 키보드 키들 */}
            {styles.keyPositions.map((pos, i) => (
              <div
                key={i}
                className={styles.key}
                style={{
                  top: pos.top,
                  left: pos.left,
                  width: pos.width || "25px",
                }}
              ></div>
            ))}
            {/* 트랙패드 */}
            <div className={styles.trackpad}></div>
          </div>
        </div>
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
