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
    { label: 'Seafood', value: 'Seafood' },
    { label: 'Side', value: 'side' },
    { label: 'Starter', value: 'Starter' },
    { label: 'Vegan', value: 'Vegan' },
    { label: 'Vegetarian', value: 'Vegetarian' },
  ];

  return (
    <>
      <h1 className='text-4xl font-bold font-pacifico bg-gradient-to-r from-gradientfrom to-greadiaetto bg-clip-text text-transparent'>Learn, Cook, Eat Your Food</h1>

    
    <div className=""></div>
    </>   
  )
}
