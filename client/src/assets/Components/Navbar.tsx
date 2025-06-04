import logo from "../Images/logo.png";

import bookmark_icon from "../Images/bookmark-empty.png";
import profile_pic from "../Images/Profile Pic.png";
import loc_icon from "../Images/location-sharp.png";
import search_icon from "../Images/search.png";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <header className={styles["header"]}>
      <a href="/">
        <div className={styles["logo-wrapper"]}>
          <img className={styles["logo"]} src={logo} alt="" />
        </div>
      </a>
      <div className={styles["left-group"]}>
        <div className={styles["search"]}>
          <div className={styles["search-events"]}>
            <input
              className={styles["input"]}
              type="text"
              placeholder="Search Events"
            />
            <img src={search_icon} />
          </div>
          <div className={styles["location"]}>
            <input
              className={styles["input"]}
              type="text"
              placeholder="Location"
            />
            <img src={loc_icon} />
          </div>
        </div>
        <a className={styles["aboutUs"]} href="/">
          About Us
        </a>
      </div>

      <div className={styles["user_bookmark"]}>
        <a href="/">
          <img src={bookmark_icon} />
        </a>
        <img src={profile_pic} />
      </div>
    </header>
  );
};
