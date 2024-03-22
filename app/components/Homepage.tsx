import React from 'react'
import Navbar from './Navbar'
import Leverage from './Leverage'
import About from './About'
import Features from './Features'
import Tokenomics from './Tokenomics'
import Roadmap from './Roadmap'
import Community from './Community'
import Footer from './Footer'

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
        <Community />
        <Footer />
    </main>
    </>
  )
}

export default Homepage