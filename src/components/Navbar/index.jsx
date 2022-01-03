import React from 'react'
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Container } from '../../styles/Global'

const NavStyle = styled.nav`
  height: 90px;
  background: #FEF7E5 0% 0% no-repeat padding-box;
  display: flex;
  align-items: center;
  padding: 0 50px;
`

function Navbar() {
  return (
    <NavStyle>
      <StaticImage
        src={"../../images/MainLogo.png"}
        alt="Application Logo"
      />
    </NavStyle>
  )
}

export default Navbar
