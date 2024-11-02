// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [username, setUsername] = useState('');

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={username ? <Navigate to="/dashboard" /> : <Login setUsername={setUsername} />} 
        />
        <Route 
          path="/dashboard" 
          element={username ? <Dashboard username={username} /> : <Navigate to="/" />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
