import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import React from 'react'
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import Navbar from "../components/Navbar" 
import NewBlog from "../pages/New";
import Details from "../pages/Details"
import Profile from "../pages/Profile"
import UpdBlog from "../pages/UpdBlog";


const AppRouter = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/new' element={<NewBlog/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/updBlog' element={<UpdBlog/>}/>
      </Routes>
    </Router>
  )
}

export default AppRouter