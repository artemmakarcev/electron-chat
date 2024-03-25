import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import StoreProvider from './store/StoreProvider';

import HomeView from './views/Home';
import ChatView from './views/Chat';
import ChatCreate from './views/ChatCreate';
import LoginView from './views/Login';
import SettingsView from './views/Settings';
import LoadingView from './components/shared/LoadingView';

import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';

import { listenToAuthChanges } from './actions/auth';
import { listenToConnectionChanges } from './actions/app';
import { checkUserConnection } from './actions/connection';
import { loadInitialSettings } from './actions/settings';

function AuthRoute({ children }) {
  const user = useSelector(({ auth }) => auth.user);

  return user ? children : <Navigate to="/" />;
}

const ContentWrapper = ({ children }) => <div className="content-wrapper">{children}</div>;

function ChatApp() {
  const dispatch = useDispatch();
  const isChecking = useSelector(({ auth }) => auth.isChecking);
  const isOnline = useSelector(({ app }) => app.isOnline);

  useEffect(() => {
    dispatch(loadInitialSettings());
    const unsubFromAuth = dispatch(listenToAuthChanges());
    const unsubFromConnection = dispatch(listenToConnectionChanges());
    const unsubFromUserConnection = dispatch(checkUserConnection());

    return () => {
      unsubFromAuth();
      unsubFromConnection();
      unsubFromUserConnection();
    };
  }, [dispatch]);

  if (!isOnline) {
    return (
      <LoadingView message="Application has been disconnected from the internet. Please reconnect..." />
    );
  }

  if (isChecking) return <LoadingView />;

  return (
    <HashRouter>
      <ContentWrapper>
        <Routes>
          <Route path="/" exact element={<LoginView />} />
          <Route
            path="/home"
            element={
              <AuthRoute>
                <HomeView />
              </AuthRoute>
            }
          />
          <Route
            path="/chat/:id"
            element={
              <AuthRoute>
                <ChatView />
              </AuthRoute>
            }
          />
          <Route
            path="/chatCreate"
            element={
              <AuthRoute>
                <ChatCreate />
              </AuthRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <AuthRoute>
                <SettingsView />
              </AuthRoute>
            }
          />
        </Routes>
      </ContentWrapper>
    </HashRouter>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <ChatApp />
    </StoreProvider>
  );
}
