import "./styles/base/_reset.scss";
import styles from "./app.module.scss";
import { useContext } from "react";
import { ThemeContext } from "./context/themeContext";
import { Header, Search, UserInfo } from "./components";
import { UserProvider } from "./context/userContext";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${styles.app}  ${styles[theme]}`}>
      <div className={styles.container}>
        <Header />
        <UserProvider>
          <Search />
          <UserInfo />
        </UserProvider>
      </div>
    </div>
  );
}

export default App;
