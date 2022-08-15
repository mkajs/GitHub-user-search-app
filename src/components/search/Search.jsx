import React from "react";
import styles from "./Search.module.scss";
import iconSearch from "../../assets/icon-search.svg";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/themeContext";
import { UserContext } from "../../context/userContext";

export default function Search() {
  const { theme } = useContext(ThemeContext);
  const { setUser, setLoading } = useContext(UserContext);
  const [login, setLogin] = useState("");

  const fetchUser = async (userName) => {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    setUser(data);
    setLoading(false);
    setLogin("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (login) {
      await fetchUser(login);
    }
  };

  return (
    <div className={`${styles.search} ${styles[`${theme}Search`]}`}>
      <img className={styles.searchIcon} src={iconSearch} alt="search icon" />
      <form className={styles.searchFrom}>
        <input
          value={login}
          onChange={(event) => setLogin(event.target.value)}
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
