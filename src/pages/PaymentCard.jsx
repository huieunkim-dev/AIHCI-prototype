import { useNavigate, useLocation } from "react-router-dom";
import styles from "./PaymentCard.module.scss";

const imgLogo     = "http://localhost:3845/assets/6177c4c3536923fe3e8d46701606d6fc19eee77e.png";
const iconCard    = "http://localhost:3845/assets/ebde53ee8cca7bf91c241223dd4b25a483fb01fd.svg";
const iconCoupon  = "http://localhost:3845/assets/ec579d92cd263c70b134211731db4b585d1fdc4f.svg";
const iconCash    = "http://localhost:3845/assets/50f330351abd6b8e520c13d2bfd0c20d483c91e6.svg";

function PaymentCard() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const orderType = state?.orderType ?? "dine-in";

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

      {/* 타이틀 */}
      <p className={styles.title}>
        <span>원하시는 </span>
        <span className={styles.titleBold}>결제방법</span>
        <span>을{"\n"}선택해주세요</span>
      </p>

      {/* 카드 버튼 (왼쪽 큰 버튼) */}
      <button
        className={styles.cardBtn}
        onClick={() => navigate("/payment/complete", { state: { orderType, method: "card" } })}
      >
        <div className={styles.cardIconWrap}>
          <img src={iconCard} alt="" className={styles.methodIcon} />
        </div>
        <div className={styles.cardLabels}>
          <span className={styles.cardMain}>카드</span>
          <span className={styles.cardSub}>신용/체크카드</span>
        </div>
      </button>

      {/* 쿠폰/교환권 버튼 (비활성) */}
      <div
        className={`${styles.sideBtn} ${styles.sideBtnDisabled}`}
        style={{ top: "617px" }}
      >
        <div className={styles.sideBtnInner}>
          <img src={iconCoupon} alt="" className={styles.sideIcon} />
          <div className={styles.sideLabels}>
            <span className={styles.sideMain}>쿠폰/교환권</span>
            <span className={styles.sideSub}>모바일 제품 교환권</span>
          </div>
        </div>
      </div>

      {/* 현금결제 버튼 (비활성) */}
      <div
        className={`${styles.sideBtn} ${styles.sideBtnDisabled}`}
        style={{ top: "1036px" }}
      >
        <div className={styles.sideBtnInner}>
          <img src={iconCash} alt="" className={styles.sideIcon} />
          <div className={styles.sideLabels}>
            <span className={styles.sideMain}>현금결제</span>
            <span className={styles.sideSub}>카운터에서 주문해주세요</span>
          </div>
        </div>
      </div>

      {/* 뒤로 가기 */}
      <button className={styles.backBtn} onClick={() => navigate(-1)}>
        뒤로 가기
      </button>
    </div>
  );
}

export default PaymentCard;
