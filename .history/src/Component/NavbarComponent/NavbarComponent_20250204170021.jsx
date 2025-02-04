import React from 'react'
import {  NavLink } from 'react-router-dom'
import logo from '../../assets/logo-BfNap0Pe.png'
import img from '../../assets/dinner.png'

export default function NavbarComponent() {
  const menuItems = [
  {name: Meals},
  { Ingredients}, 
   {Area}
  ]
  return (
    <>
    <div className=" text-white h-screen w-64 p-4">
      <img src={logo} alt="" />
      <div className="flex flex-col h-full gap-4 pt-10">  
      <img src={img} alt="" />      
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

