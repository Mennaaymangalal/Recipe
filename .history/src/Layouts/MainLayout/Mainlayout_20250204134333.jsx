import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarComponent from '../../Component/NavbarComponent/NavbarComponent'


export default function Mainlayout() {
  return (
    <>
   <div className="flex min-h-screen">
    {/* Sidebar */}
    <div className=" w-1/4  ">
    <NavbarComponent/>  
    </div>
    <div className="w-3/4  p-4 bg-red-600">
    <Outlet/>
    </div>      
   </div>        
      <h2>Footer</h2>
    </>
  )
}

