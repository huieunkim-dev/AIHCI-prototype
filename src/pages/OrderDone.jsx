import { useNavigate } from "react-router-dom";
import styles from "./OrderDone.module.scss";
import { useCart } from "../context/CartContext";

const imgLogo    = "http://localhost:3845/assets/6177c4c3536923fe3e8d46701606d6fc19eee77e.png";
const imgMascot  = "http://localhost:3845/assets/3960f84b87f2003d7ee551628bce0d13a67558bf.png";
const imgHand    = "http://localhost:3845/assets/946e8e38544e14da8fbf3c682290de0ca6334e45.png";

function OrderDone() {
  const navigate = useNavigate();
  const { dispatch } = useCart();

  const handleHome = () => {
    dispatch({ type: "CLEAR" });
    navigate("/");
  };

  return (
    <div className={styles.page}>
      {/* 헤더 */}
      <div className={styles.header}>
        <div className={styles.logoWrap}>
          <img src={imgLogo} alt="MEGA COFFEE" style={{
            position: "absolute", width: "301.44%", height: "1206.03%",
            left: "-101.03%", top: "-691.09%", maxWidth: "none",
          }} />
        </div>
        <span className={styles.time}>16:44</span>
      </div>

      {/* 타이틀 */}
      <div className={styles.titleSection}>
        <p className={styles.subtitle}>정말 잘하셨어요</p>
        <p className={styles.title}>{"주문이\n완료되었습니다!"}</p>
      </div>

      {/* 마스코트 */}
      <div className={styles.mascotWrap}>
        <img src={imgMascot} alt="" style={{
          position: "absolute",
          width: "466.47%", height: "270.53%",
          left: "-320.22%", top: "-142.66%",
          maxWidth: "none", pointerEvents: "none",
        }} />
      </div>

      {/* 예상 대기시간 카드 */}
      <div className={styles.waitCard}>
        <div className={styles.handIcon}>
          <img src={imgHand} alt="" style={{
            position: "absolute",
            width: "263.79%", height: "191.25%",
            left: "-81.47%", top: "-45.94%",
            maxWidth: "none", pointerEvents: "none",
          }} />
        </div>
        <div className={styles.waitText}>
          <p className={styles.waitLabel}>예상 대기시간</p>
          <p className={styles.waitTime}>3분</p>
        </div>
      </div>

      {/* 처음 화면으로 돌아가기 버튼 */}
      <button className={styles.backBtn} onClick={handleHome}>
        <div className={styles.handIcon}>
          <img src={imgHand} alt="" style={{
            position: "absolute",
            width: "263.79%", height: "191.25%",
            left: "-81.47%", top: "-45.94%",
            maxWidth: "none", pointerEvents: "none",
          }} />
        </div>
        <span className={styles.backLabel}>처음 화면으로 돌아가기</span>
      </button>
    </div>
  );
}

export default OrderDone;
