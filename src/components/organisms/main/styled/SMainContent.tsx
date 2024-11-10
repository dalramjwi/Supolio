import React, { useState } from "react";
import NameSection from "../../../molecules/main/base/NameSection.tsx";
import ParagraphSection from "../../../molecules/main/base/ParagraphSection.tsx";
import DescriptionSection from "../../../molecules/main/base/Description.tsx";
import Div from "../../../atoms/base/Div.tsx";
import * as styles from "../css/MainContent.css.ts";
import Desk from "../../../appearance/views/Desk.tsx";
import classNames from "classnames";

const SMainContent: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleCardClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsClicked(!isClicked);
  };

  return (
    <Desk>
      <Div className={styles.pageContainer}>
        <Div
          className={classNames(styles.card, {
            [styles.clickedCard]: isClicked,
            [styles.notClickedCard]: !isClicked,
          })}
          onClick={handleCardClick}
        >
          {isClicked ? (
            <Div>
              <DescriptionSection />
            </Div>
          ) : (
            <Div>
              <NameSection />
              <ParagraphSection />
            </Div>
          )}
        </Div>
      </Div>
    </Desk>
  );
};

export default SMainContent;
