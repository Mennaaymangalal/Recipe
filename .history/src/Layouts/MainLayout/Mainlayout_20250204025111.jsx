import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarComponent from '../../Component/NavbarComponent/NavbarComponent'


export default function Mainlayout() {
  return (
    <>
   <div className="w-full flex min-h-screen">
    <div className="w-1/4 h-full">
    <div className="container">

    </div>
    
    </div>
    <div className="w-3/4 h-full">
    <div className="container">
    <Outlet/>
    </div>
    </div>      
   </div>        
      <h2>Footer</h2>
    </>
  )
}
