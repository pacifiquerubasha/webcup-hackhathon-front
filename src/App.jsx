import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/basic.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

// import Home from "./pages/Home"
// import UniqueBlog from './pages/UniqueBlog'
// import Contact from './pages/Contact'
// import UniqueDream from './pages/UniqueDream'
// import AboutUs from './pages/AboutUs'
// import Blog from './pages/Blog'
// import Login from './pages/Login'
// import MainApp from './pages/MainApp'
// import DreamScience from './pages/DreamScience'

const Home = React.lazy(() => import('./pages/Home'));
const AboutUs = React.lazy(() => import('./pages/AboutUs'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Login = React.lazy(() => import('./pages/Login'));
const MainApp = React.lazy(() => import('./pages/MainApp'));
const DreamScience = React.lazy(() => import('./pages/DreamScience'));
const UniqueBlog = React.lazy(() => import('./pages/UniqueBlog'));
const Contact = React.lazy(() => import('./pages/Contact'));
const UniqueDream = React.lazy(() => import('./pages/UniqueDream'));

function App() {
  useEffect(() => {
    AOS.init({once:true});
  }, [])


  return (

      <React.Suspense fallback={
          <div className='w-screen h-screen flex justify-center items-center'>
            <div className='loader'></div>
          </div>
        } 
      >
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<AboutUs/>} />
                <Route path="/blog" element={<Blog/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/blog/:id" element={<UniqueBlog/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/app" element={<MainApp/>} />
                <Route path="/app/explain-dreams" element={<DreamScience/>} />
                <Route path="/app/dream/:id" element={<UniqueDream/>} />
                <Route path="*" element={<Home/>} />

              </Routes>        
      
          </BrowserRouter>

      </React.Suspense>
   
  )
}

export default App
