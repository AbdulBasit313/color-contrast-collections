import React from 'react'
import styled from 'styled-components'
import { device } from '../../styles/BreakPoints'

const RadioLabelStyle = styled.label`
  cursor: pointer;
`

const RadioButtonStyle = styled.input`
  cursor: pointer;
`

const RadioText = styled.span`
  color: ${({ theme: { colors } }) => colors.darkGrayText};
  font-size: 14px;
  margin-left: 7px;
  @media ${device.tablet} {
    font-size: 12px;
    margin-left: 5px;
  }
`

function RadionButton({ name, id, value, onChange, checked, text }) {
  return (
    <div>
      <RadioLabelStyle htmlFor={id}>
        <RadioButtonStyle
          type='radio'
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          checked={checked}
        />
        <RadioText>{text}</RadioText>
      </RadioLabelStyle>
    </div>
  )
}

export default RadionButton
