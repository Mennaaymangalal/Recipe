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
     <div className="flex flex-col pt-40 gap-4">
     <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand >
          <img src={logo} className='' alt="" />         
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <div className="flex flex-col gap-4 items-center">
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
     </div>

    

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
            <img src={logo} className='' alt="" />   
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>  
    </>
  )
}
