import React, { useState, useEffect } from "react";
import image2 from "../../assets/s2.webp";
import styled from "styled-components";
import { MainButton } from "../Shared/Buttons";

const CarouselImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 85vh;
`;



const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 8%;
  z-index: 2;
`;

const Heading2 = styled.h2`
  font-family: Jost;
  font-size: 80px;
  font-weight: 600;
  padding-bottom: 15px;
`;

const Paragraph = styled.p`
  font-family: Jost;
  font-size: 20px;
  font-weight: 500;
  padding-bottom: 15px;
  text-transform: unset;
  line-height: 1.5;
`;


const Carousel = () => {
  return (
    <>
      <TextContainer>
        <Heading2>Delicious Cupcakes</Heading2>
        <Paragraph>Order your favorite cupcakes now!</Paragraph>
        <MainButton to="/shop" >Shop Now</MainButton>
      </TextContainer>
      <ImgContainer>
        <CarouselImg src={image2} alt="cupcakes" />
      </ImgContainer>
    </>
  );
};

export default Carousel;
