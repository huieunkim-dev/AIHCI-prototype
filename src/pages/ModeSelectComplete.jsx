import { useNavigate, useLocation } from "react-router-dom";
import styles from "./ModeSelectComplete.module.scss";

const spriteSheet = "http://localhost:3845/assets/6177c4c3536923fe3e8d46701606d6fc19eee77e.png";
const mascotSheet = "http://localhost:3845/assets/3960f84b87f2003d7ee551628bce0d13a67558bf.png";
const handIcon = "http://localhost:3845/assets/946e8e38544e14da8fbf3c682290de0ca6334e45.png";
const checkTurtle = "http://localhost:3845/assets/b57e7fbf84618f968d2f369281fb269df16a1232.svg";
const checkKorean = "http://localhost:3845/assets/30e93ab0320b17f9e0ec1a5f2d83ecf4140171cc.svg";

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
