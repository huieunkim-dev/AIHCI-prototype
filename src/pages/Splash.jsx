import { useNavigate } from "react-router-dom";
import styles from "./Splash.module.scss";

const spriteSheet =
  "http://localhost:3845/assets/6177c4c3536923fe3e8d46701606d6fc19eee77e.png";
const mascotSheet =
  "http://localhost:3845/assets/3960f84b87f2003d7ee551628bce0d13a67558bf.png";

function Splash() {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <img src={spriteSheet} alt="" />
          </div>
          <div className={styles.logoText}>
            <img src={spriteSheet} alt="MEGA COFFEE" />
          </div>
        </div>
        <span className={styles.time}>16:44</span>
      </div>

      <h1 className={styles.title}>
        여기에서
        <br />
        주문하세요
      </h1>

      <div className={styles.mascot}>
        <img src={mascotSheet} alt="메가커피 마스코트" />
      </div>

      <div className={styles.buttons}>
        <button
          className={styles.button}
          onClick={() =>
            navigate("/mode-select", { state: { orderType: "dine-in" } })
          }
        >
          먹고가요
        </button>
        <button
          className={styles.button}
          onClick={() =>
            navigate("/mode-select", { state: { orderType: "takeout" } })
          }
        >
          포장해요
        </button>
      </div>
    </div>
  );
}

export default Splash;
