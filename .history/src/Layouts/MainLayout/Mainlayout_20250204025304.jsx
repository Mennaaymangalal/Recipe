import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarComponent from '../../Component/NavbarComponent/NavbarComponent'


export default function Mainlayout() {
  return (
    <>
   <div className="w-full flex min-h-screen">
    <div className="container w-1/4 h-full bg-sk">
    <NavbarComponent/>  
    </div>
    <div className="container w-3/4 h-full ps-8 bg-red-600">
    <Outlet/>
    </div>      
   </div>        
      <h2>Footer</h2>
    </>
  )
}
