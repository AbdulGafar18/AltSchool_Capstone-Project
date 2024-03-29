// SignIn.tsx
import React, { useState } from 'react';
import { auth } from '../Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';

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
    
      <section id="SignIn">
         <Navbar />
        <div >Sign In</div>
        
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
          < Footer />
          
         
      </section>
    
  );
};

export default SignIn;