import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarComponent from '../../Component/NavbarComponent/NavbarComponent'


export default function Mainlayout() {
  return (
    <>
    <div className="grid flex">
    <NavbarComponent/>
    <Outlet/>
    </div>
     
      
      <h2>Footer</h2>
    </>
  )
}
