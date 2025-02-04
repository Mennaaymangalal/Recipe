import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Mainlayout() {
  return (
    <>
      <h1>Navbar</h1>
      <Outlet/>
      <h2>Footer</h2>
    </>
  )
}
