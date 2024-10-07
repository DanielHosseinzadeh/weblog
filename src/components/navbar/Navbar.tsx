'use client'
import {Navbar as Nav, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import Links from "./links/Links";
import Link from "next/link";
import { useState } from "react";

function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Nav isBlurred className="bg-[rgb(233, 233,233)]" maxWidth="full">
    <NavbarBrand>
      
      <p className="font-bold text-inherit">ACME</p>
    </NavbarBrand>
    <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <Links/>
    </NavbarContent>
    <NavbarContent justify="end">
      <NavbarItem>
        <Button as={Link} color="secondary" href="/login" variant="flat">
          Sign in
        </Button>
      </NavbarItem>
      
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        
    </NavbarContent>
    <NavbarMenu>
        
          <NavbarMenuItem>
            <Links/>
          </NavbarMenuItem>
        
      </NavbarMenu>
  </Nav>
  )
}

export default Navbar