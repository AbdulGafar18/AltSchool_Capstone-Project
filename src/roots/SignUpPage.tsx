import React, { useState } from "react";
import { auth } from "../Firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import "./SignUpPage.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const SignUpPage = () => {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agreed, setAgreed] = useState(false);
  
    const handleSignUp = async (e: React.FormEvent): Promise<void> => {
      e.preventDefault();
      try {
        if (!agreed) {
          console.error('Please agree to the terms and privacy policy.');
          return;
        }
  
        if (password !== confirmPassword) {
          console.error('Passwords do not match.');
          return;
        }
  
        await createUserWithEmailAndPassword(auth, email, password);
        setUserName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setAgreed(false);
      } catch (error) {
        console.error('Error signing up:', error);
      }
    };
  
  return (
    <form onSubmit={handleSignUp}>
      <div id="SignUp">
      < Navbar />
      <div className="group13">
        <div className="Frame1000001723">
          <div className="Frame1000001722">
            <div className="up-text"> Sign up with: </div>
            <div className="Frame1000001720">
              <img className="goggle" src="./assets/Google.png" alt="google" />
              <img className="apple" src="./assets/Apple.png" alt="apple" />
            </div>
            <div className="Frame1000001721">
              <img className="vector7" src="./assets/Vector 7.png" alt="Vector7" />
              <div className="or-txt">or</div>
              <img className="vector7" src="./assets/Vector 7.png" alt="Vector7" />
            </div>
          </div>
          <div className="inputs">
            <div className="input">
              <input className="min" 
              type="text"
               placeholder="Username"
               name="Username"
               value={userName}
               onChange={(e) => setUserName(e.target.value)}
               />
            </div>

            <div className="input">
              <input className="min"
               type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                
                 />
            </div>

            <div className="input">
              <input className="min"
               type="password" 
               placeholder="Password"
               value={password}
        onChange={(e) => setPassword(e.target.value)}
               
              />
            </div>
          </div>
        </div>
        <div className="group10">
          <div className="input">
            <input
              className="min"
              type="password"
              placeholder="Confirm password"
              name="password"
              value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
              
            />
          </div>
        </div>
        <div className="charac">
          6 or more characters, one number, one uppercase & one lower case.{" "}
        </div>
        <div><button className="embtn" type="submit">Sign up with Email</button></div>
        <div className="group14">
          <div className="alacc">Already have an account?</div>
          <div className="lg"> Login</div>
        </div>
        <div className="spn">
          <div className="bysig">By signing up, you agree to</div>
          <div className="trms">
            <strong>Sciccor's </strong>Terms of Service, Privacy Policy
            <strong>and</strong> Acceptable Use Policy.{" "}
          </div>
        </div>
      </div>
      < Footer />
    </div>
    </form>
  );
  };

export default SignUpPage;
