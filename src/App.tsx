import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, NotFound } from './pages';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/home-kitchens" element={<Home />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
