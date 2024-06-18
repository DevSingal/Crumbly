import React, { useState } from 'react'
import styled from 'styled-components'
import { Checkbox } from 'antd';
import { TransparentButton } from '../Shared/Buttons';
import {FilterAlt} from 'styled-icons/boxicons-regular'


const Filters = () => {

    const [show, setShow] = useState(true)

    const handleOnClick = () => {
        setShow(!show)
    }

  return (
    <MainContainer>
    <ButtonContainer>
        <Button onClick={handleOnClick} > <FilterAlt size={"25"}  style={{marginRight:"10px"}} /> Filters</Button>
    </ButtonContainer>
    
        <FiltersContainer show={show} >
            <Filter>
                <FilterHeading>Categories</FilterHeading>
                <FilterOptions>
                    <FilterOption>All</FilterOption>
                    <FilterOption>Cupcakes</FilterOption>
                    <FilterOption>Cakes</FilterOption>
                    <FilterOption>Macarons</FilterOption>
                    <FilterOption>Donuts</FilterOption>
                </FilterOptions>
            </Filter>
            <Filter>
                <FilterHeading>Price</FilterHeading>
                <FilterOptions>
                    <FilterOption>Under $50</FilterOption>
                    <FilterOption>$50 - $100</FilterOption>
                    <FilterOption>$100 - $200</FilterOption>
                    <FilterOption>Above $200</FilterOption>
                </FilterOptions>
            </Filter>
            <Filter>
                <FilterHeading>Flavors</FilterHeading>
                <FilterOptions>
                    <FilterOption>Chocolate</FilterOption>
                    <FilterOption>Vanilla</FilterOption>
                    <FilterOption>Strawberry</FilterOption>
                    <FilterOption>Red Velvet</FilterOption>
                </FilterOptions>
            </Filter>
        </FiltersContainer>
    </MainContainer>
  )
}

export default Filters

const MainContainer = styled.div`
`

const ButtonContainer = styled.div`
width: fit-content;
    height: auto;
    position: relative;
    left: 4rem;
}
`
const Button = styled(TransparentButton)`
font-size: 20px;
    padding: 15px 20px;
    display: flex;
    align-items: center;
`


const FiltersContainer = styled.div`
    width: 20vw;
    margin: 3rem 1rem 0 4rem;
    overflow: hidden;
    position: relative;
    top: 0;
    left: ${props => props.show ? "0" : "-25vw"};
    transition: 0.3s;
    opacity: ${props => props.show ? "1" : "0"};
`
const Filter = styled.div`
`
const FilterHeading = styled.h3`
padding: 6px 15px 6px 15px;
    border-left: 3px solid #111111;
    position: relative;
    font-size: 15px;
    letter-spacing: 2px;
    font-weight: 500;
    text-transform: uppercase;
    background: #fff;
    position: relative;
    display: inline-block;

    &::after{
        content: "";
    border-bottom: 1px solid #e6e6e6;
    width: 500%;
    position: absolute;
    top: 50%;
    margin-left: 10px;
}
    }
`
const FilterOptions = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1.5rem 0;
    width: fit-content;
    font-size: 2rem;
`
const FilterOption = styled(Checkbox)`
margin: 0.2rem 0;
`
