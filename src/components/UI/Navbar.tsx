import Link from 'next/link'
import React from 'react'
import tw from 'twin.macro'
import {getServerSession} from "next-auth"

const NavbarWrapper = tw.nav`
  p-4
  flex
  justify-between
  items-center
`

const NavbarLogo = tw.div`
  text-white
  text-lg
  font-bold
`

const NavbarLinks = tw.ul`
  space-x-4
`

const NavbarLink = tw.li`
  text-white
  hover:text-blue-200
  cursor-pointer
  inline
`

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarLogo>Logo</NavbarLogo>
      <NavbarLinks>
        <NavbarLink>
          <Link href={'/About'}>About</Link>
        </NavbarLink>
        <NavbarLink>
          <Link href={'/sign-up'}>Sign Up</Link>
        </NavbarLink>
        <NavbarLink>
          <Link href={'/sign-in'}>Sign In</Link>
        </NavbarLink>
      </NavbarLinks>
    </NavbarWrapper>
  )
}

export default Navbar
