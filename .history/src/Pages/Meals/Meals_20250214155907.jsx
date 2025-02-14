import { Button } from '@heroui/react'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import img from '../../assets/pexels-valeriya-1639557.jpg'
import axios from 'axios'
import Categories from '../../Component/Categories/Categories'

export default function Meals() {
   const [products , setProduct] = useState([])
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
        <

      {/* Categories Layout */}
      <div className="mt-16 grid sm:grid-cols-2 px-4  lg:grid-cols-3 xl:grid-cols-4 gap-8 gap-y-28 justify-center mb-3 ">
        {
          products.map((product,index)=>{
            return <Categories key={index} product={product}/>

          })
        }

      </div>
    </>
  )
}

