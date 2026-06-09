import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Cart.module.scss";
import { useCart } from "../context/CartContext";

const imgLine =
  "http://localhost:3845/assets/c068dcacf05b12e5498ea92f2cbed272108c12c6.svg";
const imgRemove =
  "http://localhost:3845/assets/768fc979494de91122ef0fd99a052d98d6075d99.svg";
const imgMinus =
  "http://localhost:3845/assets/43c344608cfbb50f3eea02d859713de54a56e7a1.svg";
const imgPlus =
  "http://localhost:3845/assets/b6c8d6c64fa1156c407156e35c2118a8f85b6434.svg";

function Cart() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const orderType = state?.orderType ?? "dine-in";
  const { items, total, dispatch } = useCart();

  function removeItem(id) {
    dispatch({ type: "REMOVE", id });
  }

  function updateQty(id, qty) {
    dispatch({ type: "UPDATE_QTY", id, qty });
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
                    src={imgRemove}
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
                  {/* 이름 + 가격 + 설명 보기 */}
                  <div className={styles.itemInfo}>
                    <p className={styles.itemName}>{item.name}</p>
                    <p className={styles.itemPrice}>
                      {item.price.toLocaleString()}
                      <span className={styles.won}>원</span>
                    </p>
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
                </div>
              </div>

              {/* 오른쪽: 수량 조절 */}
              <div className={styles.qtyControl}>
                <button
                  className={styles.qtyBtn}
                  onClick={() => updateQty(item.id, item.qty - 1)}
                >
                  <img src={imgMinus} alt="빼기" className={styles.qtyIcon} />
                </button>
                <span className={styles.qtyNum}>{item.qty}</span>
                <button
                  className={styles.qtyBtn}
                  onClick={() => updateQty(item.id, item.qty + 1)}
                >
                  <img src={imgPlus} alt="더하기" className={styles.qtyIcon} />
                </button>
              </div>
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
    </div>
  );
}

export default Cart;
