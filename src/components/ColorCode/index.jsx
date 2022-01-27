import React from 'react'
import styled from "styled-components"
import { checkLuminance } from '../../config/checkLuminance'
import { device } from '../../styles/BreakPoints'

const Code = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    margin: 0 auto;
    font-size: 14px;
    color: ${props => props.theme.colors.textColor};
    text-align: center;
    @media ${device.tablet} {
  }
 }
`

const ColorCodeResult = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 5px;
  background-color: ${props => props.code};
  border: ${props => checkLuminance(props.code) === false ? '2px solid #FEF7E5' : null};
  @media ${device.tablet} {
    width: 35px;
    height: 35px;
  }
`

function ColorCode({ code }) {
  return (
    <Code>
      <span>{code}</span>
      <ColorCodeResult code={code} />
    </Code>
  )
}

export default ColorCode
