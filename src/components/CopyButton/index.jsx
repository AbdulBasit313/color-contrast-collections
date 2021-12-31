import React from 'react'
import styled from 'styled-components'

const CopyBtn = styled.button`
  background: #FEF7E5 0% 0% no-repeat padding-box;
  border-radius: 5px;
  font-size: 14px;
  color: #000000;
  border: none;
  outline: none;
  padding: 16px;
  min-width: 168px;
  width: 100%;
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  margin-top: ${props => props.mt ? props.mt : 'unset'};
  cursor: pointer;
`

function CopyButton({ text, bold, mt }) {
  return (
    <CopyBtn bold={bold} mt={mt}>
      {text}
    </CopyBtn>
  )
}

export default CopyButton
