import React from 'react';

export default function ChatUsersList() {
  return (
    <div className="list-container">
      <div className="chat-search-box">
        <div className="input-group">
          <input className="form-control" placeholder="Search" />
        </div>
      </div>
      <ul className="items">
        <li onClick={() => {}} className="item">
          <div className="item-status">
            <img src="./src/assets/user-avatar_1.png" alt="Retail Admin" />
            <span className="status online"></span>
          </div>
          <p className="name-time">
            <span className="name mr-2">Some User 1</span>
          </p>
        </li>
        <li onClick={() => {}} className="item">
          <div className="item-status">
            <img src="./src/assets/user-avatar_1.png" alt="Retail Admin" />
            <span className="status online"></span>
          </div>
          <p className="name-time">
            <span className="name mr-2">Some User 2</span>
          </p>
        </li>
        <li onClick={() => {}} className="item">
          <div className="item-status">
            <img src="./src/assets/user-avatar_2.png" alt="Retail Admin" />
            <span className="status online"></span>
          </div>
          <p className="name-time">
            <span className="name mr-2">Some User 3</span>
          </p>
        </li>
        <li onClick={() => {}} className="item">
          <div className="item-status">
            <img src="./src/assets/user-avatar_2.png" alt="Retail Admin" />
            <span className="status online"></span>
          </div>
          <p className="name-time">
            <span className="name mr-2">Some User 4</span>
          </p>
        </li>
      </ul>
    </div>
  );
}
