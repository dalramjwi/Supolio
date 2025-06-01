import React, { useEffect, useState } from "react";
import Modal from "../../molecules/base/Modal.tsx";
import * as styles from "../css/InfoLaptop.css.ts";

const InfoLaptop: React.FC = () => {
  const [time, setTime] = useState<string>("");
  const [modalContent, setModalContent] = useState<
    "MY INFO" | "STACK" | "STUDY" | null
  >(null);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const koreanTime = new Date(
        now.toLocaleString("en-US", { timeZone: "Asia/Seoul" })
      );
      const hour = koreanTime.getHours().toString().padStart(2, "0");
      const minute = koreanTime.getMinutes().toString().padStart(2, "0");
      const date = koreanTime.toISOString().slice(0, 10);
      setTime(`${hour}:${minute}|${date}`);
    };

    updateClock();
    const interval = setInterval(updateClock, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.infobackground}>
      <div className={styles.display}>
        {/* 데스크탑 아이콘 영역 */}
        <div className={styles.iconDesktop}>
          <div
            className={styles.iconDesktopLink}
            onClick={() => setModalContent("MY INFO")}
          >
            <img
              className={styles.iconDesktopImg}
              src="https://raw.githubusercontent.com/gcazin/pure-css-windows-10-desktop/master/icons/chrome.png"
              alt="Chrome"
            />
            <span className={styles.iconDesktopLabel}>MY INFO</span>
          </div>
        </div>
        <div className={styles.iconDesktop}>
          <div
            className={styles.iconDesktopLink}
            onClick={() => setModalContent("STACK")}
          >
            <img
              className={styles.iconDesktopImg}
              src="https://raw.githubusercontent.com/gcazin/pure-css-windows-10-desktop/master/icons/code.png"
              alt="VS Code"
            />
            <span className={styles.iconDesktopLabel}>STACK</span>
          </div>
        </div>
        <div className={styles.iconDesktop}>
          <div
            className={styles.iconDesktopLink}
            onClick={() => setModalContent("STUDY")}
          >
            <img
              className={styles.iconDesktopImg}
              src="https://raw.githubusercontent.com/gcazin/pure-css-windows-10-desktop/master/icons/code.png"
              alt="VS Code"
            />
            <span className={styles.iconDesktopLabel}>STUDY</span>
          </div>
        </div>
        {/* 모달 컴포넌트 */}
        <Modal
          show={modalContent !== null}
          close={() => setModalContent(null)}
          content={
            <div className="bg-white w-[600px] h-[400px] p-6 rounded-lg">
              <h1 className="text-xl font-bold mb-4">
                {modalContent} 창입니다
              </h1>
              <p className="text-gray-700">
                이곳에 {modalContent} 관련 내용을 넣을 수 있습니다.
              </p>
            </div>
          }
        />
        {/* 하단 Taskbar */}
        <div className={styles.taskbar}>
          {/* 블러 배경 레이어 */}
          <div className={styles.taskbarBlurOverlay} />
          {/* 그 위에 덮는 투명 그라데이션 레이어 */}
          <div className={styles.taskbarOverlayTint} />
          {/* 실제 콘텐츠 영역 */}
          <div className={styles.taskbarContent}>
            <div className={styles.taskbarLeft}>
              <div
                className={styles.taskbarIcon}
                style={{
                  backgroundImage:
                    "url('https://upload.wikimedia.org/wikipedia/commons/a/a5/Windows_key_logo.png')",
                }}
              />
              <div
                className={styles.taskbarIcon}
                style={{
                  backgroundImage:
                    "url('https://raw.githubusercontent.com/gcazin/pure-css-windows-10-desktop/master/icons/search.png')",
                }}
              />
            </div>

            <div className={styles.taskbarRight}>
              <div
                className={styles.taskbarIcon}
                style={{
                  backgroundImage:
                    "url('https://raw.githubusercontent.com/gcazin/pure-css-windows-10-desktop/master/icons/wifi.png')",
                }}
              />
              <div className={styles.datetime}>
                <span>{time.split("|")[0]}</span>
                <br />
                <span>{time.split("|")[1]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoLaptop;
