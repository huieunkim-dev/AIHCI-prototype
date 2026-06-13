import { useState, useRef, useEffect } from "react";
import useKoreanTime from "../../hooks/useKoreanTime";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./MenuList.module.scss";
import { CATEGORIES, getItemsByCategory } from "../../data/menuData";
import { useCart } from "../../context/CartContext";
import icon_back_svg from "../../assets/icon-back.svg";
import scroll_arrow_down_svg from "../../assets/scroll-arrow-down.svg";
import icon_cart_svg from "../../assets/icon-cart.svg";
import AssistBar from "../../components/AssistBar";

const iconBack = icon_back_svg;
const iconArrow = scroll_arrow_down_svg;
const iconCart = icon_cart_svg;

function MenuList() {
  const navigate = useNavigate();
  const time = useKoreanTime();
  const { state } = useLocation();
  const orderType = state?.orderType ?? "dine-in";
  const [activeCategory, setActiveCategory] = useState("추천 메뉴");
  const scrollRef = useRef(null);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(false);

  function updateScrollState() {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollUp(el.scrollTop > 0);
    setCanScrollDown(el.scrollTop < el.scrollHeight - el.clientHeight - 1);
  }

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.scrollTop = 0;

    const handleLayout = () => {
      setCanScrollUp(el.scrollTop > 0);
      setCanScrollDown(el.scrollTop < el.scrollHeight - el.clientHeight - 1);
    };

    const rafId = requestAnimationFrame(handleLayout);
    return () => cancelAnimationFrame(rafId);
  }, [activeCategory]);

  const { total } = useCart();

  const visibleItems = getItemsByCategory(activeCategory);

  function scrollBy(amount) {
    scrollRef.current?.scrollBy({ top: amount, behavior: "smooth" });
  }

  function handleCategoryChange(cat) {
    setActiveCategory(cat);
  }

  return (
    <div className={styles.page}>
      {/* 헤더 */}
      <div className={styles.header}>
        <div className={styles.topBar}>
          <button className={styles.backButton} onClick={() => navigate(-1)}>
            <img src={iconBack} alt="" />
            <span>이전으로</span>
          </button>
          <span className={styles.time}>{time}</span>
        </div>

        <div className={styles.tabs}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`${styles.tab} ${activeCategory === cat ? styles.tabActive : ""}`}
              onClick={() => handleCategoryChange(cat)}
            >
              {cat === "에이드&스무디" ? (
                <span className={styles.tabMultiline}>
                  <span>에이드</span>
                  <span>&스무디</span>
                </span>
              ) : (
                cat
              )}
            </button>
          ))}
        </div>
      </div>

      {/* 메뉴 그리드 */}
      <div className={styles.menuWrap}>
        <div
          className={styles.menuScroll}
          ref={scrollRef}
          onScroll={updateScrollState}
        >
          <div className={styles.menuGrid}>
            {visibleItems.map((item) => (
              <button
                key={item.id}
                className={styles.menuCard}
                onClick={() =>
                  navigate(`/menu/${item.id}`, { state: { orderType } })
                }
              >
                <div className={styles.cardImage}>
                  {item.imgDirect ? (
                    <img
                      className={styles.imgDirect}
                      src={item.img}
                      alt={item.name}
                    />
                  ) : (
                    <div className={styles.imgWrap}>
                      <img
                        src={item.img}
                        alt={item.name}
                        style={item.imgStyle}
                      />
                    </div>
                  )}
                </div>
                <div className={styles.cardName}>{item.name}</div>
                <div className={styles.cardPrice}>
                  {item.price.toLocaleString()}원
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* 스크롤 화살표 */}
        <div className={styles.scrollArrows}>
          <button
            className={styles.arrowBtn}
            style={{ opacity: canScrollUp ? 1 : 0.35 }}
            onClick={() => scrollBy(-600)}
          >
            <div className={styles.arrowInnerUp}>
              <img src={iconArrow} alt="위로" />
            </div>
          </button>
          <button
            className={styles.arrowBtn}
            style={{ opacity: canScrollDown ? 1 : 0.35 }}
            onClick={() => scrollBy(600)}
          >
            <div className={styles.arrowInnerDown}>
              <img src={iconArrow} alt="아래로" />
            </div>
          </button>
        </div>
      </div>

      {/* 하단 바 */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomMain}>
          <div className={styles.orderInfo}>
            <span className={styles.orderType}>
              [{orderType === "dine-in" ? "매장이에요" : "포장이에요"}]
            </span>
            <span className={styles.orderTotal}>
              {total.toLocaleString()}
              <span className={styles.unit}>원</span>
            </span>
          </div>
          <button
            className={styles.cartButton}
            onClick={() => navigate("/cart", { state: { orderType } })}
          >
            <img src={iconCart} className={styles.cartIcon} alt="" />
            담은 상품 보기
          </button>
        </div>
        <AssistBar inline />
      </div>
    </div>
  );
}

export default MenuList;
