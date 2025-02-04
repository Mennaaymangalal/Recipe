import {HeroUIProvider} from "@heroui/react";
import { createBrowserRouter } from "react-router-dom";
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
     <
    </HeroUIProvider>
   
    </>
  )
}

export default App
