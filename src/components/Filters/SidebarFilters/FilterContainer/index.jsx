import React from 'react'
import styled from 'styled-components'
import Arrow from '../../../../assets/icons/arrow.svg'
import { device } from '../../../../styles/BreakPoints'

const FilterContainerStyle = styled.div`
  margin-top: 18px;
  @media ${device.tablet} {
  }
`

const Header = styled.div`
  border-bottom: 1px solid #9A9A9A;
  padding-bottom: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  .arrow {
    cursor: pointer;
  }
  @media ${device.tablet} {
  }
`

const HeaderTitle = styled.h6`
  font-size: 18px;
  font-weight: medium;
  margin-left: 14px;
  color: ${({ theme: { colors } }) => colors.grayText};
  @media ${device.tablet} {
  }
`

const Children = styled.div`
  background: #FFFBEF 0% 0% no-repeat padding-box;
  padding: 18px;
  @media ${device.tablet} {
  }
`

function FilterContainer({ title, children }) {
  return (
    <FilterContainerStyle>
      <Header>
        <Arrow className="arrow" />
        <HeaderTitle>{title}</HeaderTitle>
      </Header>
      <Children>
        {children}
      </Children>
    </FilterContainerStyle>
  )
}

export default FilterContainer
