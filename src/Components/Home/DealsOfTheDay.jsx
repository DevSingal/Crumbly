import React from 'react'
import { Heading3, Heading4 } from '../Shared/Headings'
import { GreyLine, HeadingLine } from '../Shared/Lines'

import styled from 'styled-components'
import donut from '../../assets/donut.webp'
import { WideCard } from '../Shared/ProductCard'

import cheeseCake from '../../assets/cheeseCake.webp'

const DealsOfTheDay = () => {
  return (
    <>
        <DODcntr>
            <Heading3 style={{fontWeight:"650"}} >DEALS OF THE DAY</Heading3>
            <HeadingLine/>
            <CardsContainer>
               <WideCard img={donut} name="Donut" price="$10" />
               <WideCard img={cheeseCake} name="Cheese Cake" price="$20" />
            </CardsContainer>
        </DODcntr>
    </>
  )
}

export default DealsOfTheDay

const DODcntr = styled.div`
`
const CardsContainer = styled.div`
display: flex;
    margin: 2rem 1rem;
    align-items: center;
    justify-content: center;
     flex-wrap: wrap;

`
