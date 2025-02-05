import { Button } from '@heroui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Meals() {

  
  return (
    <>
      <h1 className='text-4xl font-bold font-pacifico bg-gradient-to-r from-gradientfrom to-greadiaetto bg-clip-text text-transparent'>Learn, Cook, Eat Your Food</h1>

    
    <div className="p-4 space-y-4">
      {/* For Small Screens */}
      <div className="sm:hidden">
        <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="all">All</option>
          <option value="beef">Beef</option>
          <option value="breakfast">Breakfast</option>
          <option value="chicken">Chicken</option>
          <option value="dessert">Dessert</option>

          <option value="all">Goat</option>
          <option value="beef">Lamb</option>
          <option value="breakfast">Miscallaneous</option>
          <option value="chicken">Pasta</option>
          <option value="dessert">Pork</option>
        </select>
      </div>

      {/* For Larger Screens */}
      <div className="hidden sm:flex sm:space-x-4">
        <NavLink>
        <Button className="px-4 py-2 border bg-transparent border-gray-400 text-gray-700 rounded-full hover:scale-105 hover:shadow-md hover:text-black font-semibold font-pacifico">
          All
        </Button>
        </NavLink>
        <NavLink>
        <Button className="px-4 py-2 border bg-transparent border-gray-400 text-gray-700 rounded-full hover:scale-105 hover:shadow-md hover:text-black font-semibold font-pacifico">
          Beef
        </Button>
        </NavLink>
       <NavLink>
       <Button className="px-4 py-2 border bg-transparent border-gray-400 text-gray-700 rounded-full hover:scale-105 hover:shadow-md hover:text-black font-semibold font-pacifico">
        breakfast
        </Button>
       </NavLink>
       <NavLink>
       <Button className="px-4 py-2 border bg-transparent border-gray-400 text-gray-700 rounded-full hover:scale-105 hover:shadow-md hover:text-black font-semibold font-pacifico">
        Chicken
        </Button>
       </NavLink>
       <NavLink>
       <Button className="px-4 py-2 border bg-transparent border-gray-400 text-gray-700 rounded-full hover:scale-105 hover:shadow-md hover:text-black font-semibold font-pacifico">
          Dessert
        </Button>
       </NavLink>


       <NavLink>
        <Button className="px-4 py-2 border bg-transparent border-gray-400 text-gray-700 rounded-full hover:scale-105 hover:shadow-md hover:text-black font-semibold font-pacifico">
         Goat
        </Button>
        </NavLink>
        <NavLink>
        <Button className="px-4 py-2 border bg-transparent border-gray-400 text-gray-700 rounded-full hover:scale-105 hover:shadow-md hover:text-black font-semibold font-pacifico">
          Lamb
        </Button>
        </NavLink>
       <NavLink>
       <Button className="px-4 py-2 border bg-transparent border-gray-400 text-gray-700 rounded-full hover:scale-105 hover:shadow-md hover:text-black font-semibold font-pacifico">
        Miscallaneous
        </Button>
       </NavLink>
       <NavLink>
       <Button className="px-4 py-2 border bg-transparent border-gray-400 text-gray-700 rounded-full hover:scale-105 hover:shadow-md hover:text-black font-semibold font-pacifico">
        Pasta
        </Button>
       </NavLink>
       <NavLink>
       <Button className="px-4 py-2 border bg-transparent border-gray-400 text-gray-700 rounded-full hover:scale-105 hover:shadow-md hover:text-black font-semibold font-pacifico">
          Pork
        </Button>
       </NavLink>
      </div>
    </div>
  

    </>
  )
}
