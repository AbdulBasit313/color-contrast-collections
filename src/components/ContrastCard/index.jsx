import React from 'react'
import styled from "styled-components"
import { AppBorder } from '../../styles/Global'
import ContrastCardResult from '../ContrastCardResult'
import ContrastCardSpecs from '../ContrastCardSpecs'

const CardContainer = styled(AppBorder)`
  padding: 8px;
  display: flex;
  margin-top: 40px;
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
