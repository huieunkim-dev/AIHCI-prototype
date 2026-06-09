import { useNavigate, useLocation } from "react-router-dom";
import useKoreanTime from "../hooks/useKoreanTime";
import styles from "./PaymentCard.module.scss";
import logo_png from "../assets/logo.png";
import icon_card_svg from "../assets/icon-card.svg";
import icon_coupon_svg from "../assets/icon-coupon.svg";
import icon_cash_svg from "../assets/icon-cash.svg";

const imgLogo     = logo_png;
const iconCard    = icon_card_svg;
const iconCoupon  = icon_coupon_svg;
const iconCash    = icon_cash_svg;

function PaymentCard() {
  const navigate = useNavigate();
  const time = useKoreanTime();
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
        <span className={styles.time}>{time}</span>
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
