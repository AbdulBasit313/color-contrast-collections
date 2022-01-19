import React from 'react'
import styled from 'styled-components'
import { device } from '../../styles/BreakPoints'

const CopyBtn = styled.button`
  background: ${props => props.theme.colors.primary};
  @media ${device.tablet} {
  }
`

function CopyButton({ text, bold, mt }) {
  return (
    <CopyBtn bold={bold} mt={mt}>
      {text}
    </CopyBtn>
  )
}

export default CopyButton
