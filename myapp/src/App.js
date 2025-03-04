import React from 'react'
import Header from './Components/Header'
import Navber from './Components/Navber.jsx'
import {Routes,Route} from "react-router-dom"
import Body from './Components/Body'
import About from './Components/About'
import Contact from './Components/Contact'
import MTSection from './Components/Mtsection'
import Telecom from './Components/Telecom'
import Login from './Components/Login.jsx';
import Register from './Components/Register'
import { useAuth } from './context/AuthContext.jsx'
import DashboardRoutes from './DashboardRoutes.js'

function App() {
  const {user}= useAuth();
  return (
    <>
  
   
   <Header/>  
   
   {!user ? <Navber/> : <DashboardRoutes/>}
   
   <Routes>
   
      <Route index element={<Body />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/link/mtsection" element={<MTSection />} />
      <Route path="/link/telecom" element={<Telecom />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    
   </Routes>

 
   
    
   

 
 
    </>
    
  )
}

export default App
