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
import Blog from './pages/Blog'
import Login from './pages/Login'
import MainApp from './pages/MainApp'

function App() {
  useEffect(() => {
    AOS.init({once:true});
  }, [])


  return (
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<AboutUs/>} />
              <Route path="/blog" element={<Blog/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/app" element={<MainApp/>} />
              <Route path="/app/gallery" element={<MainApp/>} />

            </Routes>        
    
        </BrowserRouter>
   
  )
}

export default App
