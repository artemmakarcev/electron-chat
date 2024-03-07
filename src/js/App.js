import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import StoreProvider from './store/StoreProvider';

import HomeView from './views/Home';
import ChatView from './views/Chat';
import LoginView from './views/Login';
import SettingsView from './views/Settings';
import LoadingView from './components/shared/LoadingView';

import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';

import { listenToAuthChanges } from './actions/auth';
import { listenToConnectionChanges } from './actions/app';

function AuthRoute({ children, ...rest }) {
  const user = useSelector(({ auth }) => auth.user);
  const onlyChild = React.Children.only(children);

  return (
    <Route
      {...rest}
      element={props =>
        user ? React.cloneElement(onlyChild, { ...rest, ...props }) : <Navigate to="/" replace />
      }
    />
  );
}

const ContentWrapper = ({ children }) => <div className="content-wrapper">{children}</div>;

function ChatApp() {
  const dispatch = useDispatch();
  const isChecking = useSelector(({ auth }) => auth.isChecking);
  const isOnline = useSelector(({ app }) => app.isOnline);

  useEffect(() => {
    const unsubFromAuth = dispatch(listenToAuthChanges());
    const unsubFromConnection = dispatch(listenToConnectionChanges());

    return () => {
      unsubFromAuth();
      unsubFromConnection();
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
          <Route path="/home" element={<HomeView />} />
          <Route path="/chat/:id" element={<ChatView />} />
          <Route path="/settings" element={<SettingsView />} />
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
