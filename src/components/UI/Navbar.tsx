import Link from 'next/link'
import tw, { styled } from 'twin.macro'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import logo from '../../public/bulbasaur_icon.png'
import toast from 'react-hot-toast'
import { UserCircle } from '../Icons'
import Popover from './Popover'
import { useEffect } from 'react'

const NavbarWrapper = tw.nav`
  p-5
  flex
  justify-between
  items-center
  shadow-md
  bg-opacity-50
  bg-green-500
  sticky
  top-0
  z-10
  backdrop-blur
`

const NavbarLogo = tw(Link)`
  flex 
  gap-5
  items-center
`

const NavbarTitle = tw.h1`
text-4xl
font-bold
text-green-100
hidden
sm:inline
`

const NavbarLinks = tw.ul`
flex
gap-2
sm:gap-5
`

const NavIcon = tw.span`
p-3
bg-green-100
text-green-500
font-bold
rounded-full
shadow-md
w-max
transition-all
hover:(bg-slate-100 scale-110)
focus:outline-none
focus:ring
focus:bg-slate-100
`

type NavbarLinkProps = {
  $variant: 'navbar' | 'popover'
}

export const NavbarLink = styled.li<NavbarLinkProps>(({ $variant }) => [
  tw`transition-all cursor-pointer flex items-center gap-5 rounded-3xl `,
  $variant === 'navbar' &&
    tw`text-white font-bold text-3xl hover:text-slate-100`,
  $variant === 'popover' &&
    tw`text-green-700 hover:(text-green-800 bg-slate-100) p-5 w-full`,
])
const Navbar = () => {
  const { data, status } = useSession()

  useEffect(() => {
    if (status === 'loading') {
      toast.loading('Loading user data..')
    } else {
      toast.dismiss()
    }
  }, [status])

  return (
    <NavbarWrapper>
      <NavbarLogo href={status === 'authenticated' ? '/dashboard' : '/'}>
        <Image src={logo} alt="logo" width={40} height={40} />
        <NavbarTitle>PKMdex</NavbarTitle>
      </NavbarLogo>
      <NavbarLinks>
        {status === 'authenticated' && (
          <Popover>
            <NavbarLink $variant="navbar">
              {data.user?.name}
              <NavIcon>
                <UserCircle />
              </NavIcon>
            </NavbarLink>
          </Popover>
        )}
        {status === 'unauthenticated' && (
          <>
            <Link href={'/sign-up'}>
              <NavbarLink $variant="navbar">Sign Up</NavbarLink>
            </Link>
            <Link href={'/sign-in'}>
              <NavbarLink $variant="navbar">Sign In</NavbarLink>
            </Link>
          </>
        )}
      </NavbarLinks>
    </NavbarWrapper>
  )
}

export default Navbar
