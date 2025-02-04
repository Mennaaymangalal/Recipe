import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarComponent from '../../Component/NavbarComponent/NavbarComponent'


export default function Mainlayout() {
  return (
    <>
    <div className="w-full">
      <div className="w-1/4">
      <NavbarComponent/>
      </div>
      <div className="w-"></div>
    </div>
     
      <Outlet/>
      <h2>Footer</h2>
    </>
  )
}
