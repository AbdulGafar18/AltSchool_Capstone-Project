import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Herosection from './components/HeroSection';
import Page2 from './components/Page2';
import  Page3  from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';
import Page6 from './components/Page6';
import SignIn from './roots/SignIn';
import  SignUpPage from './roots/SignUpPage';
import firebase from 'firebase/app';
import 'firebase/firestore';
import'firebase/auth';
import Navbar from './components/Navbar';
import Home from './components/Home';
import LoginPage from './components/LogIn';
import UrlShortenerPage from './components/UrlShortenerPage';



function  App() {
  return (
    <div className="App">
      < Navbar />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/page-2' element={ <Page2 />} />
      <Route path='/page-3' element={ <Herosection/>}> </Route>
      </Routes>
      
      

    
        
       
       
     
    
     

    </div>
  );
}

export default App;
