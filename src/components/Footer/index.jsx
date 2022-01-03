import React from 'react'
import styled from "styled-components"
import { Container } from '../../styles/Global'

const FooterStyle = styled.footer`
  height: 81px;
  background: #FEF7E5 0% 0% no-repeat padding-box;
  display: flex;
  align-items: center;
  p {
    color: #000000;
    font-size: 14px;
    span {
      color: #F4B400;
    }
  }
  ul {
    display: flex;
    li {
      color: #000000;
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
