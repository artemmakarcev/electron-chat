import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../api/auth';

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(({ auth }) => auth.user);
  return (
    <div className='chat-navbar'>
      <nav className='chat-navbar-inner'>
        <div className='chat-navbar-inner-left'>
          <button onClick={() => navigate(-1)} className='btn btn-outline-primary'>
            Back
          </button>
          <button onClick={() => navigate('/settings')} className='btn btn-outline-success ml-2'>
            Settings
          </button>
        </div>
        <div className='chat-navbar-inner-right'>
          <span className='logged-in-user'>Hi User</span>
          {/*           <button onClick={() => navigate('/')} className="btn btn-outline-success ml-2">
            Login
          </button> */}
          <Link to='/' className='btn btn-outline-success ml-2'>
            Login
          </Link>
          {user && (
            <button onClick={() => dispatch(logout())} className='btn btn-outline-danger ml-2'>
              Logout
            </button>
          )}
        </div>
      </nav>
    </div>
  );
}
