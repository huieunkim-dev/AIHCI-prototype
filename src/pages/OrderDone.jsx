import { useNavigate } from "react-router-dom";
import useKoreanTime from "../hooks/useKoreanTime";
import styles from "./OrderDone.module.scss";
import { useCart } from "../context/CartContext";
import logo_png from "../assets/logo.png";
import mascot_png from "../assets/mascot.png";
import icon_clock_svg from "../assets/icon-clock.svg";
import icon_home_svg from "../assets/icon-home.svg";
import icon_home_hc_svg from "../assets/icon-home-hc.svg";
import { useSettings } from "../context/SettingsContext";

const imgLogo = logo_png;
const imgMascot = mascot_png;
const iconClock = icon_clock_svg;
const iconHome = icon_home_svg;
const iconHomeHc = icon_home_hc_svg;

function OrderDone() {
  const navigate = useNavigate();
  const time = useKoreanTime();
  const { dispatch } = useCart();
  const { highContrast } = useSettings();

  const handleHome = () => {
    dispatch({ type: "CLEAR" });
    navigate("/");
  };

  return (
    <div className={styles.page}>
      {/* 헤더 */}
      <div className={styles.header}>
        <div className={styles.logoWrap}>
          <img src={imgLogo} alt="MEGA COFFEE" />
        </div>
        <span className={styles.time}>{time}</span>
      </div>

      {/* 타이틀 */}
      <div className={styles.titleSection}>
        <p className={styles.subtitle}>정말 잘하셨어요</p>
        <p className={styles.title}>{"주문이\n완료되었습니다!"}</p>
      </div>

      {/* 마스코트 */}
      <div className={styles.mascotWrap}>
        <img
          src={imgMascot}
          alt=""
          style={{
            position: "absolute",
            width: "466.47%",
            height: "270.53%",
            left: "-320.22%",
            top: "-142.66%",
            maxWidth: "none",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* 예상 대기시간 카드 */}
      <div className={styles.waitCard}>
        <div className={styles.clockIcon}>
          <img
            src={iconClock}
            alt=""
            style={{
              width: "146px",
              height: "129px",
              objectFit: "contain",
            }}
          />
        </div>
        <div className={styles.waitText}>
          <p className={styles.waitLabel}>예상 대기시간</p>
          <p className={styles.waitTime}>3분</p>
        </div>
      </div>

      {/* 처음 화면으로 돌아가기 버튼 */}
      <button className={styles.backBtn} onClick={handleHome}>
        <div className={styles.homeIcon}>
          <img
            src={highContrast ? iconHomeHc : iconHome}
            alt=""
            style={{
              width: "77px",
              height: "75px",
              objectFit: "contain",
            }}
          />
        </div>
        <span className={styles.backLabel}>처음 화면으로 돌아가기</span>
      </button>
    </div>
  );
}

export default OrderDone;
