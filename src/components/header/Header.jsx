import styles from "./Header.module.scss";
import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import iconMoon from "../../assets/icon-moon.svg";
import iconSun from "../../assets/icon-sun.svg";

export default function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  const themeIcon = theme === "dark" ? iconSun : iconMoon;
  return (
    <div className={styles.header}>
      <h1>جستجوی توسعه دهنده</h1>
      <p>{theme === "light" ? "تاریک" : "روشن"}</p>
      <div onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        <img src={themeIcon} alt="theme icon" />
      </div>
    </div>
  );
}
