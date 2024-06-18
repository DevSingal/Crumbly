import React from "react";
import styled from "styled-components";
import img from "../../assets/Shop/collection.jpg";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const ShopHeading = () => {
  return (
    <>
      <MainContainer>
        <ImgContainer>
          <ShopImg src={img} alt="shop" />
        </ImgContainer>
        <HeadingContainer>
          <Heading>Products</Heading>
          <Breadcrumb style={{ color: "white"}}
            separator=">"
            items={[
                {
                  title: <Link to="/">Home</Link>,
                },
                {
                  title: 'Shop',
                }
              ]}
          />
        </HeadingContainer>
      </MainContainer>
    </>
  );
};

export default ShopHeading;

const MainContainer = styled.div``;

const ImgContainer = styled.div`
  width: 100%;
  height: 62vh;
`;

const ShopImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
const HeadingContainer = styled.div`
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -75%);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Heading = styled.h1`
font-size: 60px;
    font-weight: 500;
    letter-spacing: 1px;
    font-family: Jost;
}
`;
