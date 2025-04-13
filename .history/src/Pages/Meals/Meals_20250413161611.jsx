import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Categories from '../../Component/Categories/Categories'
import ButtonLayout from '../../Component/ButtonLyaout/ButtonLayout'

export default function Meals() {
   const [products , setProduct] = useState(null)
  useEffect(()=>{
    getAllMeals()
  },[])
  const getMultipleRandomMeals = async () => {
    try {
      const mealPromises = Array.from({ length: 5 }, () =>
        axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
      );
  
      const results = await Promise.all(mealPromises);
      const meals = results.map(res => res.data.meals[0]);
      setProduct(meals);
    } catch (err) {
      console.error('Error fetching multiple meals:', err);
    }
  };
 
  return (
    <>
        {/* Button Layout */}
        <ButtonLayout/>

      {/* Categories Layout */}
      <div className="mt-16 grid sm:grid-cols-2 px-4  lg:grid-cols-3 xl:grid-cols-4 gap-8 gap-y-28 justify-center mb-3 ">
        {
          products?.map((product,index)=>{
            return <Categories key={index} product={product}/>

          })
        }

      </div>
    </>
  )
}

