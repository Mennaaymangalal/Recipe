import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarComponent from '../../Component/NavbarComponent/NavbarComponent'


export default function Mainlayout() {
  return (
    <>
    <div className="w-full min-h-screen flex bg-zinc-500">
      <div className="h-full w-1/4 bg-red-500">
      <NavbarComponent/>
  
      <Outlet/>
      <
     
      
      <h2>Footer</h2>
    </>
  )
}
