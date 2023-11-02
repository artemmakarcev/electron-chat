import React from 'react';

export default function ChatMessagesList() {
  return (
    <div className='chat-container'>
      <ul className='chat-box chatContainerScroll'>
        <li className='chat-left'>
          <div className='chat-avatar'>
            <img src='./src/assets/user-avatar_1.png' alt='Retail Admin' />
            <div className='chat-name'>Test User 1</div>
          </div>
          <div className='chat-text-wrapper'>
            <span className='chat-text'>Some message 1</span>
            <span className='chat-spacer'></span>
            <div className='chat-hour'>5h ago</div>
          </div>
        </li>
        <li className='chat-right'>
          <div className='chat-avatar'>
            <img src='./src/assets/user-avatar_2.png' alt='Retail Admin' />
            <div className='chat-name'>Test User 2</div>
          </div>
          <div className='chat-text-wrapper'>
            <span className='chat-text'>Some message 2</span>
            <span className='chat-spacer'></span>
            <div className='chat-hour'>5h ago</div>
          </div>
        </li>
        <li className='chat-left'>
          <div className='chat-avatar'>
            <img src='./src/assets/user-avatar_1.png' alt='Retail Admin' />
            <div className='chat-name'>Test User 3</div>
          </div>
          <div className='chat-text-wrapper'>
            <span className='chat-text'>Some message 3</span>
            <span className='chat-spacer'></span>
            <div className='chat-hour'>5h ago</div>
          </div>
        </li>
        <li className='chat-right'>
          <div className='chat-avatar'>
            <img src='./src/assets/user-avatar_2.png' alt='Retail Admin' />
            <div className='chat-name'>Test User 4</div>
          </div>
          <div className='chat-text-wrapper'>
            <span className='chat-text'>Some message 4</span>
            <span className='chat-spacer'></span>
            <div className='chat-hour'>5h ago</div>
          </div>
        </li>
      </ul>
    </div>
  );
}
