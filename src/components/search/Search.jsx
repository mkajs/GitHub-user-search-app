import React from "react";
import styles from "./Search.module.scss";
import iconSearch from "../../assets/icon-search.svg";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/themeContext";

export default function Search() {
  const { theme } = useContext(ThemeContext);
  const [userName, setUsername] = useState("");

  const fetchUser = async (userName) => {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    return data;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (userName) {
      const userData = await fetchUser(userName);
      console.log(userData);
    }
  };

  return (
    <div className={`${styles.search} ${styles[`${theme}Search`]}`}>
      <img className={styles.searchIcon} src={iconSearch} alt="search icon" />
      <form className={styles.searchFrom}>
        <input
          value={userName}
          onChange={(event) => setUsername(event.target.value)}
          className={`${styles.searchInput}  ${styles[`${theme}Input`]}`}
          type="text"
          placeholder="جستجوی نام کاربری Github ... "
        />
        <input
          onClick={handleSubmit}
          className={styles.searchButton}
          type="submit"
          value="جستجو"
        />
      </form>
    </div>
  );
}
