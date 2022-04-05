import React, { useContext } from "react"
import styled from "styled-components"
import RefreshIcon from "../../../assets/icons/refresh-icon.svg"
import { filterWithColor } from "../../../config/filter"
import { ColorContext } from "../../../context/colors/colorContext"
import useWindowSize from "../../../hooks/useWindowSize"
import { device } from "../../../styles/BreakPoints"
import FilterWithColors from "./FilterWithColors"
import FilterWithImage from "./FilterWithImage"
import FilterWithText from "./FilterWithText"

const SidebarFiltersStyle = styled.div`
  margin-top: 40px;
  margin-bottom: 30px;
  @media ${device.tablet} {
    margin-top: unset;
    margin-bottom: unset;
    box-shadow: 0px 3px 20px #d1d5df99;
    border-radius: 10px;
    padding-bottom: 20px;
    background: #ffffff 0% 0% no-repeat padding-box;
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
  background: #f4b400 0% 0% no-repeat padding-box;
  border-radius: 6px;
  padding: 8px 25px;
  outline: none;
  color: #ffffff;
  font-size: 18px;
  width: 180px;
  max-width: 70%;
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
  border-radius: 6px;
  background-color: ${({ theme: { colors } }) => colors.black};
  padding: 8px 12px;
  margin-right: 10px;
  @media ${device.tablet} {
    padding: 6px 10px;
  }
`

function SdiebarFilters({ closeSmallScreenFilter }) {
  // const [activeColor, setActiveColor] = useState(null)
  const {
    applyFilters,
    filters,
    emptyFilter,
    resetFilters,
    activeColor,
    setActiveColor,
  } = useContext(ColorContext)
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

  return (
    <SidebarFiltersStyle>
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
        <ApplyBtn onClick={applyAllFilter} disabled={emptyFilter}>
          Apply
        </ApplyBtn>
      </FilterActionsContainer>
    </SidebarFiltersStyle>
  )
}

export default SdiebarFilters
