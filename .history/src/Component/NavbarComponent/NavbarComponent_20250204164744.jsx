import React from 'react'
import {  NavLink } from 'react-router-dom'
import logo from '../../assets/logo-BfNap0Pe.png'

export default function NavbarComponent() {
  const menuItems = [
   "Meals",
   "Ingredients", 
   "Area"
  ]
  return (
    <>
    <div className=" text-white h-screen w-64 p-4">
      <img src={logo} alt="" />
      <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-6 h-6 text-gray-700"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5c-1.16 0-2.08.42-2.84 1.17M6 6c-.55-.45-1-.96-1.43-1.42M12 19.5c1.16 0 2.08-.42 2.84-1.17M18 18c.55.45 1 .96 1.43 1.42M12 12.75c-1.8 0-3.25 1.45-3.25 3.25s1.45 3.25 3.25 3.25 3.25-1.45 3.25-3.25-1.45-3.25-3.25-3.25z"
        />
      </svg>
    </div>
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

