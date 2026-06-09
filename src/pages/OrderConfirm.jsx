import { useNavigate, useLocation } from "react-router-dom";
import styles from "./OrderConfirm.module.scss";
import { useCart } from "../context/CartContext";

function OrderConfirm() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const orderType = state?.orderType ?? "dine-in";
  const { items, total } = useCart();

  function getTempLabel(temp) {
    return temp === "ice" ? "차갑게 [아이스]" : "따뜻하게 [핫]";
  }

  return (
    <div className={styles.page}>
      <div className={styles.overlay} />

      {/* 메인 카드 */}
      <div className={styles.card}>
        {/* 제목 + 구분선 */}
        <div className={styles.titleSection}>
          <h2 className={styles.title}>주문 내용을 확인해주세요</h2>
          <div className={styles.divider} />
        </div>

        <div className={styles.body}>
          {/* 주문 항목 카드 */}
          <div className={styles.itemsSection}>
            <div className={styles.orderCard}>
              {/* 아이템 목록 */}
              {items.map((item) => (
                <div key={item.id} className={styles.itemRow}>
                  {/* 음료 이미지 */}
                  <div className={styles.thumbnail}>
                    {item.imgDirect ? (
                      <img
                        src={item.img}
                        alt={item.name}
                        className={styles.thumbImgDirect}
                      />
                    ) : (
                      <div className={styles.thumbImgWrap}>
                        <img
                          src={item.img}
                          alt={item.name}
                          style={item.imgStyle}
                        />
                      </div>
                    )}
                  </div>

                  {/* 정보 */}
                  <div className={styles.itemInfo}>
                    <div className={styles.itemNameGroup}>
                      <p className={styles.itemName}>{item.name}</p>
                      <p className={styles.itemTemp}>
                        {getTempLabel(item.temp)}
                      </p>
                    </div>
                    <div className={styles.itemPriceRow}>
                      <span className={styles.itemQty}>{item.qty} 잔</span>
                      <span className={styles.itemPrice}>
                        {(item.price * item.qty).toLocaleString()}원
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* 구분선 + 총액 */}
              <div className={styles.totalSection}>
                <div className={styles.totalDivider} />
                <div className={styles.totalRow}>
                  <span className={styles.totalLabel}>총 결제금액</span>
                  <span className={styles.totalValue}>
                    {total.toLocaleString()}원
                  </span>
                </div>
              </div>
            </div>

            <p className={styles.hint}>메뉴 확인을 해주세요!</p>
          </div>

          {/* 액션 버튼 */}
          <div className={styles.actionButtons}>
            <button
              className={styles.addMoreBtn}
              onClick={() => navigate("/menu", { state: { orderType } })}
            >
              추가 주문
            </button>
            <button
              className={styles.orderBtn}
              onClick={() => navigate("/payment", { state: { orderType } })}
            >
              주문
            </button>
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

export default OrderConfirm;
