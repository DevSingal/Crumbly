import React from 'react'
import Navbar from '../Shared/Navbar' 
import NewsLetter from '../Shared/NewsLetter' 
import Footer from '../Shared/Footer' 
import Carousel from './Carousel'
import Offer from './Offer'
import Bestseller from './Bestseller'
import NewArrivals from './NewArrivals'
import DealsOfTheDay from './DealsOfTheDay'

const HomeContainer = () => {
  return (
    <>
        <Navbar />
        <Carousel />
        <Offer />
        <Bestseller />
        <NewArrivals />
        <DealsOfTheDay />
        <NewsLetter />
        <Footer />
    </>
  )
}

export default HomeContainer