import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarComponent from '../../Component/NavbarComponent/NavbarComponent'


export default function Mainlayout() {
  return (
    <>
    <div className="grid grid-cols-2 g-1">
   <div className=""> <NavbarComponent/></div>
   <div className="colspan"> <Outlet/></div>
    </div>  
      
      <h2>Footer</h2>
    </>
  )
}
