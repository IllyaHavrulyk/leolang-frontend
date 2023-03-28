import React from 'react';
import appStyles from '../styles/app.module.css';
import Sidebar from './Sidebar';
import Translator from './Translator';

function App() {
  const [open, setOpen] = React.useState('false'); //toggles sidebar status, if 'false' sidebar is closed; if 'true' sidebar is opened
  
  function handleOpen() {
    setOpen(!open);
  }

  const openContext = React.createContext(handleOpen);
  
  return (
    <div className={appStyles.gridOpened}>
      <openContext.Provider>
        <Sidebar/>
      </openContext.Provider>
      <div className={appStyles.flexContainer}>
        <Translator/>
      </div>
    </div>
  );
}

export default App;
