import { useNavigate, useParams, useLocation } from "react-router-dom";
import styles from "./MenuTemperature.module.scss";
import { getItemById } from "../../data/menuData";

function MenuTemperature() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useLocation();
  const orderType = state?.orderType ?? "dine-in";
  const item = getItemById(id);

  function handleTemp(temp) {
    navigate(`/menu/${id}/quantity`, { state: { orderType, temp } });
  }

  if (!item) return null;

  return (
    <div className={styles.page}>
      <div className={styles.overlay} />

      {/* 메인 카드 */}
      <div className={styles.card}>
        <div className={styles.cardTitle}>
          <span className={styles.titleLight}>{item.name}는</span>
          <br />
          <span className={styles.titleBold}>어떻게 드릴까요?</span>
        </div>

        {/* 이미지 + 버튼 오버랩 영역 */}
        <div className={styles.imgButtonArea}>
          {/* 음료 이미지 */}
          <div className={styles.imgContainer}>
            {item.imgDirect ? (
              <img className={styles.imgDirect} src={item.img} alt={item.name} />
            ) : (
              <div className={styles.imgWrap}>
                <img src={item.img} alt={item.name} style={item.imgStyle} />
              </div>
            )}
          </div>

          {/* 온도 선택 버튼 */}
          <div className={styles.buttons}>
            <button
              className={`${styles.tempBtn} ${styles.iceBtn}`}
              onClick={() => handleTemp("ice")}
            >
              <span className={styles.tempLabel}>차갑게</span>
              <span className={styles.tempSub}>[아이스]</span>
            </button>
            <button
              className={`${styles.tempBtn} ${styles.hotBtn}`}
              onClick={() => handleTemp("hot")}
            >
              <span className={styles.tempLabel}>따뜻하게</span>
              <span className={styles.tempSub}>[핫]</span>
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

export default MenuTemperature;
