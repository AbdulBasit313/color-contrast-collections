import React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import { ColorContext } from '../../../../context/colors/colorContext'
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
  const { onClickDarkText, onClickLightText } = useContext(ColorContext)

  return (
    <FilterWithTextStyle>
      <FilterContainer title='Text'>
        <AppCheckbox
          text="Dark Text"
          handleChange={onClickDarkText}
        />
        <AppCheckbox
          text="Light Text"
          handleChange={onClickLightText}
        />
        <AppCheckbox
          text="All"
        />
      </FilterContainer>
    </FilterWithTextStyle>
  )
}

export default FilterWithText
