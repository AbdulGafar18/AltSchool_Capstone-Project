import './App.css';
import Footer from './components/Footer';
import Herosection from './components/HeroSection';
import Page2 from './components/Page2';
import  Page3  from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';
import Page6 from './components/Page6';
import  SignUpPage from './roots/SignUpPage';
import Navbar from './components/Navbar';
import UrlShortenerPage from './components/UrlShortenerPage';
import SignIn from './roots/SignIn';



function  App () {




  return (
    <div className="App">
     
      <Navbar/>
      
      <Herosection />
      < UrlShortenerPage />
      < Page2 />
     < Page3 />
     < Page4 />
     < Page5 />
     < Page6 />
     < Footer />
     
 < SignIn />
     < SignUpPage />
     

    
        
       

    </div>
  );
}

export default App;
