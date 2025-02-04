import {HeroUIProvider} from "@heroui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainlayout from "./Layouts/MainLayout/Mainlayout";
import Meals from "./Pages/Meals/Meals";
import Ingredients from "./Pages/Ingredients/Ingredients";
import Area from "./Pages/Area/Area";


function App() {
  
   createBrowserRouter([
    {path: '/' , element: <Mainlayout/> , children: [
      {index: true , element: <Meals/>},
      {path:"/ingredients" , element: <Ingredients/>},
      {path:"area" , element:<Area/>},
    ]}
   ])

  return (
    <>
    <HeroUIProvider>
     <RouterProvider router={}/>
    </HeroUIProvider>
   
    </>
  )
}

export default App
