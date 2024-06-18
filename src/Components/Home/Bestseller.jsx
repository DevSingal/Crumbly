import React from 'react'
import ProductCard from '../Shared/ProductCard'
import styled from 'styled-components'
import { Heading2, Heading3 } from '../Shared/Headings'
import { HeadingLine as SpanLine } from '../Shared/Lines'

import donut from '../../assets/donut.webp'
import cheeseCake from '../../assets/cheeseCake.webp'
import cherryCake from '../../assets/cherryCake.webp'
import chocoPie from '../../assets/choco pie.webp'
import custardBun from '../../assets/custardBun.webp'
import blackForestCake from '../../assets/blackForestCake.webp'
import cookie from '../../assets/cookie.webp'
import cupcake from '../../assets/product58.webp'

const data = [
  { img: donut, name: "Donut", price: "$7" },
  { img: cheeseCake, name: "Cheese Cake", price: "$10" },
  { img: cherryCake, name: "Cherry Cake", price: "$15" },
  { img: chocoPie, name: "Choco Pie", price: "$5" },
  { img: custardBun, name: "Custard Bun", price: "$5" },
  { img: blackForestCake, name: "Black Forest Cake", price: "$25" },
  { img: cookie, name: "Cookie", price: "$5" },
  {img: cupcake, name: "Cupcake", price: "$10"}

]

const Bestseller = () => {


  

  return (
    <>
      <BScontainer>
        <Heading3>BEST SELLER</Heading3>
        <SpanLine />
        <BSproductContainer>
          {data.map((item, index) => {
            return (
              <ProductCard key={index} img={item.img} name={item.name} price={item.price} />
            )

          }
          )}

        </BSproductContainer>
      </BScontainer>
    </>
  )
}

export default Bestseller

const BScontainer = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
flex-direction: column;
`

const BSproductContainer = styled.div`
display: flex;
    width: 100%;
    align-items: center;
    height: auto;
    flex-wrap: wrap;
    justify-content: center;
`


