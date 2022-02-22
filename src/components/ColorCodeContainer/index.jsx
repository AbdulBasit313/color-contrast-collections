import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { device } from '../../styles/BreakPoints'
import { AppBorder } from '../../styles/Global'
import ColorCode from '../ColorCode'
import CopyButton from '../CopyButton'

const ColorCodeTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textColor};
  margin-top: 14px;
  margin-bottom: 11px;
  @media ${device.laptopL} {
    margin-top: 11px;
    margin-bottom: 8px;
    font-size: 14px;
  }
  @media ${device.tablet} {
    font-size: 12px;
    margin-top: 14px;
    margin-bottom: 11px;
  }
`

const ColorCodeWrapper = styled(AppBorder)`
  padding: 5px;
  display: grid;
  grid-template-columns: 45fr 55fr;
  @media ${device.laptopL} {
    padding: 4px;
  }
  @media ${device.tablet} {
    padding: 5px;
  }
`

function ColorCodeContainer({ title, code }) {
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false)
      }, 1500)
    }
  }, [isCopied])

  const handleCopyCode = () => {
    setIsCopied(true)
  }

  return (
    <section>
      <ColorCodeTitle>{title}</ColorCodeTitle>
      <ColorCodeWrapper>
        <CopyButton text="Copy Color" code={code} handleCopyCode={handleCopyCode} />
        <ColorCode code={code} isCopied={isCopied} />
      </ColorCodeWrapper>
    </section>
  )
}

export default ColorCodeContainer
