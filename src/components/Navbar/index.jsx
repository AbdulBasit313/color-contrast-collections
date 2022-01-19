import { StaticImage } from "gatsby-plugin-image"
import React from 'react'
import styled from "styled-components"

const NavStyle = styled.nav`
  height: 90px;
  background: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  padding: 0 50px;
`

function Navbar() {
  return (
    <NavStyle>
      <StaticImage
        src={"../../assets/images/MainLogo.png"}
        alt="Application Logo"
      />
    </NavStyle>
  )
}

export default Navbar
