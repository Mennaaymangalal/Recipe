import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarComponent from '../../Component/NavbarComponent/NavbarComponent'


export default function Mainlayout() {
  return (
    <>
    <div className="w-full">
      <div className="w-1/4">
      
      </div>
    </div>
      <NavbarComponent/>
      <Outlet/>
      <h2>Footer</h2>
    </>
  )
}
