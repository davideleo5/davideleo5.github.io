import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Shows } from './pages/Shows';
import { PageNotFound } from './pages/PageNotFound';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/spettacoli' element={<Shows />}/>
        <Route path='*' element={<PageNotFound />}/>
      </Routes>
    </Router>
  )
}

export default App
