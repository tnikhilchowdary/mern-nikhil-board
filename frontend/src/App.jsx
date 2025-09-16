import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route, Router} from "react-router-dom";
import CreatePage from './pages/CreatePage';
import HomePage from './pages/HomePage';




function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/" element={<CreatePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
