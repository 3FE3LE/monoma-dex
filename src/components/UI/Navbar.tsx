import Link from 'next/link'
import React from 'react'
import tw from 'twin.macro'
import { getServerSession } from 'next-auth'

const NavbarWrapper = tw.nav`
  p-5
  flex
  justify-between
  items-center
  shadow-md
`

const NavbarLogo = tw.div`
  text-white
  text-4xl
  font-bold
`

const NavbarLinks = tw.ul`
space-x-2  
sm:space-x-5
  
`

const NavbarLink = tw.li`
  text-white
  transition-all
  hover:text-green-800
  cursor-pointer
  inline
`

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarLogo>PKMdex</NavbarLogo>
      <NavbarLinks>
        <NavbarLink>
          <Link href={'/About'}>About</Link>
        </NavbarLink>
        <NavbarLink>
          <Link href={'/sign-in'}>Sign In</Link>
        </NavbarLink>
      </NavbarLinks>
    </NavbarWrapper>
  )
}

export default Navbar
