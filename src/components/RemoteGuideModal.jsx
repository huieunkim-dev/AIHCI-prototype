import styles from "./RemoteGuideModal.module.scss";
import icon_remote_svg from "../assets/icon-remote.svg";
import icon_step_arrow_svg from "../assets/icon-step-arrow.svg";
import icon_step_arrow_hc_svg from "../assets/icon-step-arrow-hc.svg";
import icon_confirm_check_svg from "../assets/icon-confirm-check.svg";
import icon_confirm_check_hc_svg from "../assets/icon-confirm-check-hc.svg";
import remote_illustration_main_png from "../assets/remote-illustration-main.png";
import remote_illustration_step1_png from "../assets/remote-illustration-step1.png";
import remote_illustration_step2_png from "../assets/remote-illustration-step2.png";
import remote_illustration_step3_png from "../assets/remote-illustration-step3.png";
import { useSettings } from "../context/SettingsContext";

const iconRemote = icon_remote_svg;
const iconStepArrow = icon_step_arrow_svg;
const iconStepArrowHc = icon_step_arrow_hc_svg;
const iconConfirmCheck = icon_confirm_check_svg;
const iconConfirmCheckHc = icon_confirm_check_hc_svg;
const imgRemoteMain = remote_illustration_main_png;
const imgRemoteStep1 = remote_illustration_step1_png;
const imgRemoteStep2 = remote_illustration_step2_png;
const imgRemoteStep3 = remote_illustration_step3_png;

function RemoteGuideModal({ onClose }) {
  const { highContrast } = useSettings();
  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.headerSection}>
            <p className={styles.title}>리모콘 사용 설명</p>
            <div className={styles.divider} />
          </div>

          <div className={styles.illustration}>
            <img src={imgRemoteMain} alt="리모컨" style={{
              width: "100%", height: "100%",
              objectFit: "cover", pointerEvents: "none",
            }} />
          </div>

          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepThumb}>
                <img src={imgRemoteStep1} alt="" style={{
                  width: "100%", height: "100%",
                  objectFit: "cover", pointerEvents: "none",
                }} />
              </div>
              <p className={styles.stepLabel}>확인 / 다음 / 시작</p>
            </div>

            <div className={styles.stepArrow}>
              <img src={highContrast ? iconStepArrowHc : iconStepArrow} alt="" />
            </div>

            <div className={styles.step}>
              <div className={styles.stepThumb}>
                <img src={imgRemoteStep2} alt="" style={{
                  width: "100%", height: "100%",
                  objectFit: "cover", pointerEvents: "none",
                }} />
              </div>
              <p className={styles.stepLabel}>위치 선택</p>
            </div>

            <div className={styles.stepArrow}>
              <img src={highContrast ? iconStepArrowHc : iconStepArrow} alt="" />
            </div>

            <div className={styles.step}>
              <div className={styles.stepThumb}>
                <img src={imgRemoteStep3} alt="" style={{
                  width: "100%", height: "100%",
                  objectFit: "cover", pointerEvents: "none",
                }} />
              </div>
              <p className={styles.stepLabel}>뒤로가기</p>
            </div>
          </div>
        </div>

        <button className={styles.confirmButton} onClick={onClose}>
          <div className={styles.confirmIcon}>
            <img src={highContrast ? iconConfirmCheckHc : iconConfirmCheck} alt="" />
          </div>
          <span>이해했어요!</span>
        </button>
      </div>
    </div>
  );
}

export default RemoteGuideModal;
