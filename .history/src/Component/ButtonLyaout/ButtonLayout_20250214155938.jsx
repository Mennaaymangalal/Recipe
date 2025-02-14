import React from 'react'
import img from '../../assets/pexels-valeriya-1639557.jpg'

export default function ButtonLayout() {
  return (
    <>
       <div className="container mx-auto p-4">
        <h1 className='text-4xl font-bold font-pacifico bg-gradient-to-r from-gradientfrom to-greadiaetto bg-clip-text text-transparent  mb-6'>
          Learn, Cook, Eat Your Food
        </h1>

        {/* Category Selection for Small Screens */}
        <div className="md:hidden flex justify-center">
          <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
            {categories.map((category, index) => (
              <option key={index} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        {/* Flex-Wrap Layout for Larger Screens */}
        <div className="hidden md:flex flex-wrap justify-start gap-x-6 gap-y-4 mt-8">
          {categories.map((category, index) => (
            <NavLink key={index} to={"/all"}>
              <Button className="px-6 py-2 border bg-transparent border-gray-400 text-gray-700 rounded-full hover:scale-105 hover:shadow-md hover:text-black font-semibold font-pacifico text-lg text-center">
                {category.label}
              </Button>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  )
}
