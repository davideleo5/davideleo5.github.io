import React from 'react';

import { Header, What, Shows, Footer } from './containers';
import { Maintenance } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <What />
      <Shows />
      <Footer />
    </div>
  )
}

export default App
