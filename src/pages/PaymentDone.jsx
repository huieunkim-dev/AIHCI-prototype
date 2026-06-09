import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./PaymentDone.module.scss";
import logo_png from "../assets/logo.png";
import card_remove_png from "../assets/card-remove.png";

const imgLogo = logo_png;
const imgCard = card_remove_png;

const SECONDS = 3;

function PaymentDone() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const orderType = state?.orderType ?? "dine-in";
  const [count, setCount] = useState(SECONDS);

  useEffect(() => {
    if (count <= 0) {
      navigate("/order/done", { state: { orderType } });
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

      {/* 완료 텍스트 */}
      <div className={styles.titleSection}>
        <p className={styles.subtitle}>수고하셨습니다</p>
        <p className={styles.title}>결제 완료!</p>
      </div>

      {/* 구분선 */}
      <div className={styles.divider} />

      {/* 안내 텍스트 */}
      <p className={styles.guide}>
        <span className={styles.guideBold}>신용 카드</span>
        <span className={styles.guideLight}>를{"\n"}뽑아 챙겨주세요</span>
      </p>

      {/* 카드 이미지 */}
      <div className={styles.cardImgWrap}>
        <img src={imgCard} alt="" style={{
          position: "absolute",
          width: "139.13%", height: "110.94%",
          left: "-14.27%", top: "-1.95%",
          maxWidth: "none", pointerEvents: "none",
        }} />
      </div>

      {/* 카운트다운 */}
      <div className={styles.countdown}>
        <div
          className={styles.countdownBar}
          style={{ width: `${(count / SECONDS) * 100}%` }}
        />
        <span className={styles.countdownText}>{count}초 후 자동으로 넘어갑니다</span>
      </div>
    </div>
  );
}

export default PaymentDone;
