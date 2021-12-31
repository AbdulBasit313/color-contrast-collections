import React from 'react'
import styled from "styled-components"
import { AppBorder } from '../../styles/Global'
import ColorCode from '../ColorCode'
import CopyButton from '../CopyButton'

const ColorCodeTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #000000;
  margin-top: 14px;
  margin-bottom: 11px;
`

const ColorCodeWrapper = styled(AppBorder)`
  padding: 5px;
  display: flex;
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
