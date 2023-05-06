import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/basic.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutUs from './pages/AboutUs'

function App() {
  useEffect(() => {
    AOS.init({once:true});
  }, [])

  return (
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<AboutUs/>} />
            </Routes>        
    
        </BrowserRouter>
   
  )
}

export default App
