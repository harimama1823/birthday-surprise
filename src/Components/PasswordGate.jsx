import React, { useState } from 'react';

function PasswordGate({ onSuccess }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === 'mama') {
      onSuccess(true);
    } else {
      setError('Incorrect password, please try again.');
    }
  };

  return (
    <div className="password-form">
      <h1>Welcome ra Kukkaluu..!!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Nick name telusu gaa !"
          required
        />
        {error && <p style={{ color: 'black' }}>{error}</p>}
        <button type="submit">Clickku Cheyyandoo..!!</button>
      </form>
    </div>
  );
}

export default PasswordGate;
