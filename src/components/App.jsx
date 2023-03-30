import React from 'react';
import appStyles from '../styles/app.module.css';
import Sidebar from './Sidebar';
import Translator from './Translator';

function App() {
  const [isOpen, setIsOpen] = React.useState(false); //toggles sidebar status, if 'false' sidebar is closed; if 'true' sidebar is opened
  
  function handleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={isOpen ? appStyles.gridOpened : appStyles.gridClosed}>
      <Sidebar 
        isOpen={isOpen}
        handleOpen={handleOpen}
      />
      <div className={appStyles.flexContainer}>
        <Translator/>
      </div>
    </div>
  );
}

export default App;
