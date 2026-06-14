import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Cart.module.scss";
import { useCart } from "../context/CartContext";
import icon_minus_svg from "../assets/icon-minus.svg";
import icon_minus_hc_svg from "../assets/icon-minus-hc.svg";
import AssistBar from "../components/AssistBar";
import { useSettings } from "../context/SettingsContext";

const imgRemove = icon_minus_svg;
const imgRemoveHc = icon_minus_hc_svg;

function Cart() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const orderType = state?.orderType ?? "dine-in";
  const { items, total, dispatch } = useCart();
  const { highContrast } = useSettings();

  function removeItem(id) {
    dispatch({ type: "REMOVE", id });
  }

  return (
    <div className={styles.page}>
      <div className={styles.overlay} />

      {/* 메인 카드 */}
      <div className={styles.card}>
        {/* 제목 + 구분선 */}
        <div className={styles.titleSection}>
          <h2 className={styles.title}>담은 상품을 확인해주세요</h2>
          <div className={styles.dividerWrap} />
        </div>

        {/* 아이템 목록 */}
        <div className={styles.itemList}>
          {items.length === 0 && (
            <p className={styles.emptyText}>담은 상품이 없어요</p>
          )}
          {items.map((item) => (
            <div key={item.id} className={styles.itemRow}>
              {/* 왼쪽: X + 썸네일 + 정보 */}
              <div className={styles.itemLeft}>
                <button
                  className={styles.removeBtn}
                  onClick={() => removeItem(item.id)}
                >
                  <img
                    src={highContrast ? imgRemoveHc : imgRemove}
                    alt="삭제"
                    className={styles.removeIcon}
                  />
                </button>
                <div className={styles.itemMain}>
                  {/* 음료 썸네일 */}
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
                  {/* 이름 + 가격 */}
                  <div className={styles.itemInfo}>
                    <p className={styles.itemName}>{item.name}</p>
                    <p className={styles.itemPrice}>
                      {item.price.toLocaleString()}
                      <span className={styles.won}>원</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* 오른쪽: 메뉴 설명 보기 */}
              <button
                className={styles.itemDetail}
                onClick={() =>
                  navigate(`/menu/${item.itemId}`, {
                    state: { orderType, from: "cart" },
                  })
                }
              >
                메뉴 설명 보기 <span className={styles.arrow}>→</span>
              </button>
            </div>
          ))}
        </div>

        {/* 금액 + 버튼 */}
        <div className={styles.summarySection}>
          <div className={styles.amountRow}>
            <span className={styles.amountLabel}>주문 금액</span>
            <span className={styles.amountValue}>
              {total.toLocaleString()}원
            </span>
          </div>
          <div className={styles.totalSection}>
            <div className={styles.totalRow}>
              <span className={styles.totalLabel}>총 결제금액</span>
              <span className={styles.totalValue}>
                {total.toLocaleString()}원
              </span>
            </div>
            <div className={styles.actionButtons}>
              <button
                className={styles.addMoreBtn}
                onClick={() => navigate("/menu", { state: { orderType } })}
              >
                추가 주문
              </button>
              <button
                className={styles.orderBtn}
                onClick={() =>
                  navigate("/order/confirm", { state: { orderType } })
                }
              >
                주문
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 뒤로 가기 */}
      <button className={styles.backBtn} onClick={() => navigate(-1)}>
        뒤로 가기
      </button>

      <AssistBar dark />
    </div>
  );
}

export default Cart;
