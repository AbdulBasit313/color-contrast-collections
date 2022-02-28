import React from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import styled from "styled-components"
import { device } from "../../styles/BreakPoints"

const CopyBtn = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textColor};
  outline: none;
  padding: 16px;
  /* min-width: 168px; */
  /* width: 40%; */
  width: 100%;
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  margin-top: ${({ mt }) => (mt ? mt : "unset")};

  @media ${device.laptopL} {
    font-size: 13px;
    padding: 10px;
  }
  @media ${device.tablet} {
    font-size: 14px;
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
