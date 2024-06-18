import React from 'react'
import { TransparentButton } from '../Shared/Buttons'
import { Heading2 } from '../Shared/Headings'
import img from '../../assets/ba3.webp'
import styled from 'styled-components'

const NewArrivals = () => {
  return (
    <>
        <MainContainer>
            <ImgContainer>
                <Img src={img}  />
            </ImgContainer>
            <InfoContainer>
                <LineContainer>
                <span>UP TO 15% OFF</span>
                <Heading>The Most Delicious Cakes</Heading>
                <p>Real cocktails to make ordinary occasions, extraordinary</p>
                <TransparentButton >Shop Now</TransparentButton>
                </LineContainer>
            </InfoContainer>

        </MainContainer>
    </>
  )
}

export default NewArrivals

const MainContainer = styled.div`
width: 100%;
margin: 4rem 0rem;
position: relative;
`

const Heading = styled(Heading2)`
    font-size: 3rem;
    margin: 0 auto;
    text-align: center;
    font-weight: 300;
    padding-bottom: 15px;
`


const ImgContainer = styled.div`
  width: 100%;
  height: auto;
`
const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const InfoContainer = styled.div`
    text-align: center;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    background: white;
    transform: translate(-50%, -50%);
    max-width: 660px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
`
const LineContainer = styled.div`
border: 1px solid rgba(222, 222, 222, .75);
    padding: 65px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
