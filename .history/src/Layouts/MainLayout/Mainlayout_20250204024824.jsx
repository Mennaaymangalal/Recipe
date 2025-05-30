import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarComponent from '../../Component/NavbarComponent/NavbarComponent'


export default function Mainlayout() {
  return (
    <>
   <div className="w-full min-h-screen">
    <div className="w-1/4 h">
    <NavbarComponent/>  
    </div>
    <div className="w-3/4">
    <Outlet/>
    </div>      
   </div>        
      <h2>Footer</h2>
    </>
  )
}
