'use client'
import React from 'react'
import tw from 'twin.macro'
import { Navbar } from '../components/UI'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw` h-[calc(100vh-4rem)]`,
    hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],
}

const Home = () => (
  <div css={styles.container({ hasBackground: true })}>
    <Navbar/>
    <div tw="flex flex-col justify-center h-full gap-y-5">
    </div>
  </div>
)

export default Home
