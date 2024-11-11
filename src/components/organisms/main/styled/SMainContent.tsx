import React, { useState } from "react";
import NameSection from "../../../molecules/main/base/NameSection.tsx";
import DescriptionSection from "../../../molecules/main/base/Description.tsx";
import Div from "../../../atoms/base/Div.tsx";
import * as styles from "../css/MainContent.css.ts";
import Desk from "../../../appearance/views/Desk.tsx";
import Modal from "../../../molecules/base/Modal.tsx";
import Dog from "../../../appearance/views/Dog.tsx";

const SMainContent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true); // 명함 클릭 시 모달 열림
  };

  const closeModal = () => {
    setIsModalOpen(false); // 모달 닫기 함수
  };

  return (
    <>
      <Dog />
      <Desk>
        <Div className={styles.pageContainer}>
          {/* 클릭 가능한 명함 */}
          <Div className={styles.card} onClick={handleCardClick}>
            <Div className={styles.company}>
              <p className={styles.contactTitle}>
                <NameSection />
              </p>
              <p className={styles.position}>Cogito, ergo sum</p>
              <p className={styles.contactInfo}>010 9823 3662</p>
              <p className={styles.contactInfo}>dalramjwi@gmail.com</p>
            </Div>
          </Div>

          {/* 모달 창 - 명함의 자세한 내용을 표시 */}
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
    </>
  );
};

export default SMainContent;
