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
            <NavLink to={item == "Meals" ? "/" : "/" + item.toLocaleLowerCase()}>
            {item}
            </const name = (params) => {
              
            }>
            
          </div>
        })}
        </div> 
      </div>      
    </>
  )
}

