// src/components/Login.js
import React, { useState } from 'react';

function Login({ setUsername }) {
  const [input, setInput] = useState('');

  const handleLogin = () => {
    if (input) setUsername(input);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Login</h2>
      <input 
        type="text" 
        placeholder="Enter username" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
