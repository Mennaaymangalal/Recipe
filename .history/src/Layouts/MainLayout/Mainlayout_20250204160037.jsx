import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import NavbarComponent from '../../Component/NavbarComponent/NavbarComponent'


export default function Mainlayout() {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <>  
     <div className="bg-gray-800 text-white h-screen w-64 p-4">
      <h1 className="text-2xl font-bold mb-6">MyApp</h1>
      <nav className="flex flex-col gap-4">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `px-4 py-2 rounded-md ${
                isActive
                  ? "bg-orange-500 text-white"
                  : "hover:bg-gray-700 text-gray-300"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
    {/* <NavbarComponent/>     
    <Outlet/>      
    <h2>Footer</h2> */}
    </>
  )
}

