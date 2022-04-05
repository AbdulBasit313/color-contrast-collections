import React, { useContext } from "react"
import styled from "styled-components"
import { ColorContext } from "../../../../context/colors/colorContext"
import RadioButton from "../../../RadioButton"
import FilterContainer from "../FilterContainer"

const FilterWithImageStyle = styled.div`
  div:nth-child(2) {
    div:not(:first-child) {
      margin-top: 6px;
    }
  }
`

function FilterWithImage() {
  const {
    imagePosition,
    onClickImageOnRight,
    onClickImageOnLeft,
    onClickNoImage,
  } = useContext(ColorContext)

  return (
    <FilterWithImageStyle>
      <FilterContainer title="Image">
        <RadioButton
          name="image-on-left"
          id="image-on-left"
          value="Image on Left"
          text="Image on Left"
          onChange={onClickImageOnLeft}
          checked={imagePosition.imageOnLeft}
        />
        <RadioButton
          name="image-on-right"
          id="image-on-right"
          value="Image on Right"
          text="Image on Right"
          onChange={onClickImageOnRight}
          checked={imagePosition.imageOnRight}
        />
        <RadioButton
          name="no-image"
          id="no-image"
          value="No Image"
          text="No Image"
          onChange={onClickNoImage}
          checked={imagePosition.noImageSelected}
        />
      </FilterContainer>
    </FilterWithImageStyle>
  )
}

export default FilterWithImage
