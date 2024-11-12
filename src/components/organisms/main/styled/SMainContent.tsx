import React, { useState } from "react";
import NameSection from "../../../molecules/main/base/NameSection.tsx";
import DescriptionSection from "../../../molecules/main/base/Description.tsx";
import Div from "../../../atoms/base/Div.tsx";
import * as styles from "../css/MainContent.css.ts";
import Desk from "../../../appearance/views/Desk.tsx";
import Modal from "../../../molecules/base/Modal.tsx";
import MainDog from "../../../appearance/views/MainDog.tsx";
import WindowBackground from "../../../appearance/views/WindowBackground.tsx";
import SSideNavLink from "../../../molecules/home/styled/SSideNavLink.tsx";

const SMainContent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <WindowBackground />
      <MainDog />
      <Desk>
        <Div className={styles.pageContainer}>
          <Div className={styles.card} onClick={handleCardClick}>
            <Div className={styles.company}>
              <Div className={styles.contactTitle}>
                <NameSection />
              </Div>
              <Div className={styles.position}>Cogito, ergo sum</Div>
              <Div className={styles.contactInfo}>010 9823 3662</Div>
              <Div className={styles.contactInfo}>dalramjwi@gmail.com</Div>
            </Div>
          </Div>
          <Modal
            show={isModalOpen}
            close={closeModal}
            content={
              <Div className={styles.modalContent}>
                <DescriptionSection />
              </Div>
            }
          />
        </Div>
      </Desk>
      <SSideNavLink />
    </>
  );
};

export default SMainContent;
