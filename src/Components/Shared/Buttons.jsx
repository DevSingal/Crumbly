
import { Link } from 'react-router-dom';
import {PrimaryColor, SecondaryColor} from './Colors';
import styled from 'styled-components';

export const MainButton = styled(Link)`
  color: #000000;
  border-color: #000000;
  text-decoration: none;
  margin-top: 10px;
  font-weight: 500;
  font-family: Jost;
  outline: none;
  letter-spacing: 2px;
  font-size: 1rem;
  line-height: 1;
  border: 1px solid;
  padding: 15px 40px;
  transition: all 0.3s;
  background: transparent;
  display:block;
  width:fit-content;

  &:hover {
    background: #000000;
    color: #ffffff;
  }
`;

export const SecButton = styled(Link)`

    color: #ffffff;
  text-decoration: none;
  margin-top: 10px;
  font-weight: 500;
  font-family: Jost;
  outline: none;
  letter-spacing: 2px;
  font-size: 1rem;
  line-height: 1;
  padding: 15px 40px;
  transition: all 0.3s;
    background: #000000;
  display:block;
  width:fit-content;

  &:hover {
  background:${PrimaryColor}
  }

`
export const TransparentButton = styled(MainButton)`
margin-top: 2rem;
color:${PrimaryColor};
border-color:${PrimaryColor};
&:hover {
    background:${PrimaryColor};
    color: white;
}


`

export const ButtonCircle = styled.button`
     width: 46px;
    height: 46px;
    line-height: 46px;
    background-color: #fff;
    box-shadow: 0 15px 25px #00000014;
    border-radius: 50%;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 13px;
    transition: .5s;
    color: #111;
    font-size: 0;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  &:hover {
    background: ${PrimaryColor};
    color: #fff;
  }
`;