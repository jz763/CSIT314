import styles from "./LoginSignup.module.css";
import { Link } from "react-router";
import "../App.css";

import mail_icon from "../assets/images/mail.png";
import lock_icon from "../assets/images/lock.png";
import event_img from "../assets/images/eventsBWimage.jpg";

export const Login = () => {
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
        <div className={styles["container"]}>
          <div className={styles["header"]}>
            <div className={styles["text"]}>Login</div>
          </div>
          <div className={styles["inputs"]}>
            <div className={styles["input"]}>
              <input type="email" placeholder="Email" required />
              <img src={mail_icon} alt="" />
            </div>

            <div className={styles["input"]}>
              <input type="password" placeholder="Password" required />
              <img src={lock_icon} alt="" />
            </div>
          </div>
          <button className={styles["login"]}>Login</button>
          <div className={styles["options"]}>
            <a href="#">Forgot Password?</a>
            <Link to="/Registration">
              <a href="#">Create an Account</a>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
