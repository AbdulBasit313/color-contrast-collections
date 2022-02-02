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
const NoRecord = styled.h2`
  margin-top: 40px;
  text-align: center;
  @media ${device.tablet} {
    font-size: 14px;
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
      {!colorsData.length && <NoRecord>Sorry we didn't find any match</NoRecord>}
    </ContrastCardsWrapper>
  )
}

export default ContrastCardList
