import React from 'react'
import { BrowserRouter as Router,Routes,Route,Navigate } from 'react-router-dom'
import Employee from './Components/Employee'
import Home from './Components/Home'
import Services from './Components/Services'
import AdminPanel from'./Components/AdminPanel'
import Footer from './Components/Footer'
import Header from './Components/Header'
import SignIn from './Components/SignIn'
const App=()=>{
  return(
    <>
    <Router>
      <Header/>
      <hr/>
      <Routes>
      <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/employee" element={<Employee/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/adminpanel" element={<AdminPanel/>}/>
        <Route path="/signin" element={<SignIn/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )

}

export default App