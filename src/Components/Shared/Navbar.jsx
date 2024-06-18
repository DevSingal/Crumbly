import React from 'react'
import styled from 'styled-components'
import { Bag, Search, Person, Heart } from '@styled-icons/bootstrap'
import { Link } from 'react-router-dom'
import {LogoHeading} from './Headings'
import { PrimaryColor, SecondaryColor } from './Colors'

const Navbar = () => {
  return (
    <>
        <NavbarContainer>
            <LogoContainer>
                <LogoHeading>Crumbly</LogoHeading>
            </LogoContainer>
            <NavLinks>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/featured">Featured</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/blogs">Blogs</NavLink>
            </NavLinks>
            <RightNav>
<Search size={"25"} className='icons' />
<Person size={"25"} className='icons' />
<Heart size={"25"} className='icons' />
<Bag size={"25"} className='icons' />
            </RightNav>
          
        </NavbarContainer>
    </>
  )
}

export default Navbar;

const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:1rem  2.5rem;
    background: white;
    position: sticky;
    z-index: 3;
    width: 100%;
    top: 0;
    `

const LogoContainer = styled.div`
        margin-left: 3rem;
    `


const NavLinks = styled.div`
    display: flex;
    justify-content: space-between;
    width: 30%;

   

    `
const NavLink = styled(Link)`
    text-decoration: none;
    font-size: 1.1rem;
    font-family: "Jost", sans-serif;
    font-weight: 500;
    text-transform: unset;
    padding: 0;
    color: ${SecondaryColor};

    &:hover {
        color: ${PrimaryColor};
    }

    `
const RightNav = styled.div`
    margin-right: 3rem;
    `
