import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarComponent from '../../Component/NavbarComponent/NavbarComponent'


export default function Mainlayout() {
  return (
    <>
    <div className="w-full min-h-screen flex bg">
      <div className="h-full w-1/4 bg-red-500">
      <NavbarComponent/>
      </div>
      <div className=" h-full w-3/4 bg-sky-500">
      <Outlet/>
      </div>
    </div>
     
      
      <h2>Footer</h2>
    </>
  )
}
