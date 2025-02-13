import { Button } from '@heroui/react'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import img from '../../assets/pexels-valeriya-1639557.jpg'
import axios from 'axios'

export default function Meals() {
   const [products , setProduct] = useState[""]
  useEffect(()=>{
    getAllMeals()
  },[])
  async function getAllMeals(){
    const {data} = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
    setProduct(data.categories)
  }

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
    { label: 'Seafood', value: 'Seafood' },
    { label: 'Side', value: 'side' },
    { label: 'Starter', value: 'Starter' },
    { label: 'Vegan', value: 'Vegan' },
    { label: 'Vegetarian', value: 'Vegetarian' },
  ];

  return (
    <>
        {/* Button Layout */}
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

      {/* Categories Layout */}
      <div className="mt-16 grid sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-8 gap-y-28 justify-center mb-3 ">
        {
          producst.map((product,index)=>{
            return <div key={index} className=" w-fit px-10 py-4 shadow-md bg-white rounded-3xl text-center">
            <div className="">
              <img  src={product.strCategoryThumb} alt="" className='rounded-full w-40 h-40 shadow-lg -mt-20'/>
            </div>
            <div className="flex flex-col items-center ">
              <h3 className=' pt-6 font-bold text-2xl font-pacifico'>{product.strCategory}</h3>
              <h5 className=' pb-4 font-semibold text-xl font-pacifico text-green-500 line-clamp-1'>{product.strCategoryDescription}</h5>
              <Button className='px-5 py-8 font-pacifico mb-6 bg-green-500 text-white text-lg font-bold rounded-full '>
                <a href="" >View Recipe</a>
              </Button>
            </div>
          </div>
          })
        }

      </div>
    </>
  )
}

