import { Button } from '@heroui/react'
import React from 'react'

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
        </select>
      </div>

      {/* For Larger Screens */}
      <div className="hidden sm:flex sm:space-x-4">
        <Button className="px-4 py-2 border bg-transparent border-gray-400 text-gray-700 rounded-full ">
          All
        </Button>
        <Button className="px-4 py-2border border-gray-300 rounded-lg hover:bg-green-600">
          Beef
        </Button>
        <Button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        breakfast
        </Button>
        <Button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">
        Chicken
        </Button>
        <Button className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600">
          Dessert
        </Button>
      </div>
    </div>
  

    </>
  )
}
