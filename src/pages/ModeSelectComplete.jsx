import { useNavigate, useLocation } from "react-router-dom";
import useKoreanTime from "../hooks/useKoreanTime";
import styles from "./ModeSelectComplete.module.scss";
import logo_png from "../assets/logo.png";
import mascot_png from "../assets/mascot.png";
import icon_dine_in_svg from "../assets/icon-dine-in.svg";
import icon_check_filled_svg from "../assets/icon-check-filled.svg";
import icon_check_filled_hc_svg from "../assets/icon-check-filled-hc.svg";
import icon_check_outline_svg from "../assets/icon-check-outline.svg";
import icon_check_outline_hc_svg from "../assets/icon-check-outline-hc.svg";
import AssistBar from "../components/AssistBar";
import { useSettings } from "../context/SettingsContext";

const spriteSheet = logo_png;
const mascotSheet = mascot_png;
const cupIcon = icon_dine_in_svg;
const checkTurtle = icon_check_filled_svg;
const checkTurtleHc = icon_check_filled_hc_svg;
const checkKorean = icon_check_outline_svg;
const checkKoreanHc = icon_check_outline_hc_svg;

function ModeSelectComplete() {
  const navigate = useNavigate();
  const time = useKoreanTime();
  const { state } = useLocation();
  const turtle = state?.turtle ?? false;
  const korean = state?.korean ?? false;
  const orderType = state?.orderType ?? "dine-in";
  const { highContrast } = useSettings();

  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <div className={styles.logoText}>
          <img src={spriteSheet} alt="MEGA COFFEE" />
        </div>
        <span className={styles.time}>{time}</span>
      </div>

      <div className={styles.mascot}>
        <img src={mascotSheet} alt="" />
      </div>

      <div className={styles.textBlock}>
        <span className={styles.subtitle}>첫 단계를 완료했어요!</span>
        <span className={styles.mainTitle}>잘하셨어요!</span>
        {turtle && (
          <div className={styles.checkItem}>
            <img src={highContrast ? checkTurtleHc : checkTurtle} alt="" />
            <span>거북이 버전 선택</span>
          </div>
        )}
        {korean && (
          <div className={styles.checkItem}>
            <img src={highContrast ? checkKoreanHc : checkKorean} alt="" />
            <span>우리말 버전 선택</span>
          </div>
        )}
      </div>

      <button
        className={styles.menuButton}
        onClick={() => navigate("/menu", { state: { orderType } })}
      >
        <div className={styles.menuButtonIcon}>
          <img src={cupIcon} alt="" />
        </div>
        <span className={styles.menuButtonText}>메뉴 보러 가기</span>
      </button>

      <AssistBar />
    </div>
  );
}

export default ModeSelectComplete;
