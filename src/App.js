import React ,{useState} from 'react';
import axios from 'axios';
import './app.css';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/footer';

function App() {

 
  
    return (
      <div>
        <Navbar />
      <Home />
      <Main />
    <Footer />
      </div>

     );
}

export default App;
