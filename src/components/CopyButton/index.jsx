import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import styled from 'styled-components'
import { device } from '../../styles/BreakPoints'

const CopyBtn = styled.button`
  background: ${props => props.theme.colors.primary};
  border-radius: 5px;
  font-size: 14px;
  color: ${props => props.theme.colors.textColor};
  border: none;
  outline: none;
  padding: 16px;
  /* min-width: 168px; */
  /* width: 40%; */
  width: 100%;
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  margin-top: ${props => props.mt ? props.mt : 'unset'};
  cursor: pointer;

  @media ${device.tablet} {
    padding: 10px;
  }
`

function CopyButton({ text, bold, mt, handleShowCode, code, handleCopyCode }) {
  return (
    <CopyToClipboard text={code} onCopy={handleCopyCode}>
      <CopyBtn bold={bold} mt={mt} onClick={handleShowCode}>
        {text}
      </CopyBtn>
    </CopyToClipboard>
  )
}

export default CopyButton
