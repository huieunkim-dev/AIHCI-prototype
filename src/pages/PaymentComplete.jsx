import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./PaymentComplete.module.scss";
import { useCart } from "../context/CartContext";
import logo_png from "../assets/logo.png";
import card_insert_png from "../assets/card-insert.png";

const imgLogo  = logo_png;
const imgCard  = card_insert_png;

const SECONDS = 5;

function PaymentComplete() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const orderType = state?.orderType ?? "dine-in";
  const { total } = useCart();
  const [count, setCount] = useState(SECONDS);

  useEffect(() => {
    if (count <= 0) {
      navigate("/payment/done", { state: { orderType } });
      return;
    }
    const t = setTimeout(() => setCount((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [count]);

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

      {/* 금액 */}
      <div className={styles.amountSection}>
        <p className={styles.amountLabel}>결제 금액</p>
        <p className={styles.amount}>
          <span className={styles.amountNum}>{total.toLocaleString()}</span>
          <span className={styles.amountWon}>원</span>
        </p>
      </div>

      {/* 구분선 */}
      <div className={styles.divider} />

      {/* 안내 텍스트 */}
      <p className={styles.guide}>
        <span className={styles.guideBold}>신용 카드</span>
        <span className={styles.guideLight}>를{"\n"}투입구에 꽂아주세요</span>
      </p>

      {/* 카드 이미지 */}
      <div className={styles.cardImgWrap}>
        <img src={imgCard} alt="" style={{
          position: "absolute",
          width: "139.89%", height: "111.43%",
          left: "-14.34%", top: "-1.85%",
          maxWidth: "none", pointerEvents: "none",
        }} />
      </div>

    </div>
  );
}

export default PaymentComplete;
