import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarComponent from '../../Component/Navbar/NavbarComponent'


export default function Mainlayout() {
  return (
    <>
      <NavbarComponent/>
      <Outlet/>
      <h2>Footer</h2>
    </>
  )
}
