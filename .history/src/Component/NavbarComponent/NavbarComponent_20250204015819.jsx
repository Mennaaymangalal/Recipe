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
       <Navbar onMenuOpenChange={setIsMenuOpen} isBordered>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <img src={logo} className='w-16 h-16' alt="" />         
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
       {
        menuItems.map((item , index)=>{
          return  <NavbarItem key={index}>
          <NavLink color="foreground" to={item === "Meals" ? "/" : "/" + item }>     
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
  <path d="M445.358 551.026 384.352 681.112 355.677 19.95 157.648 53.924-.028 12.967 4.413 19.714 15.418 416.82 244.271-215.2 391 1.475-1.906 21.147 242.07 68.573-24.184-17.835 50.522-4.474 141.82 12.21 661.14.04-37c-.24-84.57-3.977-89.68 14.252 57.413 3.69 2.755 15.6-6.006 6.41-57.17-.622-.09 4.37c-4 84.57-9.377 117.124 14.252 57.413 3.69 2.755 15.6-6.006 6.41-57.17-.622-.09 4.37c-4 84.57-9.377 117.124 14.252 57.413 3.69 2.755 15.6-6.006 6.41-57.17-.622-.09 4.37c-4 84.57-9.377 117.124 14.252 57.413 3.69 2.755 15.6-6.006 6.41-57.17-.622-.09 4.37c-4 84.57-9.377 117.124 14.252 57.413 3.69 2.755 15.6-6.006 6.41-57.17-.622-.09 4.37c-4 84.57-9.377 117.124 14.252 57.413 3.69 2.755 15.6-6.006 6.41-57.17-.622-.09 4.37c-4 84.57-9.377 117.124 14.252 57.413 3.69 2.755 15.6-6.006 6.41-57.17-.622-.09 4.37c-4 84.57-9.377 117.124 14.252 57.413 3.69 2.755 15.6-6.006 6.41-57.17-.622-.09 4.37c-4 84.57-9.377 117.124 14.252 57.413 3.69 2.755 15.6-6.006 6.41-57.17-.622-.09 4.37c-4 84.57-9.377 

          {item}       
          </NavLink>
        </NavbarItem>
        })
       }
        
      </NavbarContent>

    

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <NavLink
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
