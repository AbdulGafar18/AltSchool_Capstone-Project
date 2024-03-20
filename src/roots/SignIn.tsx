// SignIn.tsx
import React, { useState } from 'react';
import { auth } from '../Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Navbar from '../components/Navbar'; // Update this import

const SignIn = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

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
    <div className='signin-section'>
      <section>
        <div id="SignIn">Sign In</div>
        <div>
          <h1>Welcome to the Home Page</h1>
          {/* Login Form */}
          <div>
            <label>
              Email:
              <input type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
            </label>
            <label>
              Password:
              <input type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
            </label>
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;