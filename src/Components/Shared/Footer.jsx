import React from 'react'
import { HeadingLine } from './Lines'
import { Link } from 'react-router-dom'
import { PrimaryColor, SecondaryColor } from './Colors'
import styled from 'styled-components'
import { Heading2, Heading3, LogoHeading } from './Headings'




const FooterLinks = ({heading, l1, l2, l3, l4}) =>{
    return (
        <>
       <FooterLinkContainer>
       <Heading3 style={{textAlign:"left", margin:"0"}} >{heading}</Heading3>
        <HeadingLine style={{margin:"8px 0px"}} />
        <FooterLink>{l1}</FooterLink>
        <FooterLink>{l2}</FooterLink>
        <FooterLink>{l3}</FooterLink>
        <FooterLink>{l4}</FooterLink>
         </FooterLinkContainer>
        </>
    )

}

const FooterLinkContainer = styled.div`
display: flex;
    flex-direction: column;
    margin: 0 4rem;
    height: 100%;
    width: 15%;
    text-align: left;
`

const FooterLink = styled(Link)`
text-decoration: none;
font-size: 1.1rem;
font-family: "Jost", sans-serif;
font-weight: 500;
text-transform: unset;
padding: 0;
color: ${SecondaryColor};
margin: 0.5rem 0;

&:hover {
    color: ${PrimaryColor};
}

`

const Footer = () => {
  return (
    <>
        <FooterConatainer>
            <LogoContainer>
                
        <LogoHeading>Crumbly</LogoHeading>
                <LogoText>Sophisticated simplicity for the
                independent mind.</LogoText>
                <IconsContainer>
                   
                </IconsContainer>
            </LogoContainer>
            <FooterLinks heading={"Help & Information"} l1="About Us" l2="Privacy Policy" l3="Terms & Conditions" l4="Products Return" />
            <FooterLinks heading={"Categories"} l1="About Us" l2="Privacy Policy" l3="Terms & Conditions" l4="Products Return" />
            <FooterLinks heading={"Help & Information"} l1="About Us" l2="Privacy Policy" l3="Terms & Conditions" l4="Products Return" />
           
        </FooterConatainer>
        <CopyRight>
            <Info>
            © Copyright 2023 | All rights Reserved
            </Info>

            </CopyRight>
    </>
  )
}

export default Footer

const FooterConatainer = styled.div`
    display: flex;
    width: 100%;
    height: 50dvh;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    flex-wrap: wrap;
    background: #ffd2c4;
`
const LogoContainer = styled.div`
`
const LogoText = styled.p`
`
const IconsContainer = styled.div`
`
const CopyRight = styled.div`
    background: #ffd2c4;
    display: flex;
    width: 100%;
    height: 10vh;
    align-items: center;
    justify-content: center;
`
const Info = styled.p`
`
