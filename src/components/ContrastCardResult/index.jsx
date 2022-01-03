import React from 'react'
import styled from "styled-components"

const ContrastCardResultContainer = styled.div`
  background: ${props => props.background};
  border-radius: 5px;
  padding: 40px 50px;
  @media only screen and (max-width: 768px) {
    padding: 22px;
  }
  h2 {
    font-size: 20px;
    font-weight: 600;
    color: ${props => props.foreground};
    @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
  }
  h3 {
    font-size: 26px;
    font-weight: bold;
    color: ${props => props.foreground};
    margin-top: 18px;
    margin-bottom: 26px;
    @media only screen and (max-width: 768px) {
    margin-bottom: 14px;
    margin-top: 8px;
    font-size: 16px;
  }
  }
  p {
    font-size: 14px;
    font-weight: normal;
    color: ${props => props.foreground};
    margin-bottom: 26px;
    @media only screen and (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 14px;
  }
  }
  button {
    outline: none;
    border: 1px solid ${props => props.foreground};
    color: ${props => props.foreground};
    background-color: transparent;
    padding: 10px 14px;
    cursor: pointer;
    border-radius: 3px;
    @media only screen and (max-width: 768px) {
    border-radius: 2px;
    padding: 8px 10px;
    font-size: 12px;
  }
  }
`

function ContrastCardResult({ foreground, background }) {
  return (
    <ContrastCardResultContainer background={background} foreground={foreground}>
      <h2>Contrast .02</h2>
      <h3>There are many variations</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
      <button>Find More</button>
    </ContrastCardResultContainer>
  )
}

export default ContrastCardResult
