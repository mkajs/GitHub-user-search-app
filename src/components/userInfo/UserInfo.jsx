import React from "react";
import styles from "./UserInfo.module.scss";
import { Spinner } from "../../components";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import { UserContext } from "../../context/userContext";
import locationIcon from "../../assets/icon-location.svg";
import websiteIcon from "../../assets/icon-website.svg";
import twitterIcon from "../../assets/icon-twitter.svg";
import companyIcon from "../../assets/icon-company.svg";

export default function UserInfo() {
  const { theme } = useContext(ThemeContext);
  const { user, loading } = useContext(UserContext);

  if (loading) return <Spinner />;

  if (user.message === "Not Found" || Object.keys(user).length === 0)
    return (
      <div className={`${styles[`${theme}EmptyCard`]}`}>
        هیچ نتیجه ای برای نمایش وجود ندارد
      </div>
    );

  return (
    <div className={`${styles[`${theme}Card`]}`}>
      <img
        className={styles.userIcon}
        src={user.avatar_url}
        alt="abatar icon"
      />
      <div className={styles.useName}>
        <h2>{user.login}</h2>
        <a target="_blank" rel="noreferrer" href={user.html_url}>
          @{user.login}
        </a>
        <p>{user.bio || "این پروفایل بایو ندارد"}</p>
      </div>
      <p className={styles.userDate}>
        حساب در {new Date(user.created_at).toDateString()} ایجاد شده است.
      </p>
      <div className={`${styles.userStat} ${styles[`userStat${theme}`]}`}>
        <div>
          <span>مخزن</span>
          <p>8</p>
        </div>
        <div>
          <span>دنبال کننده ها</span>
          <p>4034</p>
        </div>
        <div>
          <span>دنبال شونده ها</span>
          <p>9</p>
        </div>
      </div>
      <div className={styles.userLinks}>
        <div>
          <img src={locationIcon} alt="icon" />{" "}
          <p>{user.location || "موجود نیست"}</p>
        </div>
        <div>
          <img src={twitterIcon} alt="icon" />{" "}
          <p>{user.twitter_username || "موجود نیست"}</p>
        </div>
        <div>
          <img src={websiteIcon} alt="icon" />{" "}
          <p>{user.site_admin || "موجود نیست"}</p>
        </div>
        <div>
          <img src={companyIcon} alt="icon" />{" "}
          <p>{user.company || "موجود نیست"}</p>
        </div>
      </div>
    </div>
  );
}
