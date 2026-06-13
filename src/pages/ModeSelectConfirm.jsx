import { useState } from "react";
import useKoreanTime from "../hooks/useKoreanTime";
import { useNavigate } from "react-router-dom";
import styles from "./ModeSelectConfirm.module.scss";
import logo_png from "../assets/logo.png";
import icon_back_svg from "../assets/icon-back.svg";
import icon_turtle_svg from "../assets/icon-turtle.svg";
import icon_check_svg from "../assets/icon-check.svg";
import icon_korean_svg from "../assets/icon-korean.svg";

const spriteSheet = logo_png;
const iconBack = icon_back_svg;
const iconTurtle = icon_turtle_svg;
const iconCheck = icon_check_svg;
const iconKorean = icon_korean_svg;

function getConfirmText(turtle, korean) {
  if (turtle && korean) return "모두 진행하는게 맞나요?";
  if (turtle) return "거북이 버전만 진행하는게 맞나요?";
  if (korean) return "우리말 버전만 진행하는게 맞나요?";
  return "선택 없이 진행하는게 맞나요?";
}

function ModeSelectConfirm() {
  const navigate = useNavigate();
  const time = useKoreanTime();
  const [turtle, setTurtle] = useState(false);
  const [korean, setKorean] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <div className={styles.logoText}>
          <img src={spriteSheet} alt="MEGA COFFEE" />
        </div>
        <span className={styles.time}>{time}</span>
      </div>

      <div className={styles.container}>
        <div className={styles.card}>
          <button
            className={styles.backButton}
            onClick={() => navigate("/mode-select")}
          >
            <img src={iconBack} alt="" />
            <span>이전으로</span>
          </button>

          {/* 거북이 버전 */}
          <button
            className={`${styles.optionCard} ${turtle ? styles.optionCardSelected : ""}`}
            onClick={() => setTurtle((v) => !v)}
          >
            <div className={styles.optionInner}>
              <div className={styles.optionTop}>
                <span className={styles.optionLabel}>느려도 괜찮아</span>
                <div className={styles.optionTitleRow}>
                  <div className={styles.turtleIcon}>
                    <img src={iconTurtle} alt="" />
                  </div>
                  <span className={styles.optionName}>거북이 버전</span>
                </div>
              </div>
              <span className={styles.optionDesc}>
                기존보다 0.5배 천천히 작동됩니다
              </span>
            </div>
          </button>

          {/* 우리말 버전 + 확인 질문 */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 54,
              alignItems: "center",
              width: "100%",
            }}
          >
            <button
              className={`${styles.optionCard} ${korean ? styles.optionCardSelected : ""}`}
              onClick={() => setKorean((v) => !v)}
            >
              <div className={styles.optionInner}>
                <div className={styles.optionTop}>
                  <span className={styles.optionLabel}>어렵지 않아요</span>
                  <div className={styles.optionTitleRow}>
                    <div className={styles.koreanIcon}>
                      <img src={iconKorean} alt="가나다" />
                    </div>
                    <span className={styles.optionName}>우리말 버전</span>
                  </div>
                </div>
                <span className={styles.optionDesc}>
                  외래어&gt;우리말로 변경됩니다
                </span>
              </div>
            </button>

            <div className={styles.confirmRow}>
              <span className={styles.confirmText}>
                {getConfirmText(turtle, korean)}
              </span>
              <button
                className={`${styles.checkButton} ${checked ? styles.checkButtonActive : ""}`}
                onClick={() => setChecked((v) => !v)}
              >
                <img src={iconCheck} alt="" />
              </button>
            </div>
          </div>
        </div>

        <button
          className={`${styles.confirmButton} ${checked ? styles.confirmButtonActive : ""}`}
          onClick={() =>
            checked &&
            navigate("/mode-select/complete", { state: { turtle, korean } })
          }
        >
          확인
        </button>
      </div>
    </div>
  );
}

export default ModeSelectConfirm;
