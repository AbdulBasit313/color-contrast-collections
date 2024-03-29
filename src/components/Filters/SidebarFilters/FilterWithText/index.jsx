import React, { useContext } from "react"
import styled from "styled-components"
import { ColorContext } from "../../../../context/colors/colorContext"
import RadioButton from "../../../RadioButton"
import FilterContainer from "../FilterContainer"

const FilterWithTextStyle = styled.div`
  div:nth-child(2) {
    div:not(:first-child) {
      margin-top: 6px;
    }
  }
`

function FilterWithText() {
  const { textColor, onClickDarkText, onClickLightText, onClickAll } =
    useContext(ColorContext)

  return (
    <FilterWithTextStyle>
      <FilterContainer title="Text">
        <RadioButton
          name="dark-text"
          id="dark-text"
          value="Dark Text"
          text="Dark Text"
          onChange={onClickDarkText}
          checked={textColor.darkText}
        />
        <RadioButton
          name="light-text"
          id="light-text"
          value="Light Text"
          text="Light Text"
          onChange={onClickLightText}
          checked={textColor.lightText}
        />
        <RadioButton
          name="all-text"
          id="all-text"
          value="All Text"
          text="All"
          onChange={onClickAll}
          checked={textColor.allTextSelected}
        />
      </FilterContainer>
    </FilterWithTextStyle>
  )
}

export default FilterWithText
