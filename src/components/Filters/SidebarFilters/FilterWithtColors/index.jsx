import React, { useContext } from "react"
import styled from "styled-components"
import { ColorContext } from "../../../../context/colors/colorContext"
import FilterContainer from "../FilterContainer"

const FilterWithColorsStyle = styled.div``

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
  background-color: ${(props) => props.value};
  cursor: pointer;
  border: ${({ selected, theme }) =>
    selected ? `1px solid ${theme.colors.darkGrayText}` : null};
`

function FilterWithColors({ colors, activeColor, setActiveColor }) {
  const { selectFilterColor, textColor, setEmptyFilter } =
    useContext(ColorContext)

  const { darkText, lightText, allTextSelected } = textColor

  const onChangeColor = (id, color) => {
    if (activeColor === id) {
      setActiveColor(null)
      selectFilterColor(null)
      if (!darkText && !lightText && !allTextSelected) {
        setEmptyFilter(true)
      }
    } else {
      selectFilterColor(color)
      setActiveColor(id)
    }
  }

  return (
    <FilterWithColorsStyle>
      <FilterContainer title="Color">
        <ColorContainer>
          {colors.map(({ color, id }) => (
            <ColorStyle
              key={id}
              selected={id === activeColor ? true : false}
              value={color}
              onClick={() => onChangeColor(id, color)}
            />
          ))}
        </ColorContainer>
      </FilterContainer>
    </FilterWithColorsStyle>
  )
}

export default FilterWithColors
