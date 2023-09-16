import { useState } from 'react'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import toast from 'react-hot-toast'
import tw, { styled } from 'twin.macro'
import { ArrowBrokenDown, UserCircle } from '../Icons'
import { NavbarLink } from './Navbar'

const PopoverContainer = tw.div`
  relative
  inline-block
`
type PopoverContentProps = {
  $isOpen: boolean
}

const PopoverContent = styled.div<PopoverContentProps>(({ $isOpen }) => [
  tw`absolute rounded-tl-3xl rounded-b-3xl bg-white w-max shadow-lg p-1  right-10
  z-10 flex flex-col items-end transition-all scale-0 origin-top-right gap-1`,
  $isOpen && tw`scale-100 `,
])

interface PopoverProps {
  children: React.ReactNode
}

const handleSignOut = () => {
  toast.success('Thank you for visiting us!, We hope to see you soon')
  signOut({ callbackUrl: '/' })
}

const Popover: React.FC<PopoverProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleTogglePopover = () => {
    setIsOpen(!isOpen)
  }

  return (
    <PopoverContainer onClick={handleTogglePopover}>
      {children}

      <PopoverContent $isOpen={isOpen}>
        <Link href={'/profile'}>
          <NavbarLink $variant="popover">
            Profile
            <UserCircle />
          </NavbarLink>
        </Link>
        <Link onClick={handleSignOut} href={'/'}>
          <NavbarLink $variant="popover">
            Sign out
            <ArrowBrokenDown />
          </NavbarLink>
        </Link>
      </PopoverContent>
    </PopoverContainer>
  )
}

export default Popover
