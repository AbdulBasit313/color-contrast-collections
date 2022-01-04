import React from 'react'
import styled from "styled-components"
import { device } from '../../styles/BreakPoints'
import { AppBorder } from '../../styles/Global'
import ColorCode from '../ColorCode'
import CopyButton from '../CopyButton'

const ColorCodeTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme.colors.textColor};
  margin-top: 14px;
  margin-bottom: 11px;
  @media ${device.tablet} {
    font-size: 12px;
  }
`

const ColorCodeWrapper = styled(AppBorder)`
  padding: 5px;
  display: grid;
  grid-template-columns: 45fr 55fr;
`

function ColorCodeContainer({ title, code }) {
  return (
    <section>
      <ColorCodeTitle>{title}</ColorCodeTitle>
      <ColorCodeWrapper>
        <CopyButton text="Copy Color" />
        <ColorCode code={code} />
      </ColorCodeWrapper>
    </section>
  )
}

export default ColorCodeContainer
