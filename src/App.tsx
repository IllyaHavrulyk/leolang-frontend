import styles from "./app.module.css";
import Translator from "./components/translator/Translator";

function App() {
  return (
      <div className={styles.flexContainer}>
        <Translator />
      </div>
  );
}

export default App;

