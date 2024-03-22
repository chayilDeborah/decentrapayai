import React from 'react'
import Navbar from './Navbar'
import Leverage from './Leverage'
import About from './About'
import Features from './Features'
import Tokenomics from './Tokenomics'

const Homepage = () => {
  return (
    <>
    <main>
        <Navbar />
        <Leverage />
        <About />
        <Features />
        <Tokenomics />
    </main>
    </>
  )
}

export default Homepage