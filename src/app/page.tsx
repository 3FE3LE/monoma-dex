'use client'
import tw from 'twin.macro'
import { Layout } from '../components/UI'

const HomeTitle = tw.h1`
  font-black
  text-transparent
  bg-clip-text
  bg-gradient-to-b
  from-green-400
  to-green-700
  drop-shadow-md
  text-7xl
  text-center
  m-5
  sm:text-9xl
`

const Home = () => (
  <Layout>
    <HomeTitle>
      Welcome! to PKMdex 
    </HomeTitle>
  </Layout>
)

export default Home
