import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Categories from '../../Component/Categories/Categories'
import ButtonLayout from '../../Component/ButtonLyaout/ButtonLayout'

export default function Meals() {
  const [meal, setMeal] = useState(null);
  useEffect(()=>{
    getAllMeals()
  },[])
  const fetchRandomMeal = async () => {
    try {
      const { data } = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/random.php'
      );
      setMeal(data.meals[0]); // ✅ Access the first meal in the array
    } catch (error) {
      console.error('Failed to fetch random meal:', error);
    }
  };
 
  return (
    <>
        {/* Button Layout */}
        <ButtonLayout/>

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

