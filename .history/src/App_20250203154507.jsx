import {HeroUIProvider} from "@heroui/react";
import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "./Layouts/MainLayout/Mainlayout";


function App() {
  
   createBrowserRouter([
    {path: '/' , element: <Mainlayout/> , children}
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
