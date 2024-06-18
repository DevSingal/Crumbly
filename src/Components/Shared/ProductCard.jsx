import React, { useState } from 'react'
import styled from 'styled-components'
import { ButtonCircle } from './Buttons'
import { Heading3, Heading4 } from './Headings';
import altImage from '../../assets/product58.webp'
import { TransparentButton } from '../Shared/Buttons'
import { Bag, Search, Person, Heart } from '@styled-icons/bootstrap'


export const Card1 = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 100%;
  background: #f8f8f8;
  border-radius: 10px;
  margin: 20px;
`




const ProductCard = ({img = altImage, name, price}) => {

    const [style, setStyle] = useState({
        opacity: '0',
        bottom: '6rem'
    });

    const handleMouseOver = () => {
        setStyle({
            opacity: '1',
            bottom: '7rem'
        
        });
    }

    const handleMouseExit = () => {
        setStyle({
            opacity: '0',
            bottom: '6rem'
        
        });
    }

  return (
    <>
        <CardContainer onMouseOver={handleMouseOver} onMouseOut={handleMouseExit} >
            <ImgContainer>
                <Img src={img}  />   
            </ImgContainer>
            <ButtonContainer opacity={style.opacity} bottom = {style.bottom}  >
                <ButtonCircle><Bag size={"20"} /></ButtonCircle>
                <ButtonCircle>< Search size={"20"}/></ButtonCircle>
                <ButtonCircle><Heart size={"20"} /></ButtonCircle>
            </ButtonContainer>
            <ProductInfo>
                <Heading4>{name}</Heading4>
                <Heading4>{price}</Heading4>
            </ProductInfo>
        </CardContainer>
    </>
  )
}

export default ProductCard

const CardContainer = styled.div`
display: flex;
    max-width: 8cm;
    flex-direction: column;
    align-items: center;
    margin: 0 1rem;
    padding: 2rem 0px;
    position: relative;
`
const ButtonContainer = styled.div`
opacity: ${props => props.opacity || '1'};
position: absolute;
display:flex;
bottom:${props => props.bottom || "7rem"};
transition: all 0.5s;
`
const ProductInfo = styled.div`
margin-top: 1rem;
`
const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const ImgContainer = styled.div`
  width: 100%;
  height: auto;
`;


export const WideCard = ({img, name, price, desc = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, assumenda?"})=>{
    return (
        <>
            
                    <DODCard>
                        <DODImgContainer>
                        <DODImg src={img} />
                        </DODImgContainer>
                        <DODInfo>
                            <DODHeading>{name}</DODHeading>
                            <DODPrice>{price}</DODPrice>
                            <DODDesc> {desc} </DODDesc>
                            <DODButtonContainer>
                                <Button >
                                    <Bag size={"20"} />
                                    <Heading>Add to Cart</Heading>
                                </Button>
                            </DODButtonContainer>
                        </DODInfo>
                    </DODCard>
        </>
)}

const Button = styled(TransparentButton)`
display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
   
`

const DODCard = styled.div`
display: flex;
padding : 1.5rem 0.5rem;
margin: 2rem;
border: 1px solid #e0e0e0;
max-width : 17cm;
`
const DODImgContainer = styled.div`
  width: 50%;
  height: auto;
  margin: 0 1rem;
`;

const DODImg = styled.img`
 object-fit: cover;
  width: 100%;
  height: 100%;
`
const DODInfo = styled.div`
margin: 0 1rem;
`
const DODHeading = styled(Heading3)`
margin: 0;
text-align: left;
`
const DODPrice = styled.p`
    font-size: 1.2rem;
  font-family: Jost;
    font-weight: 500;
    color: black;
    display: block;
    border-bottom: 1px solid #e7e7e7;
    padding-bottom: 17px;
    margin: 0;
`
const DODDesc = styled.p`
margin-top: 15px;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.6;
    color: #969696;
`
const Heading = styled.h4`
margin-left: 10px;
    font-weight: 500;
`
const DODButtonContainer = styled.div`
`