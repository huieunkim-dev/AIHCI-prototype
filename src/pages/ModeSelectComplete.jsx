import { useNavigate, useLocation } from "react-router-dom";
import styles from "./ModeSelectComplete.module.scss";
import logo_png from "../assets/logo.png";
import mascot_png from "../assets/mascot.png";
import icon_hand_png from "../assets/icon-hand.png";
import icon_check_filled_svg from "../assets/icon-check-filled.svg";
import icon_check_outline_svg from "../assets/icon-check-outline.svg";

const spriteSheet = logo_png;
const mascotSheet = mascot_png;
const handIcon = icon_hand_png;
const checkTurtle = icon_check_filled_svg;
const checkKorean = icon_check_outline_svg;

function ModeSelectComplete() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const turtle = state?.turtle ?? false;
  const korean = state?.korean ?? false;

  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <div className={styles.logoText}>
          <img src={spriteSheet} alt="MEGA COFFEE" />
        </div>
        <span className={styles.time}>16:44</span>
      </div>

      <div className={styles.mascot}>
        <img src={mascotSheet} alt="" />
      </div>

      <div className={styles.textBlock}>
        <span className={styles.subtitle}>첫 단계를 완료했어요!</span>
        <span className={styles.mainTitle}>잘하셨어요!</span>
        {turtle && (
          <div className={styles.checkItem}>
            <img src={checkTurtle} alt="" />
            <span>거북이 버전 선택</span>
          </div>
        )}
        {korean && (
          <div className={styles.checkItem}>
            <img src={checkKorean} alt="" />
            <span>우리말 버전 선택</span>
          </div>
        )}
      </div>

      <button className={styles.menuButton} onClick={() => navigate("/menu")}>
        <div className={styles.menuButtonIcon}>
          <img src={handIcon} alt="" />
        </div>
        <span className={styles.menuButtonText}>메뉴 보러 가기</span>
      </button>
    </div>
  );
}

export default ModeSelectComplete;
