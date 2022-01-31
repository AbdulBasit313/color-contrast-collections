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

  console.log('colorsData', colorsData)
  return (
    <ContrastCardsWrapper>
      {colorsData?.map(({ background, foreground }) => (
        <ContrastCard foreground={foreground} background={background} />
      ))}
      {!colorsData.length && <h1>Sorry we didn't find any match</h1>}
    </ContrastCardsWrapper>
  )
}

export default ContrastCardList
