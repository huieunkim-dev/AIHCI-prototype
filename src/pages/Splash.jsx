import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useKoreanTime from "../hooks/useKoreanTime";
import styles from "./Splash.module.scss";
import logo_png from "../assets/logo.png";
import mascot_png from "../assets/mascot.png";
import icon_dine_in_svg from "../assets/icon-dine-in.svg";
import icon_takeout_svg from "../assets/icon-takeout.svg";
import icon_remote_svg from "../assets/icon-remote.svg";
import RemoteGuideModal from "../components/RemoteGuideModal";

const spriteSheet =
  logo_png;
const mascotSheet =
  mascot_png;
const iconDineIn = icon_dine_in_svg;
const iconTakeout = icon_takeout_svg;
const iconRemote = icon_remote_svg;

function Splash() {
  const navigate = useNavigate();
  const time = useKoreanTime();
  const [showRemoteGuide, setShowRemoteGuide] = useState(false);

  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <img src={spriteSheet} alt="" />
          </div>
          <div className={styles.logoText}>
            <img src={spriteSheet} alt="MEGA COFFEE" />
          </div>
        </div>
        <span className={styles.time}>{time}</span>
      </div>

      <h1 className={styles.title}>
        여기에서
        <br />
        주문하세요
      </h1>

      <div className={styles.mascot}>
        <img src={mascotSheet} alt="메가커피 마스코트" />
      </div>

      <div className={styles.buttons}>
        <button
          className={styles.button}
          onClick={() =>
            navigate("/mode-select", { state: { orderType: "dine-in" } })
          }
        >
          <div className={styles.buttonIconDineIn}>
            <img src={iconDineIn} alt="" />
          </div>
          먹고가요
        </button>
        <button
          className={styles.button}
          onClick={() =>
            navigate("/mode-select", { state: { orderType: "takeout" } })
          }
        >
          <div className={styles.buttonIconTakeout}>
            <img src={iconTakeout} alt="" />
          </div>
          포장해요
        </button>
      </div>

      <button
        className={styles.remoteButton}
        onClick={() => setShowRemoteGuide(true)}
      >
        <div className={styles.remoteIcon}>
          <img src={iconRemote} alt="" />
        </div>
        <div className={styles.remoteText}>
          <p className={styles.remoteTextMain}>리모컨 사용하기</p>
          <p className={styles.remoteTextSub}>← 시작 버튼 눌러주세요</p>
        </div>
      </button>

      {showRemoteGuide && (
        <RemoteGuideModal onClose={() => setShowRemoteGuide(false)} />
      )}
    </div>
  );
}

export default Splash;
