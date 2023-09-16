import tw from 'twin.macro'
import Navbar from './Navbar'

const Container = tw.main`
min-h-screen
bg-gradient-to-b
from-green-500
via-green-200
to-green-100
`
const MainContent = tw.section`
relative
flex
flex-col
justify-center
items-center
min-h-[calc(100vh-5rem)]
`
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Navbar />
      <MainContent>{children}</MainContent>
    </Container>
  )
}
