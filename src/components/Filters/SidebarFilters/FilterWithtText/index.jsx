import React from 'react'
import styled from 'styled-components'
import FilterContainer from '../FilterContainer'

const FilterWithTextStyle = styled.div`

`

function FilterWithText() {
  return (
    <FilterWithTextStyle>
      <FilterContainer title='Text'>
        Hello
      </FilterContainer>
    </FilterWithTextStyle>
  )
}

export default FilterWithText
