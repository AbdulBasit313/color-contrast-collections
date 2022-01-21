import React from 'react'
import styled from 'styled-components'
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
  return (
    <FilterWithImageStyle>
      <FilterContainer title='Image'>
        <AppCheckbox text="Image on Left" />
        <AppCheckbox text="Image on Right" />
      </FilterContainer>
    </FilterWithImageStyle>
  )
}

export default FilterWithImage
