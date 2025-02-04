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
   <div className=""></div> 
    </>
  )
}
