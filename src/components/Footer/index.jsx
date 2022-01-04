import React from 'react'
import styled from "styled-components"
import { device } from '../../styles/BreakPoints'
import { Container } from '../../styles/Global'

const FooterStyle = styled.footer`
  height: 81px;
  background: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  p {
    color: ${props => props.theme.colors.textColor};
    font-size: 14px;
    @media ${device.tablet} {
    margin-top: 11px;
  }
    span {
      color: #F4B400;
    }
  }
  ul {
    display: flex;
    li {
      color: ${props => props.theme.colors.textColor};
      font-size: 14px;
      text-decoration: none;
      list-style-type: none;
      margin-right: 10px;
      cursor: pointer;
      &:not(:last-child) {
        &:after {
          content: '|';
          margin-left: 10px;
        }
      }
    }
  }
`

const FlexBW = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.tablet} {
    flex-direction: column-reverse;
    align-items: center;
  }
`

function Footer() {
  return (
    <FooterStyle>
      <Container>
        <FlexBW>
          <p>
            © 2021 <span>Color Check</span>, All rights reserved.
          </p>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </FlexBW>
      </Container>
    </FooterStyle>
  )
}

export default Footer
