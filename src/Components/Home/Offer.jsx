import React from 'react'
import { SecButton } from '../Shared/Buttons';
import styled from 'styled-components';
import img1 from '../../assets/ice-cream.webp';
import img2 from '../../assets/cake-custard.webp';
import { Heading2, Heading3 } from '../Shared/Headings';
import { Card1 } from '../Shared/ProductCard';


const Offer = () => {

  return (
    <>
      <OfferContainer >
        <Card1>
          <OfferMainHeading>Ice-Cream</OfferMainHeading >
          <ImgContainer>
            <Img src={img1} alt="carousel" />
          </ImgContainer>
          <OfferButton>Shop Now</OfferButton>
        </Card1>
        <Card2>
          <Heading2>
            20% OFF
          </Heading2>
          <OfferHeading>Free delivery on orders above $100</OfferHeading>
          <OfferButton>Shop Now</OfferButton>
        </Card2>
        <Card1>
          <OfferMainHeading>Cake Custard</OfferMainHeading>
          <ImgContainer>
            <Img src={img2} alt="carousel" />
          </ImgContainer>
          <OfferButton>Shop Now</OfferButton>
        </Card1>
      </OfferContainer>
    </>
  )
}

export default Offer

const OfferContainer = styled.div`
display: flex;
margin: 3rem 0rem;
justify-content: center;

`
const OfferMainHeading = styled(Heading3)`
position: absolute;
z-index: 2;
`


const OfferHeading = styled.h3`
    font-family: Jost;
    font-size: 2rem;
    text-align: center;
    padding-bottom: 15px;
`

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;


const Card2 = styled.div`
position: relative;
color:white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: auto;
  background: #dd5835;
  padding: 20px;
  margin: 20px;
`


const ImgContainer = styled.div`
  width: 100%;
  height: auto;
`;

const OfferButton = styled(SecButton)`
position: absolute;
    bottom: 3rem;
    `


