import React from 'react'
import Navbar from './Navbar'
import Leverage from './Leverage'
import About from './About'
import Features from './Features'

const Homepage = () => {
  return (
    <>
    <main>
        <Navbar />
        <Leverage />
        <About />
        <Features />
    </main>
    </>
  )
}

export default Homepage