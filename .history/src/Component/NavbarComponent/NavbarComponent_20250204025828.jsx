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
      <div className="grid grid-flow-col gap-5 flex">
      {
        menuItems.map((item , index)=>{
          return  <NavbarItem key={index}>
          <NavLink color="foreground" to={item === "Meals" ? "/" : "/" + item }>     
          {item}       
          </NavLink>
        </NavbarItem>
        })
       }
      </div>
        
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
