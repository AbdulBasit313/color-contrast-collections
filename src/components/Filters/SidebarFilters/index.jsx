import React from 'react'
import styled from 'styled-components'
import { device } from '../../../styles/BreakPoints'
import FilterContainer from './FilterContainer'

const SdiebarFiltersStyle = styled.div`
  margin-top: 40px;
  h6 {
    font-size: 18px;
    font-weight: 600;
  }
  @media ${device.tablet} {
    display: none;
  }
`

function SdiebarFilters() {
  return (
    <SdiebarFiltersStyle>
      <h6>Filters</h6>
      <FilterContainer title='Text'>
        Hello
      </FilterContainer>
    </SdiebarFiltersStyle>
  )
}

export default SdiebarFilters
