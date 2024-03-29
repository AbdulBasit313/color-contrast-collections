import React, { useState } from 'react'
import styled from 'styled-components'
import { device } from '../../styles/BreakPoints'
import './style.css'

const AppCheckboxContainer = styled.div`
  display: flex;
`

const AppCheckboxText = styled.p`
  font-size: 14px;
  color: #303030;
  margin-left: 26px;
  /* margin-bottom: 10px; */
  @media ${device.tablet} {
    font-size: 12px;
  }
`

function AppCheckbox({ text, handleChange }) {
  const [checked, setChecked] = useState(false)

  // const handleChange = () => {
  //   setChecked(!checked)
  // }

  return (
    <AppCheckboxContainer>
      <label class="checkbox-container">
        <input type="checkbox" checked={checked ? 'checked' : null} onChange={handleChange} />
        <span class="checkmark" />
      </label>
      <AppCheckboxText>{text}</AppCheckboxText>
    </AppCheckboxContainer>
  )
}

export default AppCheckbox
