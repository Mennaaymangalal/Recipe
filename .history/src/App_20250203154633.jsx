import {HeroUIProvider} from "@heroui/react";
import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "./Layouts/MainLayout/Mainlayout";
import Meals from "./Pages/Meals/Meals";
import Ingredients from "./Pages/Ingredients/Ingredients";


function App() {
  
   createBrowserRouter([
    {path: '/' , element: <Mainlayout/> , children: [
      {index: true , element: <Meals/>},
      {path:"/ingredients" , element: <Ingredients/>},
      
    ]}
   ])

  return (
    <>
    <HeroUIProvider>
    <h1>app</h1>
    </HeroUIProvider>
   
    </>
  )
}

export default App
