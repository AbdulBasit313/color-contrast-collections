import React from 'react'
import styled from "styled-components"
import { device } from '../../styles/BreakPoints'
import { AppBorder } from '../../styles/Global'
import ContrastCardResult from '../ContrastCardResult'
import ContrastCardSpecs from '../ContrastCardSpecs'

const CardContainer = styled(AppBorder)`
  padding: 8px;
  display: grid;
  grid-template-columns: 65fr 35fr;
  margin-top: 40px;

  @media ${device.laptopL} {
    margin-top: 20px;
  }

  @media ${device.tablet} {
    display: block;
    margin-top: 20px;
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
