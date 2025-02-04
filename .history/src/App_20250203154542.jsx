import {HeroUIProvider} from "@heroui/react";
import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "./Layouts/MainLayout/Mainlayout";
import Meals from "./Pages/Meals/Meals";


function App() {
  
   createBrowserRouter([
    {path: '/' , element: <Mainlayout/> , children: [
      {index: true , element: <Meals/>}
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
