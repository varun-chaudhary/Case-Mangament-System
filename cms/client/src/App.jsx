import React from 'react';
import Login from './Login.jsx';
import Signup from './Signup.jsx'; 

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
