import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route, Router} from "react-router-dom";
import CreatePage from './pages/CreatePage';
import HomePage from './pages/HomePage';
import NoteDetailPage from './pages/NoteDetailPage';


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/createpage" element={<CreatePage />} />
        <Route path="/notedetail" element={<NoteDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
