// LoginForm.js
import React, { useState } from 'react';
const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform authentication logic (you can add validation and backend integration)
    if (username === 'user' && password === 'password') {
      onLogin();
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="login-form">
      <h3>STADLEEST TOY STORE</h3>
      <h7>     LOGIN     </h7>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default LoginForm;
