import React from 'react'
import { useContext } from 'react'
import styled from "styled-components"
import { ColorContext } from '../../context/colors/colorContext'
import { data } from '../../data'
import { device } from '../../styles/BreakPoints'

const TitleStyle = styled.div`
  margin-top: 50px;
  margin-bottom: 40px;
  text-align: center;
  @media ${device.tablet} {
    margin-top: 28px;
    margin-bottom: 25px;
  }
`

const Title = styled.h1`
  color: ${props => props.theme.colors.textColor};
  font-size: 40px;
  font-weight: bold;
  @media ${device.tablet} {
  font-size: 20px;
}
`
const Subtitle = styled.div`
  margin-top: 12px;
  p {
    color: ${props => props.theme.colors.textColor};
    font-size: 14px;
    font-weight: normal;
    margin-top: 5px;
    @media ${device.tablet} {
    font-size: 11px;
  }
}
`

function AppTitle() {
  const { colorsData } = useContext(ColorContext)

  return (
    <TitleStyle>
      <Title>Welcome to Contrast Picker</Title>
      <Subtitle>
        <p>{colorsData.length} curated text with background colors contrast</p>
        <p>We help you to pick best contrasts for your websites, landing pages, blogs etc.</p>
      </Subtitle>
    </TitleStyle>
  )
}

export default AppTitle
