import React, { useState } from 'react';
import { createTimestamp } from '../utils/time';

export default function Messenger({ onSubmit }) {
  const [value, setValue] = useState('');

  const onKeyPress = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      sendMessage();
      setValue('');
    }
  };

  const sendMessage = () => {
    if (value.trim() === '') return;

    const message = {
      content: value.trim(),
      timestamp: createTimestamp(),
    };

    onSubmit(message);
  };

  return (
    <div className="chat-input form-group mt-3 mb-0">
      <textarea
        onChange={event => setValue(event.target.value)}
        onKeyPress={onKeyPress}
        value={value}
        className="form-control"
        row="3"
        placeholder="Enter message..."
      ></textarea>
    </div>
  );
}
