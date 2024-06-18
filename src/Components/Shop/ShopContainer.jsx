import React from 'react'
import Navbar from '../Shared/Navbar'
import Footer from '../Shared/Footer'
import ShopHeading from './ShopHeading'
import Filters from './Filters'
import Products from './Products'
import styled from 'styled-components'

const ShopContainer = () => {
  return (
    <>
        <Navbar />
        <ShopHeading />
        <ProductsContainer>
            <Filters />
            <Products />
        </ProductsContainer>
        <Footer/>
    </>
  )
}

export default ShopContainer

const ProductsContainer = styled.div`
display: flex;
`

