import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import NavbarComponent from '../../Component/NavbarComponent/NavbarComponent'


export default function Mainlayout() {

  return (
    <>    
    <div className="flex flex-col h-screen">
    <NavbarComponent/>     
    </div>
    <div className="flex-1 bg-gray-100 p-6">
    <Outlet/>      
    </div>
    
    <h2>Footer</h2>
    </>
  )
}

