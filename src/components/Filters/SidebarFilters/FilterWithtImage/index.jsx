import React from 'react'
import styled from 'styled-components'
import FilterContainer from '../FilterContainer'

const FilterWithImageStyle = styled.div`

`

function FilterWithImage() {
  return (
    <FilterWithImageStyle>
      <FilterContainer title='Image'>
        Hello
      </FilterContainer>
    </FilterWithImageStyle>
  )
}

export default FilterWithImage
