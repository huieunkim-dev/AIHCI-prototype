import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useKoreanTime from "../hooks/useKoreanTime";
import styles from "./ModeSelect.module.scss";
import logo_png from "../assets/logo.png";
import icon_back_svg from "../assets/icon-back.svg";
import icon_call_staff_svg from "../assets/icon-call-staff.svg";
import icon_voice_support_svg from "../assets/icon-voice-support.svg";
import icon_contrast_svg from "../assets/icon-contrast.svg";
import StaffCallModal from "../components/StaffCallModal";

const spriteSheet = logo_png;
const iconBack = icon_back_svg;
const iconCallStaff = icon_call_staff_svg;
const iconVoiceSupport = icon_voice_support_svg;
const iconContrast = icon_contrast_svg;

function ModeSelect() {
  const navigate = useNavigate();
  const time = useKoreanTime();
  const [showStaffCall, setShowStaffCall] = useState(false);

  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <div className={styles.logo}>
          <img src={spriteSheet} alt="MEGA COFFEE" />
        </div>
        <span className={styles.time}>{time}</span>
      </div>

      <button className={styles.homeButton} onClick={() => navigate("/")}>
        <img src={iconBack} alt="" />
        <span>홈으로</span>
      </button>

      <p className={styles.title}>
        어느 모드를
        <br />
        <span className={styles.bold}>사용</span>하시겠습니까?
      </p>

      <button className={`${styles.modeButton} ${styles.modeButtonNormal}`}>
        <span className={styles.modeName}>일반 버전</span>
        <span className={styles.modeDesc}>
          *키오스크를&nbsp;&nbsp;<strong>잘 활용하시는 분</strong>들 추천!
        </span>
      </button>

      <button
        className={`${styles.modeButton} ${styles.modeButtonEasy}`}
        onClick={() => navigate("/mode-select/confirm")}
      >
        <span className={styles.modeName}>쉬운 버전</span>
        <span className={styles.modeDesc}>
          *키오스크가&nbsp;&nbsp;<strong>어려운 분</strong>들 추천!
        </span>
      </button>

      <div className={styles.bottomBar}>
        <button
          className={styles.assistButton}
          onClick={() => setShowStaffCall(true)}
        >
          <img src={iconCallStaff} width={44} height={44} alt="" />
          <span>직원 부르기</span>
        </button>
        <button className={styles.assistButton}>
          <img src={iconVoiceSupport} width={32} height={44} alt="" />
          <span>음성 지원</span>
        </button>
        <button className={styles.assistButton}>
          <img src={iconContrast} width={53} height={34} alt="" />
          <span>고대비</span>
        </button>
      </div>

      {showStaffCall && (
        <StaffCallModal onClose={() => setShowStaffCall(false)} />
      )}
    </div>
  );
}

export default ModeSelect;
