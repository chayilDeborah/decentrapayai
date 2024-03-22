import React from 'react'
import Navbar from './Navbar'
import Leverage from './Leverage'
import About from './About'
import Features from './Features'
import Tokenomics from './Tokenomics'
import Roadmap from './Roadmap'

const Homepage = () => {
  return (
    <>
    <main>
        <Navbar />
        <Leverage />
        <About />
        <Features />
        <Tokenomics />
        <Roadmap />
    </main>
    </>
  )
}

export default Homepage