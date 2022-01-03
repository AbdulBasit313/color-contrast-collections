import React from 'react'
import styled from "styled-components"
import { AppBorder } from '../../styles/Global'
import ContrastCardResult from '../ContrastCardResult'
import ContrastCardSpecs from '../ContrastCardSpecs'

const CardContainer = styled(AppBorder)`
  padding: 8px;
  /* display: flex; */
  display: grid;
  grid-template-columns: 65fr 35fr;
  margin-top: 40px;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`

function ContrastCard({ foreground, background }) {
  return (
    <CardContainer>
      <ContrastCardResult foreground={foreground} background={background} />
      <ContrastCardSpecs foreground={foreground} background={background} />
    </CardContainer>
  )
}

export default ContrastCard
