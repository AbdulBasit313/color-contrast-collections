import React from 'react'
import styled from "styled-components"

const ContrastCardResultContainer = styled.div`
  background: ${props => props.background};
  border-radius: 5px;
  padding: 48px 60px;
  h2 {
    font-size: 20px;
    font-weight: 600;
    color: ${props => props.foreground};
  }
  h3 {
    font-size: 26px;
    font-weight: bold;
    color: ${props => props.foreground};
    margin-top: 18px;
    margin-bottom: 26px;
  }
  p {
    font-size: 14px;
    font-weight: normal;
    color: ${props => props.foreground};
    margin-bottom: 26px;
  }
  button {

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
