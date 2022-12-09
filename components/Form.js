import React, { useState } from "react";

export default function Form({ getRandomColor, setBgColor, bgColor }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
    if (bgColor >= "#84cc16" && bgColor <= "#ecfccb") {
      setBgColor(getRandomColor());
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (bgColor >= "#84cc16" && bgColor <= "#ecfccb") {
      setBgColor(getRandomColor());
    }
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    if (bgColor >= "#84cc16" && bgColor <= "#ecfccb") {
      setBgColor(getRandomColor());
    }
  };

  return (
    <form className="bg-{bgColor}" style={{ backgroundColor: bgColor }}>
      <label className="block p-4 text-sm">Name:</label>
      <input
        className="block w-1/2 p-4"
        type="text"
        value={name}
        onChange={handleNameChange}
      />
      <label className="block p-4 text-sm">Email:</label>
      <input
        className="block w-1/2 p-4"
        type="email"
        value={email}
        onChange={handleEmailChange}
      />
      <label className="block p-4 text-sm">Message:</label>
      <textarea
        className="block w-1/2 p-4"
        value={message}
        onChange={handleMessageChange}
      />
    </form>
  );
}
