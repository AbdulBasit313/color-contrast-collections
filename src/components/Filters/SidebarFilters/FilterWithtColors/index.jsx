import React, { useState } from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import { ColorContext } from '../../../../context/colors/colorContext'
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
  border: ${({ selected }) => selected ? '1px solid #FEF7E5' : null};
`

function FilterWithColors({ colors }) {
  const { selectFilterColor } = useContext(ColorContext)
  const [activeColor, setActiveColor] = useState(null)

  const onChangeColor = (id, color) => {
    setActiveColor(id)
    selectFilterColor(color)
  }

  return (
    <FilterWithColorsStyle>
      <FilterContainer title='Color'>
        <ColorContainer>
          {colors.map(({ color, id }) => (
            <ColorStyle
              selected={id === activeColor ? true : false}
              value={color}
              onClick={() => onChangeColor(id, color)}
            />
          ))
          }
        </ColorContainer>
      </FilterContainer>
    </FilterWithColorsStyle>
  )
}

export default FilterWithColors
