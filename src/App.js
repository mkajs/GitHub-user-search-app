import "./styles/base/_reset.scss";
import styles from "./app.module.scss";
import { useContext } from "react";
import { ThemeContext } from "./context/themeContext";
import { Header } from "./components";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${styles.app}  ${styles[theme]}`}>
      <div className={styles.container}>
        <Header />
      </div>
    </div>
  );
}

export default App;
