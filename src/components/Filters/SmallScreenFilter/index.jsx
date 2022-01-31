import React, { useState } from 'react'
import styled from 'styled-components'
import FilterIcon from '../../../assets/icons/filter.svg'
import SdiebarFilters from '../SidebarFilters'

const SmallScreenFilterStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 16px;
  position: relative;
`

const FilterContainer = styled.div`
  background: ${({ theme: { colors } }) => colors.white};
  border: 1px solid ${({ theme: { colors } }) => colors.grayText};
  border-radius: 6px;
  padding: 9px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  span {
    font-size: 12px;
    color: ${({ theme: { colors } }) => colors.grayText};;
    margin-left: 6px;
  }
`

const FilterStyle = styled.div`
  position: absolute;
  /* width: 90%; */
  left: 4%;
  right: 4%;
  z-index: 1;
  /* top: 0;  */
  /* right: 50%; */
  /* transform: translate(50%,-50%); */
`

function SmallScreenFilter() {
  const [showFilter, setShowFilter] = useState(false)

  const handleFilteShow = () => {
    setShowFilter(!showFilter)
  }

  return (
    <>
      <SmallScreenFilterStyle>
        <FilterContainer onClick={handleFilteShow}>
          <FilterIcon />
          <span>Filter</span>
        </FilterContainer>
      </SmallScreenFilterStyle>
      <FilterStyle>
        {showFilter && (
          <SdiebarFilters closeSmallScreenFilter={setShowFilter} />
        )}
      </FilterStyle>
    </>
  )
}

export default SmallScreenFilter
