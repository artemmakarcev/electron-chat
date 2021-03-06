import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="chat-navbar">
      <nav className="chat-navbar-inner">
        <div className="chat-navbar-inner-left">
          <button onClick={() => navigate(-1)} className="btn btn-outline-primary">
            Back
          </button>
          <button onClick={() => navigate('/settings')} className="btn btn-outline-success ml-2">
            Settings
          </button>
        </div>
        <div className="chat-navbar-inner-right">
          <span className="logged-in-user">Hi User</span>
          <button onClick={() => navigate('/login')} className="btn btn-outline-success ml-2">
            Login
          </button>
        </div>
      </nav>
    </div>
  );
}
