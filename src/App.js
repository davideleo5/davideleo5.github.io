import React from 'react';

import { Header, What, Shows, Footer } from './containers';
import { Maintenance, CTA, Social, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Maintenance />
      {/* <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <What />
      <Shows />
      <CTA />
      <Social />
      <Footer /> */}
    </div>
  )
}

export default App
