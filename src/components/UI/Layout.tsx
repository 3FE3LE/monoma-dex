import tw from 'twin.macro'
import Navbar from './Navbar'

const Container = tw.main`
h-screen
bg-gradient-to-b
from-electric
to-ribbon
`
const MainContent = tw.section`
flex
flex-col
justify-center
h-[calc(100vh-4rem)]
`
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Navbar />
      <MainContent>{children}</MainContent>
    </Container>
  )
}
