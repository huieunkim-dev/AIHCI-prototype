import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Payment.module.scss";
import { useCart } from "../context/CartContext";
import logo_png from "../assets/logo.png";
import mascot_png from "../assets/mascot.png";
import icon_hand_png from "../assets/icon-hand.png";
import icon_check_filled_svg from "../assets/icon-check-filled.svg";
import icon_check_outline_svg from "../assets/icon-check-outline.svg";

const imgLogo   = logo_png;
const imgMascot = mascot_png;
const imgTouch  = icon_hand_png;
const iconCheck1 = icon_check_filled_svg;
const iconCheck2 = icon_check_outline_svg;

function Payment() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const orderType = state?.orderType ?? "dine-in";
  const { items } = useCart();

  function getTempLabel(temp) {
    return temp === "ice" ? "차갑게" : "따뜻하게";
  }

  return (
    <div className={styles.page}>
      {/* 상단 헤더 */}
      <div className={styles.header}>
        <div className={styles.logoWrap}>
          <img src={imgLogo} alt="MEGA COFFEE" style={{
            position: "absolute",
            width: "301.44%",
            height: "1206.03%",
            left: "-101.03%",
            top: "-691.09%",
            maxWidth: "none",
          }} />
        </div>
        <span className={styles.time}>16:44</span>
      </div>

      {/* 마스코트 */}
      <div className={styles.mascotWrap}>
        <img src={imgMascot} alt="" style={{
          position: "absolute",
          width: "439.44%",
          height: "280.07%",
          left: "-304.47%",
          top: "-5.76%",
          maxWidth: "none",
          pointerEvents: "none",
        }} />
      </div>

      {/* 중앙 텍스트 */}
      <div className={styles.textSection}>
        <p className={styles.subtitle}>정확하게 주문했어요</p>
        <p className={styles.title}>완벽해요!</p>

        <div className={styles.itemList}>
          {items.length === 0 ? (
            <div className={styles.itemRow}>
              <img src={iconCheck1} alt="" className={styles.checkIcon} />
              <div className={styles.itemInfo}>
                <p className={styles.itemDetail}>주문 내역이 없어요</p>
              </div>
            </div>
          ) : (
            items.map((item, idx) => (
              <div key={item.id} className={styles.itemRow}>
                <img
                  src={idx % 2 === 0 ? iconCheck1 : iconCheck2}
                  alt=""
                  className={styles.checkIcon}
                />
                <div className={styles.itemInfo}>
                  <p className={styles.itemName}>{item.name}</p>
                  <p className={styles.itemDetail}>
                    {getTempLabel(item.temp)}, {item.qty}잔
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* 결제하러 가기 버튼 */}
      <button
        className={styles.payBtn}
        onClick={() => navigate("/payment/card", { state: { orderType } })}
      >
        <div className={styles.touchIconWrap}>
          <img src={imgTouch} alt="" style={{
            position: "absolute",
            width: "263.79%",
            height: "191.25%",
            left: "-81.47%",
            top: "-45.94%",
            maxWidth: "none",
            pointerEvents: "none",
          }} />
        </div>
        <span>결제하러 가기</span>
      </button>
    </div>
  );
}

export default Payment;
