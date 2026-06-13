import { useNavigate, useLocation } from "react-router-dom";
import useKoreanTime from "../hooks/useKoreanTime";
import styles from "./ModeSelect.module.scss";
import logo_png from "../assets/logo.png";
import icon_back_svg from "../assets/icon-back.svg";
import AssistBar from "../components/AssistBar";

const spriteSheet = logo_png;
const iconBack = icon_back_svg;

function ModeSelect() {
  const navigate = useNavigate();
  const time = useKoreanTime();
  const { state } = useLocation();
  const orderType = state?.orderType ?? "dine-in";

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
        onClick={() => navigate("/mode-select/confirm", { state: { orderType } })}
      >
        <span className={styles.modeName}>쉬운 버전</span>
        <span className={styles.modeDesc}>
          *키오스크가&nbsp;&nbsp;<strong>어려운 분</strong>들 추천!
        </span>
      </button>

      <AssistBar />
    </div>
  );
}

export default ModeSelect;
