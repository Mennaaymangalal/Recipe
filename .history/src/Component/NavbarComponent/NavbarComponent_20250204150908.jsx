import React from 'react'
import logo from '../../assets/logo-BfNap0Pe.png'

import {
    Navbar ,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Button,  
    
  } from "@heroui/react";
import {  NavLink } from 'react-router-dom';
export default function NavbarComponent() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    
  const menuItems = [
    "Meals",
    "Ingredients",
    "Area",   
  ];

  return (
    <>
       <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} >
     <div className="flex flex-col pt-80 gap-4">
     <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className='hidden sm:flex'>
          <img src={logo} className='' alt="" />         
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <div className="flex flex-col gap-4 items-center h-full">
      {
        menuItems.map((item , index)=>{
          return  <NavbarItem key={index}>
          <NavLink color="foreground"  aria-current="page" to={item === "Meals" ? "/" : "/" + item.toLocaleLowerCase()}
          
          className={({ isActive }) =>
            isActive
              ? "bg-orangeHighlight hover:bg-orangeHighlight text-white w-full h-full flex items-center justify-center rounded-lg"
              : "bg-transparent text-black  w-full h-full flex items-center justify-center rounded-lg"
          }
            
          >     
          <Button className='bg-transparent border border-gray-300 px-24 py-3 rounded-lg  hover:scale-105 transition-all duration-200'>
          {item}     
          </Button>  
          </NavLink>
        </NavbarItem>
        })
       }
      </div>        
      </NavbarContent>
     </div>
    

      <NavbarMenu >
      <img src={logo} className='' alt="" />   
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <NavLink onClick={()=>{setIsMenuOpen(false)}}
              className="w-full"
              color={"foreground"}
              to={item === "Meals" ? "/" : "/" + item }
              size="lg"
            >
              {item}
            </NavLink>          
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>  
    </>
  )
}
