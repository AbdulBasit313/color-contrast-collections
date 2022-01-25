import React, { useContext } from 'react'
import styled from 'styled-components'
import { ColorContext } from '../../context/colors/colorContext'
import { device } from '../../styles/BreakPoints'
import ContrastCard from '../ContrastCard'

const ContrastCardsWrapper = styled.div`
  margin-bottom: 70px;
  @media ${device.tablet} {
    margin-bottom: 30px;
  }
`

function ContrastCardList() {
  const { colorsData } = useContext(ColorContext)

  return (
    <ContrastCardsWrapper>
      {colorsData.map(({ background, foreground }) => (
        <ContrastCard foreground={foreground} background={background} />
      ))}
    </ContrastCardsWrapper>
  )
}

export default ContrastCardList
