import React from 'react'
import styled from "styled-components"
import {NavLink, useMatch} from "react-router-dom"
import {ERouteConst} from "../../../routes/consts"
import Container from "../UI/Container"
import Input from "../UI/Input"

const HeaderWrapper = styled.header<IHeader>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${props => props.height ?? 68 + 'px'};
  background-color: #fff;
  box-shadow: 0 2px 8px -2px rgb(0 32 37 / 10%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`

const NavWrapper = styled.nav<{ isMatch: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 700;
    user-select: none;
    -webkit-user-drag: none;
    pointer-events: ${props => props.isMatch === 'true' ? 'none' : 'unset'};
  }
`

export interface IHeader {
  height?: number
}

const Header = ({height}: IHeader) => {
  const match = useMatch('/')
  return (
    <HeaderWrapper height={height}>
      <Container>
        <NavWrapper isMatch={match ? 'true' : 'null'}>
          <NavLink to={ERouteConst.HomePage}>Home</NavLink>
          <Input/>
        </NavWrapper>
      </Container>
    </HeaderWrapper>
  )
}

export default Header