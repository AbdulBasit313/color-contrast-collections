import React from 'react'
import styled from "styled-components"

const TitleStyle = styled.div`
  margin-top: 50px;
  margin-bottom: 40px;
  text-align: center;
  @media only screen and (max-width: 768px) {
    margin-top: 28px;
    margin-bottom: 25px;
  }
  h1 {
    color: #000000;
    font-size: 40px;
    font-weight: bold;
    @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
  }
  p {
    color: #000000;
    font-size: 14px;
    margin-top: 10px;
    @media only screen and (max-width: 768px) {
    font-size: 11px;
  }
  }
`

function AppTitle() {
  return (
    <TitleStyle>
      <h1>Welcome to Contrast Checker</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </TitleStyle>
  )
}

export default AppTitle
