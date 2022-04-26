import React from 'react';
import HomeView from './views/Home';
import Navbar from './components/Navbar';

import { HashRouter as Router, Route, Routes } from 'react-router-dom';
// import {Link} from 'react-router-dom'
// import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="content-wrapper">
        <Routes>
          <Route path="/settings" element={<h1>Settings</h1>} />
          <Route path="/login" element={<h1>Login</h1>} />
          <Route path="/register" element={<h1>Register</h1>} />
          <Route path="/" element={<HomeView />} />
        </Routes>
      </div>
    </Router>
  );
}
