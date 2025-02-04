import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import NavbarComponent from '../../Component/NavbarComponent/NavbarComponent'


export default function Mainlayout() {

  return (
    <>    
    <div className=" className="flex""></div>
    <NavbarComponent/>     
    <Outlet/>      
    <h2>Footer</h2>
    </>
  )
}

