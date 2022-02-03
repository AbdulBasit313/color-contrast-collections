import { StaticImage } from "gatsby-plugin-image"
import React from 'react'
import styled from "styled-components"
import { device } from "../../styles/BreakPoints"

const NavStyle = styled.nav`
  height: 90px;
  background: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  @media ${device.laptopL} {
    padding: 0 30px;
    height: 55px;
    .brand-image {
      width: 130px;
    }
  }
`

function Navbar() {
  return (
    <NavStyle>
      <StaticImage
        className='brand-image'
        src={"../../assets/images/MainLogo.png"}
        alt="Application Logo"
      />
    </NavStyle>
  )
}

export default Navbar
