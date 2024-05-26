import React, { Component } from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import Course from '../Course'

export default function Courses() {
   
  return (
    <div>
      <NavBar/>
      <div className='min-h-screen'> 
      <Course/>
      </div>
      <Footer/>
    </div>
  )
}
