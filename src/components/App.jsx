import React from 'react';
import appStyles from '../styles/app.module.css';
import Sidebar from './Sidebar';
import Translator from './Translator';

const User = () => (
  <section className="home-section">
    <div className="text">User</div>
  </section>
);
const Dashboard = () => (
  <section className="home-section">
    <div className="text">Dashboard</div>
  </section>
);

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
