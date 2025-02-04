import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarComponent from '../../Component/NavbarComponent/NavbarComponent'


export default function Mainlayout() {
  return (
    <>
   <div className="flex min-h-screen">
    <div className=" w-1/4 h-full ">
    <NavbarComponent/>  
    </div>
    <div className="w-3/4 h-full p-4 bg-red-600">
    <Outlet/>
    </div>      
   </div>        
      <h2>Footer</h2>
    </>
  )
}

<div className="flex min-h-screen">
{/* Sidebar */}
<div className="w-1/4 bg-red-500">
  <NavbarComponent />
</div>

{/* Main Content */}
<div className="w-3/4 bg-sky-500 p-4">
  <Outlet />
</div>
</div>

{/* Footer */}
<footer className="bg-gray-800 text-white text-center py-4">
Footer
</footer>