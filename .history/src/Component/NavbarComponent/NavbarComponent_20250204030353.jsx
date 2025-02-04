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
  <div className="flex flex-col pt-20 gap-4">
    {/* Top Navbar Content */}
    <NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarBrand>
        <img src={logo} className="w-16 h-16" alt="Logo" />
      </NavbarBrand>
    </NavbarContent>

    {/* Menu Items */}
    <NavbarContent className="hidden sm:flex justify-center">
      <div className="flex flex-col gap-4 items-center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <NavLink
              className="text-gray-700 hover:text-gray-900 text-lg"
              to={item === "Meals" ? "/" : "/" + item}
            >
              {item}
            </NavLink>
          </NavbarItem>
        ))}
      </div>
    </NavbarContent>
  </div>
</Navbar>


    

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
