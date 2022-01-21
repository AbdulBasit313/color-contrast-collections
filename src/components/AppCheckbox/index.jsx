import React, { useState } from 'react'
import styled from 'styled-components'
import './style.css'

const AppCheckboxContainer = styled.div`
  display: flex;
`

const AppCheckboxText = styled.p`
  font-size: 14px;
  color: #303030;
  margin-left: 26px;
`

function AppCheckbox({ text }) {
  const [checked, setChecked] = useState(false)

  const handleChange = () => {
    setChecked(!checked)
  }

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
