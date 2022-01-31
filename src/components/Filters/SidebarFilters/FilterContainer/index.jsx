import React, { useState } from 'react'
import styled from 'styled-components'
import Arrow from '../../../../assets/icons/arrow.svg'
import { device } from '../../../../styles/BreakPoints'

const FilterContainerStyle = styled.div`
  margin-top: 18px;
  @media ${device.tablet} {
    margin-top: 8px;
  }
`

const Header = styled.div`
  border-bottom: 1px solid #9A9A9A;
  padding-bottom: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  @media ${device.tablet} {
    border-bottom: unset;
    margin-bottom: 8px;
    padding-bottom: unset;
    }
  .arrow {
    cursor: pointer;
    transition: all 0.1s linear;
    @media ${device.tablet} {
      width: 13px;
      height: 8px;
    }
  }
  .move {
    transform: rotate(-90deg);
  }
`

const HeaderTitle = styled.h6`
  font-size: 18px;
  font-weight: medium;
  margin-left: 14px;
  color: ${({ theme: { colors } }) => colors.grayText};
  @media ${device.tablet} {
    font-size: 15px;
    margin-left: 12px;
    font-weight: 400;
  }
`

const Children = styled.div`
  background: #FFFBEF 0% 0% no-repeat padding-box;
  padding: 18px;
  @media ${device.tablet} {
    .children-data {
      max-width: 400px;
    }
  }
`

function FilterContainer({ title, children }) {
  const [showData, setShowData] = useState(true)

  const handleToggleData = () => {
    setShowData(!showData)
  }

  return (
    <FilterContainerStyle>
      <Header onClick={handleToggleData}>
        <Arrow className={`arrow ${!showData && 'move'}`} />
        <HeaderTitle>{title}</HeaderTitle>
      </Header>
      {showData &&
        (<Children>
          <div className='children-data'>
            {children}
          </div>
        </Children>
        )
      }
    </FilterContainerStyle >
  )
}

export default FilterContainer
