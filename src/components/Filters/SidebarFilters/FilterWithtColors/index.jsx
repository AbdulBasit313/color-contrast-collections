import React from 'react'
import styled from 'styled-components'
import FilterContainer from '../FilterContainer'

const FilterWithColorsStyle = styled.div`

`

const ColorContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 20px 10px;
`

const ColorStyle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 4px;
  background-color: ${props => props.value};
  cursor: pointer;
`

function FilterWithColors({ colors }) {
  return (
    <FilterWithColorsStyle>
      <FilterContainer title='Color'>
        <ColorContainer>
          {colors.map(({ color }) => (
            <ColorStyle value={color} />
          ))
          }
        </ColorContainer>
      </FilterContainer>
    </FilterWithColorsStyle>
  )
}

export default FilterWithColors
