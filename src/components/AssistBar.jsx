import { useState } from "react";
import styles from "./AssistBar.module.scss";
import icon_call_staff_svg from "../assets/icon-call-staff.svg";
import icon_voice_support_svg from "../assets/icon-voice-support.svg";
import icon_contrast_svg from "../assets/icon-contrast.svg";
import StaffCallModal from "./StaffCallModal";

const iconCallStaff = icon_call_staff_svg;
const iconVoiceSupport = icon_voice_support_svg;
const iconContrast = icon_contrast_svg;

function AssistBar() {
  const [showStaffCall, setShowStaffCall] = useState(false);

  return (
    <>
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
    </>
  );
}

export default AssistBar;
