import { useNavigate, useParams, useLocation } from "react-router-dom";
import styles from "./MenuDetail.module.scss";
import { getItemById } from "../../data/menuData";

function MenuDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useLocation();
  const orderType = state?.orderType ?? "dine-in";
  const fromCart = state?.from === "cart";
  const item = getItemById(id);

  if (!item) return null;

  return (
    <div className={styles.page}>
      <div className={styles.overlay} />

      {/* 메인 카드 */}
      <div className={styles.card}>
        {/* 메뉴 이름 */}
        <h2 className={styles.itemName}>{item.name}</h2>

        {/* 음료 이미지 (노란 카드) */}
        <div className={styles.imgCard}>
          {item.imgDirect ? (
            <img className={styles.imgDirect} src={item.img} alt={item.name} />
          ) : (
            <div className={styles.imgWrap}>
              <img src={item.img} alt={item.name} style={item.imgStyle} />
            </div>
          )}
        </div>

        {/* 한줄 소개 */}
        <p className={styles.quote}>{item.quote}</p>

        {/* 설명 항목들 */}
        <div className={styles.infoList}>
          {item.infoItems?.map((info, i) => (
            <div key={i} className={styles.infoRow}>
              <ul className={styles.infoTextList}>
                <li className={styles.infoText}>{info.text}</li>
              </ul>
              <img src={info.icon} alt="" className={styles.infoIcon} />
            </div>
          ))}
        </div>
      </div>

      {/* 이해했어요! 버튼 */}
      <button
        className={styles.okBtn}
        onClick={() => fromCart ? navigate(-1) : navigate(`/menu/${id}/temperature`, { state: { orderType } })}
      >
        이해했어요!
      </button>
    </div>
  );
}

export default MenuDetail;
