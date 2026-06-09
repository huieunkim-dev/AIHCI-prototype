import { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import styles from "./MenuQuantity.module.scss";
import { getItemById } from "../../data/menuData";
import { useCart } from "../../context/CartContext";

const iconMinus = "http://localhost:3845/assets/e87e194bbab8e8be21dd3449bca264c93546555c.svg";
const iconPlus = "http://localhost:3845/assets/7428c058275ce0c30da7e3cb426a3c0a3e807134.svg";
const iconCheck = "http://localhost:3845/assets/116a9b471f970aab5d777b4ea8f1c53d47d1729f.svg";

function MenuQuantity() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useLocation();
  const orderType = state?.orderType ?? "dine-in";
  const temp = state?.temp ?? "ice";
  const item = getItemById(id);
  const { dispatch } = useCart();

  const [qty, setQty] = useState(1);

  function handleConfirm() {
    dispatch({
      type: "ADD",
      item: {
        id: `${id}-${temp}`,
        name: item.name,
        price: item.price,
        temp,
        qty,
        img: item.img,
        imgStyle: item.imgStyle,
        imgDirect: item.imgDirect,
      },
    });
    navigate("/menu/complete", { state: { orderType, itemId: id, temp, qty } });
  }

  if (!item) return null;

  return (
    <div className={styles.page}>
      <div className={styles.overlay} />

      {/* 메인 카드 */}
      <div className={styles.card}>
        {/* 제목 + 수량 선택 */}
        <div className={styles.topSection}>
          <div className={styles.cardTitle}>
            <span className={styles.titleLight}>{item.name}는</span>
            <br />
            <span className={styles.titleBold}>몇 잔을 주문하시겠어요?</span>
          </div>

          {/* 수량 선택기 */}
          <div className={styles.qtySelector}>
            <button
              className={styles.qtyBtn}
              onClick={() => setQty((q) => Math.max(1, q - 1))}
            >
              <img src={iconMinus} alt="빼기" className={styles.qtyIcon} />
            </button>

            <div className={styles.qtyDisplay}>
              <span className={styles.qtyNum}>{qty}</span>
              <span className={styles.qtyUnit}>잔</span>
            </div>

            <button
              className={styles.qtyBtn}
              onClick={() => setQty((q) => q + 1)}
            >
              <img src={iconPlus} alt="더하기" className={styles.qtyIcon} />
            </button>
          </div>
        </div>

        {/* 확인 버튼 */}
        <button className={styles.confirmRow} onClick={handleConfirm}>
          <div className={styles.checkCircle}>
            <img src={iconCheck} alt="확인" className={styles.checkIcon} />
          </div>
          <span className={styles.confirmText}>정하셨으면 눌러주세요!</span>
        </button>
      </div>

      {/* 뒤로 가기 */}
      <button className={styles.backBtn} onClick={() => navigate(-1)}>
        뒤로 가기
      </button>
    </div>
  );
}

export default MenuQuantity;
