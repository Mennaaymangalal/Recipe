import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import NavbarComponent from '../../Component/NavbarComponent/NavbarComponent'
import Footer from '../../Component/Footer/Footer'


export default function Mainlayout() {

  return (
    <>   
    {/* <div className="flex flex-col h-screen">
    <div className="flex flex-1">
    <NavbarComponent/>     
    
    <div className="flex-1 bg-gray-100 p-6 overflow-y-auto">
     <Outlet/>      
    </div>
    </div>
    
   <div className="container">
   <Footer/>
   </div>
    </div>  */}
 
    <div className="grid grid-cols-1 lg:grid-cols-4">
        <div className="sm:col-span-1 sm:col-span-4 ">
        <NavbarComponent/>       
        </div>
        <div className="lg:col-span-3 sm:col-span-4 p-6">
          <Outlet/>
        </div>        
      </div>
      <div className="container">
      <Footer/>
      </div>
    </>
  )
}

