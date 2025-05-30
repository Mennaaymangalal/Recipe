import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarComponent from '../../Component/NavbarComponent/NavbarComponent'


export default function Mainlayout() {
  return (
    <>
    <div className="w-full">
      <div className="w-1/4 bg-red-50">
      <NavbarComponent/>
      </div>
      <div className="w-3/4 bg-sky-500">
      <Outlet/>
      </div>
    </div>
     
      
      <h2>Footer</h2>
    </>
  )
}
