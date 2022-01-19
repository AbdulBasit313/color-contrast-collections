import React from 'react'
import styled from 'styled-components'
import { device } from '../../../styles/BreakPoints'
import FilterContainer from './FilterContainer'
import FilterWithColors from './FilterWithtColors'
import FilterWithImage from './FilterWithtImage'
import FilterWithText from './FilterWithtText'

const SdiebarFiltersStyle = styled.div`
  margin-top: 40px;
  @media ${device.tablet} {
    display: none;
  }
  `

const Title = styled.h6`
  font-size: 18px;
  font-weight: medium;
  margin-left: 20px;
  color: ${({ theme: { colors } }) => colors.darkText};
  @media ${device.tablet} {
}
`

function SdiebarFilters() {
  return (
    <SdiebarFiltersStyle>
      <Title>Filters</Title>
      <FilterWithText />
      <FilterWithColors />
      <FilterWithImage />
    </SdiebarFiltersStyle>
  )
}

export default SdiebarFilters
