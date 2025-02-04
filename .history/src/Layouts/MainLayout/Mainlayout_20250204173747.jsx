import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import NavbarComponent from '../../Component/NavbarComponent/NavbarComponent'


export default function Mainlayout() {

  return (
    <>   
    <div className="flex flex-col h-screen">
    <div className="flex flex-1">
    <NavbarComponent/>     
    
    <div className="flex-1 bg-gray-100 p-6 overflow-y-auto">
     <Outlet/>      
    </div>
    </div>
    
    <h2>Footer</h2>
    </div> 
    </>
  )
}

<div className="flex flex-col h-screen">
<div className="flex flex-1"> 
  <NavbarComponent />
  <div className="flex-1 bg-gray-100 p-6 overflow-y-auto">
    <Outlet />
  </div>
</div>


<footer className="bg-gray-800 text-white text-center py-4">
  <h2>Footer</h2>
</footer>
</div> 