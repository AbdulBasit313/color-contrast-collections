import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import RefreshIcon from '../../../assets/icons/refresh-icon.svg'
import { filterWithColor } from '../../../config/filterr'
import { ColorContext } from '../../../context/colors/colorContext'
import useWindowSize from '../../../hooks/useWindowSize'
import { device } from '../../../styles/BreakPoints'
import FilterWithColors from './FilterWithtColors'
import FilterWithImage from './FilterWithtImage'
import FilterWithText from './FilterWithtText'

const SdiebarFiltersStyle = styled.div`
  margin-top: 40px;
  margin-bottom: 30px;
  @media ${device.tablet} {
    margin-top: unset;
    margin-bottom: unset;
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

const FilterActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`

const ApplyBtn = styled.button`
  background: #F4B400 0% 0% no-repeat padding-box;
  border-radius: 6px;
  padding: 8px 25px;
  outline: none;
  border: none;
  color: #FFFFFF;
  font-size: 18px;
  width: 180px;
  max-width: 70%;
  cursor: pointer;
  &:disabled {
    background-color: ${({ theme: { colors } }) => colors.grayText};
    cursor: not-allowed;
  }
  @media ${device.tablet} {
    width: 330px;
    max-width: 70%;
    display: block;
    font-size: 15px;
    text-align: center;
  }
  `

const ResetBtn = styled.button`
  outline: none;
  border: none;
  border-radius: 6px;
  background-color: ${({ theme: { colors } }) => colors.black};
  padding: 8px 12px;
  margin-right: 10px;
  cursor: pointer;
  @media ${device.tablet} {
    padding: 6px 10px;
  }
`

function SdiebarFilters({ closeSmallScreenFilter }) {
  // const [activeColor, setActiveColor] = useState(null)
  const { applyFilters, filters, emptyFilter, resetFilters, activeColor, setActiveColor } = useContext(ColorContext)
  const [width] = useWindowSize()

  const applyAllFilter = () => {
    applyFilters()
    if (width <= 768) {
      closeSmallScreenFilter(false)
    }
  }

  const resetAllFilters = () => {
    resetFilters()
    setActiveColor(null)
  }

  console.log('filters ==>', filters)

  return (
    <SdiebarFiltersStyle>
      <Title>Filters</Title>
      <FilterWithText />
      <FilterWithColors
        colors={filterWithColor}
        activeColor={activeColor}
        setActiveColor={setActiveColor}
      />
      {width > 768 && <FilterWithImage />}
      <FilterActionsContainer>
        <ResetBtn onClick={resetAllFilters}>
          <RefreshIcon />
        </ResetBtn>
        <ApplyBtn onClick={applyAllFilter} disabled={emptyFilter}>Apply</ApplyBtn>
      </FilterActionsContainer>
    </SdiebarFiltersStyle>
  )
}

export default SdiebarFilters
