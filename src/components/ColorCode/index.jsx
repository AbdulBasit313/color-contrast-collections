import React from 'react'
import styled from "styled-components"

const Code = styled.div`
  display: flex;
  align-items: center;
  span {
    font-size: 14px;
    color: #000000;
    margin: 0 37px;
  }
`

const ColorCodeResult = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 5px;
  background-color: ${props => props.code};
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