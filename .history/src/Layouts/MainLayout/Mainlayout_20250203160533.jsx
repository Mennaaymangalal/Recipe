import React from 'react'
import { Outlet } from 'react-router-dom'


export default function Mainlayout() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <h2>Footer</h2>
    </>
  )
}
