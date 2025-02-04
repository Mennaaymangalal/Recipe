import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarComponent from '../../Component/NavbarComponent/NavbarComponent'


export default function Mainlayout() {
  return (
    <>
    <div className="w-full flex">
      <div className="w-1/4 bg-red-500">
      <NavbarComponent/>
      </div>
      <div className="w-3/4 bg-sky-500">
      <Outlet/>
      </div>
    </div>
     
    <div class="bg-white shadow-lg rounded-xl overflow-hidden text-center">
        <img src="burek.jpg" alt="Burek" class="w-full h-40 object-cover">
        <div class="p-4">
          <h3 class="text-lg font-bold mb-2">Burek</h3>
          <p class="text-sm text-gray-500 mb-4">Croatian</p>
          <button class="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
            View Recipe
          </button>
        </div>
      </div>

      
      <h2>Footer</h2>
    </>
  )
}
