import React, { useContext } from 'react'
import styled from 'styled-components'
import { filterWithColor } from '../../../config/filterr'
import { ColorContext } from '../../../context/colors/colorContext'
import { device } from '../../../styles/BreakPoints'
import FilterWithColors from './FilterWithtColors'
import FilterWithImage from './FilterWithtImage'
import FilterWithText from './FilterWithtText'

const SdiebarFiltersStyle = styled.div`
  margin-top: 40px;
  @media ${device.tablet} {
    margin-top: unset;
    box-shadow: 0px 3px 20px #D1D5DF99;
    border-radius: 10px;
    padding-bottom: 20px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
  }
`

const Title = styled.h6`
  font-size: 18px;
  font-weight: medium;
  margin-left: 20px;
  color: ${({ theme: { colors } }) => colors.darkText};
  @media ${device.tablet} {
    font-size: 15px;
    font-weight: 600;
    padding-top: 18px;
}
`

const ApplyBtn = styled.button`
  background: #F4B400 0% 0% no-repeat padding-box;
  border-radius: 6px;
  padding: 8px 25px;
  outline: none;
  border: none;
  color: #FFFFFF;
  font-size: 18px;
  display: flex;
  margin: auto;
  margin-top: 30px;
  @media ${device.tablet} {
    width: 80%;
    display: block;
    font-size: 15px;
    text-align: center;
}
`

function SdiebarFilters() {
  const { onClickImageOnLeft } = useContext(ColorContext)

  const applyFilter = () => {
    onClickImageOnLeft()
  }

  return (
    <SdiebarFiltersStyle>
      <Title>Filters</Title>
      <FilterWithText />
      <FilterWithColors colors={filterWithColor} />
      <FilterWithImage />
      <ApplyBtn onClick={applyFilter}>Apply</ApplyBtn>
    </SdiebarFiltersStyle>
  )
}

export default SdiebarFilters
