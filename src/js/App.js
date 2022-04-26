import React from 'react';

export default function App() {
  // debugger
  const title = 'Hello World';
  const enhancedTitle = title + ' - React App! Auto reload';

  const sendNotification = () => {
    electron.notificationApi.sendNotification('This is my custom message!');
  };

  return (
    <>
      <h1>{enhancedTitle}</h1>
      <button onClick={sendNotification}>Send Notifiacation</button>
    </>
  );
}
