import styles from "./StaffCallModal.module.scss";
import staff_call_illustration_png from "../assets/staff-call-illustration.png";

const imgStaffCallIllustration = staff_call_illustration_png;

function StaffCallModal({ onClose }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.headerSection}>
            <p className={styles.title}>
              직원 호출하기를
              <br />
              눌렀습니다!
            </p>
            <div className={styles.divider} />
          </div>

          <div className={styles.illustration}>
            <img
              src={imgStaffCallIllustration}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                pointerEvents: "none",
              }}
            />
          </div>

          <p className={styles.message}>
            <span className={styles.messageLight}>잠시만 기다려 주세요</span>
            <br />
            <span className={styles.messageBold}>직원분이 오고 있어요</span>
          </p>
        </div>

        <button className={styles.confirmButton} onClick={onClose}>
          확인
        </button>
      </div>
    </div>
  );
}

export default StaffCallModal;
