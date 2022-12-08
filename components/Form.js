import React, { useState } from 'react';

export default function Form({ getRandomColor, setBgColor, bgColor }) {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
    setBgColor(getRandomColor());
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setBgColor(getRandomColor());
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    setBgColor(getRandomColor());
  };
  
    return (
      <form style={{backgroundColor: bgColor}}>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange} />
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
        <label>Message:</label>
        <textarea value={message} onChange={handleMessageChange} />
      </form>
    );
  };

