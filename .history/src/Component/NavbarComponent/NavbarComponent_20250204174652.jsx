import React, { useState } from 'react'
import {  NavLink } from 'react-router-dom'
import logo from '../../assets/logo-BfNap0Pe.png'

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
   "Meals",
   "Ingredients", 
   "Area"
  ]
  return (
    <>
     <button
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden p-2 bg-orangeHighlight text-white fixed top-4 left-4 z-50 rounded-md"
      >
        {isOpen ? "Close" : "Menu"}
      </button>
      
    <div  className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 transition-transform duration-300 bg-gray-800 text-white h-screen w-64 p-4 fixed z-40`}
      >
      <img src={logo} alt="" />
      <div className="flex flex-col h-full gap-4 pt-10">        
        {menuItems.map((item,index)=>{
          return <div key={index} className="">
            <NavLink to={item == "Meals" ? "/" : "/" + item.toLocaleLowerCase()}
             className={({ isActive }) =>
              `px-4 py-2 rounded-md w-full block text-left hover:scale-105 transition-all border border-gray-200 ${
                isActive
                  ? "bg-orangeHighlight text-white font-semibold"
                  : "hover:bg-transparent text-black font-semibold"
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

