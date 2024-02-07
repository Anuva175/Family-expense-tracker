import React, { useState } from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const nav=useNavigate();
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    // Signup logic
    if (password !== confirmPassword) {
      alert('Passwords do not match. Please try again.');
    } else {
      // Perform signup action (e.g., send data to backend)
      alert(`Welcome, ${username}! You have successfully signed up.`);
      nav('/et');
    }
  };

  return (
    <div className='logbody'>
      <div className="signup-container">
        <h2>Sign Up</h2>
        <div className="input-group">
          <input
            type="text"
            className='user'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Username'
          />
          <input
            type="password"
            className='user'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
          />
          <input
            type="password"
            className='user'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder='Confirm Password'
            
          />
        </div>
        <div className="button-group">
          <button className="signup" onClick={handleSignup}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
