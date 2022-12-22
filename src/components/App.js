import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React from 'react';
import Sidebar from './common/Sidebar';
import "../styles/Sidebar.scss";
import Home from './common/Home';

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
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Home />
        <Routes>
          <Route path="/" component={User} exact />
          <Route path="/user" component={User} />
          <Route path="/dashboard" component={Dashboard} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
