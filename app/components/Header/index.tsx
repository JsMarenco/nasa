"use client"

import { JSX } from "react"

// Third-party dependencies
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react"

// Current project dependencies
import ThemeSwitcher from "../ThemeSwitcher"

/**
 * Header component.
 *
 * @returns JSX.Element
 */
const Header = (): JSX.Element => {
  return (
    <Navbar isBordered maxWidth="2xl">
      <NavbarBrand className="hidden md:flex gap-4">
        <p className="font-bold text-inherit">JsMarenco</p>
      </NavbarBrand>

      <NavbarContent className="flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/photo-day/">Photo day</Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="flex">
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default Header
