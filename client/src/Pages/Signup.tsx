import styles from "./LoginSignup.module.css";
import "../App.css";

import mail_icon from "../assets/images/mail.png";
import lock_icon from "../assets/images/lock.png";
import person_icon from "../assets/images/person-sharp.png";
import contactadd_icon from "../assets/images/phone-add.png";
import event_img from "../assets/images/eventsBWimage.jpg";

export const Signup = () => {
  return (
    <div className={styles["main-container"]}>
      <button className={styles["title-container"]}>
        <h1>Eventide</h1>
        <h2>
          Local Event Finder <br />
          and Planner
        </h2>
      </button>
      <div className={styles["login-wrapper"]}>
        <img
          src={event_img}
          alt="side visual"
          className={styles["side-image"]}
        />
        <div className={styles["container-register"]}>
          <div className={styles["header"]}>
            <div className={styles["text"]}>Sign Up</div>
          </div>
          <div className={styles["inputs"]}>
            <div className={styles["input"]}>
              <input type="text" placeholder="Full Name" required />
              <img src={person_icon} alt="" />
            </div>
            <div className={styles["input"]}>
              <input type="email" placeholder="Email" required />
              <img src={mail_icon} alt="" />
            </div>
            <div className={styles["input"]}>
              <input type="password" placeholder="Password" required />
              <img src={lock_icon} alt="" />
            </div>
            <div className={styles["input"]}>
              <input type="Text" placeholder="Contact Number" required />
              <img src={contactadd_icon} alt="" />
            </div>
          </div>
          <button className={styles["login"]}>Login</button>
          <div className={styles["options"]}>
            <a href="#">Forgot Password?</a>
            <a href="#">Already Have an Account?</a>
          </div>
        </div>
      </div>
    </div>
  );
};
