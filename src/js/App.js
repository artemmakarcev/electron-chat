import React from 'react';

import { Provider } from 'react-redux';

import HomeView from './views/Home';
import ChatView from './views/Chat';
import LoginView from './views/Login';
import RegisterView from './views/Register';
import SettingsView from './views/Settings';

import Navbar from './components/Navbar';

import configureStore from './store';

import { HashRouter as Router, Route, Routes } from 'react-router-dom';
// import {Link} from 'react-router-dom'
// import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

const store = configureStore()

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" exact element={<HomeView />} />
            <Route path="/chat/:id" element={<ChatView />} />
            <Route path="/settings" element={<SettingsView />} />
            <Route path="/login" element={<LoginView />} />
            <Route path="/register" element={<RegisterView />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}
