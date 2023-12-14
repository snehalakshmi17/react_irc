// App.js
import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import './assets/styles.css'

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div className="app">
      {loggedIn ? (
        <h1>Welcome to the Toy Store!</h1>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;

