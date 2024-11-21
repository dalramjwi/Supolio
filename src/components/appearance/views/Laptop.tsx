import React from "react";
import * as styles from "../css/Desk.css.ts";

const Laptop: React.FC = () => {
  return (
    <div className={styles.notebook}>
      <div className={styles.display}>
        {/* 화살표 */}
        <div className={styles.arrow}>
          <div className={styles.arrowBefore}></div>
          <div className={styles.arrowAfter}></div>
        </div>
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
  );
};

export default Laptop;
