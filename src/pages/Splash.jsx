import { useNavigate } from "react-router-dom";
import styles from "./Splash.module.scss";
import logo_png from "../assets/logo.png";
import mascot_png from "../assets/mascot.png";

const spriteSheet =
  logo_png;
const mascotSheet =
  mascot_png;

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
