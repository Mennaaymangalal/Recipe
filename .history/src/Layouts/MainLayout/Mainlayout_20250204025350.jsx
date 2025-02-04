import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarComponent from '../../Component/NavbarComponent/NavbarComponent'


export default function Mainlayout() {
  return (
    <>
   <div className="ll flex min-h-screen">
    <div className="container w-1/4 h-full ">
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
