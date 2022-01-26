import React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import { ColorContext } from '../../../../context/colors/colorContext'
import AppCheckbox from '../../../AppCheckbox'
import FilterContainer from '../FilterContainer'

const FilterWithImageStyle = styled.div`
  div:nth-child(2) {
    div:not(:first-child) {
      margin-top: 15px;
  } 
} 
`

function FilterWithImage() {
  const { onClickImageOnRight, onClickImageOnLeft } = useContext(ColorContext)

  return (
    <FilterWithImageStyle>
      <FilterContainer title='Image'>
        <AppCheckbox
          text="Image on Left"
          handleChange={onClickImageOnLeft}
        />
        <AppCheckbox
          text="Image on Right"
          handleChange={onClickImageOnRight}
        />
      </FilterContainer>
    </FilterWithImageStyle>
  )
}

export default FilterWithImage
