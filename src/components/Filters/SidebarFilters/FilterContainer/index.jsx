import React from 'react'
import styled from 'styled-components'
import Arrow from '../../../../assets/icons/arrow.svg'
import { device } from '../../../../styles/BreakPoints'

const FilterContainerStyle = styled.div`

  @media ${device.tablet} {
  }
`

function FilterContainer({ title, children }) {
  return (
    <FilterContainerStyle>
      <div>
        <Arrow />
        {title}
      </div>
      {children}
    </FilterContainerStyle>
  )
}

export default FilterContainer
