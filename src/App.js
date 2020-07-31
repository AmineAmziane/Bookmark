import React from 'react';
import Navbar from './navbar'
import Header from './header'
import Feature from './features'
import Extension from './extension'
import Footer from './footer'
import Accordion from './accodion'
import './App.css';
function App() {
  return (
    <div className="All">
      <div className="App">
         <Navbar />
         <Header />
         <Feature />
         <Extension />
         <Accordion />
      </div>
      <Footer />
    </div>
  );
}

export default App;
