import React, { useEffect } from 'react';

import { Provider } from 'react-redux';

import HomeView from './views/Home';
import ChatView from './views/Chat';
import LoginView from './views/Login';
import SettingsView from './views/Settings';

import Navbar from './components/Navbar';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
// import {Link} from 'react-router-dom'
// import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import configureStore from './store';
import { listenToAuthChanges } from './actions/auth';
const store = configureStore();

export default function App() {
  useEffect(() => {
    store.dispatch(listenToAuthChanges());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className='content-wrapper'>
          <Routes>
            <Route path='/' exact element={<LoginView />} />
            <Route path='/home' element={<HomeView />} />
            <Route path='/chat/:id' element={<ChatView />} />
            <Route path='/settings' element={<SettingsView />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}
