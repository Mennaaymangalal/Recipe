barMenuToggle
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
              ? "bg-orangeHighlight overflow-hidden text-white h-full flex items-center justify-center rounded-lg"
              : "bg-transparent text-black  h-full flex items-center justify-center rounded-lg"
          }
            
          >     
          <Button className='font-bold text-black bg-transparent border border-gray-300 px-24 py-3 rounded-lg  hover:scale-105 transition-all duration-200'>
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
