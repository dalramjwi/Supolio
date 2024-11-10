import React from "react";
import NameSection from "../../../molecules/main/base/NameSection.tsx";
import ParagraphSection from "../../../molecules/main/base/ParagraphSection.tsx";
import DescriptionSection from "../../../molecules/main/base/Description.tsx";
import Div from "../../../atoms/base/Div.tsx";
import * as styles from "../css/MainContent.css.ts";
import Desk from "../../../appearance/views/Desk.tsx";

const SMainContent: React.FC = () => {
  return (
    <Desk>
      {/* <Div className={styles.pageContainer}>
        <Div className={styles.card} tabIndex={0}>
          <Div className="row clearfix">
            <Div className="left big">
              <NameSection />
            </Div>
            <Div className="right">
              <ParagraphSection />
            </Div>
          </Div>
          <Div className="row">
            <DescriptionSection />
          </Div>
        </Div>
      </Div> */}
    </Desk>
  );
};

export default SMainContent;
