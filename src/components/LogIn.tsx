import React, { useState } from 'react';
import './LogInPage.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { auth } from '../Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';



const LogInPage = () => {
  

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  const handleTogglePasswordVisibility = () => {
     setShowPassword(!showPassword);

  const handleLogin = async () => {
    try {
      // Use the new signInWithEmailAndPassword method
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);

      // Reset form fields after successful login
      setLoginEmail('');
      setLoginPassword('');

      alert('User successfully logged in!');
    } catch (error) {
      console.error('Error signing in:'
      // , error.message
      );
      alert('Error signing in. Please try again.');
    }
  };
  

  return (
    <section>
      < Navbar />
      <div id="login-page">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />

            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <div className="toggle-password" onClick={handleTogglePasswordVisibility}>
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </div>
          </div>
          <div className='check-me'>
            <a href="/">Forgot Password?</a>

          </div>

          <button className='ligin' type="submit">Login</button>
        </form>
      </div>
      < Footer />
    </section>
  );
  };
}

export default LogInPage
