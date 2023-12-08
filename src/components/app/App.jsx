import React from "react";
import appStyles from "./app.module.css";
import Translator from "../translator/Translator";

function App() {
  return (
      <div className={appStyles.flexContainer}>
        <Translator />
      </div>
  );
}

export default App;
