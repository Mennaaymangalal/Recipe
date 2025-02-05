import { Button } from '@heroui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Meals() {

  const categories = [
    { label: 'All', value: 'all' },
    { label: 'Beef', value: 'beef' },
    { label: 'Breakfast', value: 'breakfast' },
    { label: 'Chicken', value: 'chicken' },
    { label: 'Dessert', value: 'dessert' },
    { label: 'Goat', value: 'goat' },
    { label: 'Lamb', value: 'lamb' },
    { label: 'Miscellaneous', value: 'miscellaneous' },
    { label: 'Pasta', value: 'pasta' },
    { label: 'Pork', value: 'pork' },
  ];

  return (
    <>
      <h1 className='text-4xl font-bold font-pacifico bg-gradient-to-r from-gradientfrom to-greadiaetto bg-clip-text text-transparent'>Learn, Cook, Eat Your Food</h1>

    
      <div className="p-4 space-y-4">
        {/* For Small Screens */}
        <div className="sm:hidden">
          <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
            {categories.map((category ,index) => (
              <option key={index} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        {/* For Larger Screens */}
        <div className="hidden sm:flex sm:space-x-4">
          {categories.map((category,index) => (
            <NavLink key={index} 
            to={`/${category.value}`}
            className={({ isActive }) =>
              `px-4 py-2 border bg-transparent border-gray-400 text-gray-700 rounded-full font-semibold font-pacifico hover:scale-105 hover:shadow-md hover:text-black ${
                isActive
                  ? 'bg-black text-white' // Active styles
                  : px-4 py-2 border bg-transparent border-gray-400 text-gray-700 rounded-full font-semibold font-pacifico hover:scale-105 hover:shadow-md hover:text-black' // Hover styles
              }`
            }
          >
            <Button>{category.label}</Button>
          </NavLink>
          ))}
        </div>
      </div>
    </>   
  )
}
