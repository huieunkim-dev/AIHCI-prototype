import { useNavigate, useLocation } from "react-router-dom";
import styles from "./MenuComplete.module.scss";
import { useCart } from "../../context/CartContext";
import logo_png from "../../assets/logo.png";
import mascot_png from "../../assets/mascot.png";
import icon_hand_png from "../../assets/icon-hand.png";
import icon_check_filled_svg from "../../assets/icon-check-filled.svg";
import icon_check_outline_svg from "../../assets/icon-check-outline.svg";

// 로고 텍스트 (Splash와 동일한 sprite)
const imgLogo = logo_png;
// 마스코트 (Splash와 동일한 sprite)
const imgMascot = mascot_png;
// 터치 아이콘 (버튼 안)
const imgTouch = icon_hand_png;
// 체크 아이콘
const iconCheck1 = icon_check_filled_svg;
const iconCheck2 = icon_check_outline_svg;

function MenuComplete() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const orderType = state?.orderType ?? "dine-in";
  const { items } = useCart();

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
          width: "398.4%",
          height: "291.42%",
          left: "-149.13%",
          top: "-4.86%",
          maxWidth: "none",
          pointerEvents: "none",
        }} />
      </div>

      {/* 중앙 텍스트 */}
      <div className={styles.textSection}>
        <p className={styles.subtitle}>원하는 음료를 선택했어요</p>
        <p className={styles.title}>좋아요!</p>

        <div className={styles.itemList}>
          {items.length === 0 ? (
            <div className={styles.itemRow}>
              <img src={iconCheck1} alt="" className={styles.checkIcon} />
              <span className={styles.itemName}>선택된 메뉴가 없어요</span>
            </div>
          ) : (
            items.map((item, idx) => (
              <div key={item.id} className={styles.itemRow}>
                <img
                  src={idx % 2 === 0 ? iconCheck1 : iconCheck2}
                  alt=""
                  className={styles.checkIcon}
                />
                <span className={styles.itemName}>
                  {item.name} {item.qty > 1 ? `×${item.qty}` : ""}
                </span>
              </div>
            ))
          )}
        </div>
      </div>

      {/* 하단 버튼 */}
      <button
        className={styles.continueBtn}
        onClick={() => navigate("/menu", { state: { orderType } })}
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
        <span>메뉴창 마저 보기</span>
      </button>
    </div>
  );
}

export default MenuComplete;
