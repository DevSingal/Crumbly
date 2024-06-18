import React from 'react'
import { HeadingLine } from './Lines'
import styled from 'styled-components'
import { PaperPlane } from 'styled-icons/boxicons-regular'
import { PrimaryColor } from './Colors'

const NewsLetter = () => {

    const handleFormSubmit = (e) => {
        e.preventDefault()
        alert("Thank you for subscribing!")
    }

  return (
    <NLContainer>
        <NLInfo>
            <NLHeading>GET UPDATES</NLHeading>
            <HeadingLine />
            <NLText>Subscribe to our newsletter to get updates on our latest offers!</NLText>
        </NLInfo>
        <NLForm onSubmit={handleFormSubmit} >
            <NLInput type="email" placeholder="Your email address" />
            <NLButton ><PaperPlane size={"30"} /></NLButton>
        </NLForm>
    </NLContainer>
  )
}

export default NewsLetter

const NLContainer = styled.div`
background: #ffd2c4;
    display: flex;
    width: 100%;
    height: 25dvh;
    align-items: center;
    justify-content: space-evenly;
`
const NLInfo = styled.div`
`
const NLHeading = styled.h2`
font-size: 2.5rem;
    text-align: center;
    font-weight:500;
`
const NLText = styled.p`
`
const NLForm = styled.form`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const NLInput = styled.input`
padding: 15px 24px;
    padding-right: 4rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0;
    border: none;
    font-size: 0.8rem;
    font-weight: 600;
    color: #495057;
    background-color: #fff;
    outline: none;
    width: 100%;
`
const NLButton = styled.button`
height: 3rem;
    width: auto;
    aspect-ratio: 1;
    border: none;
    outline: none;
    background: ${PrimaryColor};
    color: white;
    cursor: pointer;
`
