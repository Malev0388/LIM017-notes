import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login.js';
import Home from './components/home/Home';

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/home' element={<Home />} />        
          </Routes>
      </BrowserRouter>
  );
}

export default App;
