import React from "react";
import * as styles from "../css/MainDog.css.ts";

const Dog: React.FC = () => {
  return (
    <div className={`${styles.dogContainer} ${styles.flippedDog}`}>
      <div className={styles.ears2}>
        <div className={styles.ears2Before}></div>
      </div>
      <div className={styles.head2}>
        <div className={styles.eyes2}>
          <div className={styles.eyes2Before}></div>
        </div>
        <div className={styles.nose2}>
          <div className={styles.nose2Before}></div>
        </div>
      </div>
      <div className={styles.body2}></div>
      <div className={styles.tail2}></div>
    </div>
  );
};

export default Dog;
