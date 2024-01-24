import React from 'react'
import Header from './Header'
import About from './About'
import Gallery from './Gallery'
import ApsCalculator from './ApsCalculator'
import Footer from './Footer'
import Blog from './Blog'


const Home = () => {
  return (
    <div>
        <Header />
        <About/>
        {/* <Blog/> */}
        <Gallery/>
        <ApsCalculator/>
        <Footer/>
        
    </div>
  )
}

export default Home
