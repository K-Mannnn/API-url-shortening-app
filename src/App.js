import './App.css';
import React from 'react';
import NavBar from './Navbar'
import Intro from './intro'
import Main from './main'
import Footer from './footer'

function App() {
  return (
    <div>
      <NavBar/>
      <Intro/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
