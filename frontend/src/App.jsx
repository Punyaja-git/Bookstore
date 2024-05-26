import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./Home/Home"
import Courses from "./Components/Courses/Courses"
import Signup from "./Components/Signup"
import Contact from "./Components/Contact"
const App = ()=> {

  return (
    <>
    
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={<Courses/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/contact" element={<Contact/>}/>
     </Routes>
  
    </>
  )
}

export default App
