import React from 'react'
import {  NavLink } from 'react-router-dom'

export default function NavbarComponent() {
  const menuItems = [
   "Meals",
   "Ingredients", 
   "Area"
  ]
  return (
    <>
    <div className="bg-gray-800 text-white h-screen w-64 p-4">
      <h1>Navbar Menu</h1> 
      <div className="flex flex-col gap-4 pt-10">
        {menuItems.map((item,index)=>{
          return <div key={index} className="">
            <NavLink to={item == "Meals" ? "/" : "/" + item.toLocaleLowerCase()}
             className={({ isActive }) =>
              `px-4 py-2 rounded-md w-full ${
                isActive
                  ? "bg-orange-500 text-white"
                  : "hover:bg-gray-700 text-gray-300"
              }`
            }>
            {item}
            </NavLink>
            
          </div>
        })}
        </div> 
      </div>      
    </>
  )
}

