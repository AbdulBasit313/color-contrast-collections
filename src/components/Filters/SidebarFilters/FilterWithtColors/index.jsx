import React from 'react'
import styled from 'styled-components'
import FilterContainer from '../FilterContainer'

const FilterWithColorsStyle = styled.div`

`

function FilterWithColors() {
  return (
    <FilterWithColorsStyle>
      <FilterContainer title='Color'>
        Hello
      </FilterContainer>
    </FilterWithColorsStyle>
  )
}

export default FilterWithColors
