import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarComponent from '../../Component/NavbarComponent/NavbarComponent'


export default function Mainlayout() {
  return (
    <>
  
    <NavbarComponent/>  
   
    <Outlet/>
    </div>      
   </div>        
      <h2>Footer</h2>
    </>
  )
}

