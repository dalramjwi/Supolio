import React from "react";
import * as styles from "../css/dog.css.ts";

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
      <div className={styles.body2}>
        <div className={styles.leftPaw2}></div>
        <div className={styles.rightPaw2}></div>
      </div>
      <div className={styles.tail2}></div>
      <div className={styles.ORlaptop}>
        <div className={styles.ORscreen}></div>
        <div className={styles.ORkeyboard}></div>
      </div>
    </div>
  );
};

export default Dog;
