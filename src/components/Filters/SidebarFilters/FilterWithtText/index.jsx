import React from 'react'
import styled from 'styled-components'
import AppCheckbox from '../../../AppCheckbox'
import FilterContainer from '../FilterContainer'

const FilterWithTextStyle = styled.div`
  div:nth-child(2) {
    div:not(:first-child) {
      margin-top: 15px;
  } 
  } 
`

function FilterWithText() {
  return (
    <FilterWithTextStyle>
      <FilterContainer title='Text'>
        <AppCheckbox text="Dark Text" />
        <AppCheckbox text="Light Text" />
      </FilterContainer>
    </FilterWithTextStyle>
  )
}

export default FilterWithText
