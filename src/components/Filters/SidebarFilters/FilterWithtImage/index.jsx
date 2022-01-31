import React, { useContext } from 'react'
import styled from 'styled-components'
import { ColorContext } from '../../../../context/colors/colorContext'
import RadionButton from '../../../RadioButton'
import FilterContainer from '../FilterContainer'

const FilterWithImageStyle = styled.div`
  div:nth-child(2) {
    div:not(:first-child) {
      margin-top: 15px;
  } 
} 
`

function FilterWithImage() {
  const { imagePostion, onClickImageOnRight, onClickImageOnLeft } = useContext(ColorContext)

  return (
    <FilterWithImageStyle>
      <FilterContainer title='Image'>
        <RadionButton
          name="image-on-left"
          id="image-on-left"
          value='Image on Left'
          text='Image on Left'
          onChange={onClickImageOnLeft}
          checked={imagePostion.imageOnLeft}
        />
        <RadionButton
          name="image-on-right"
          id="image-on-right"
          value='Image on Right'
          text='Image on Right'
          onChange={onClickImageOnRight}
          checked={imagePostion.imageOnRight}
        />
      </FilterContainer>
    </FilterWithImageStyle>
  )
}

export default FilterWithImage
