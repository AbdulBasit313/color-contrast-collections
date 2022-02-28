import React from "react"
import styled from "styled-components"
import BackIcon from "../../assets/icons/back-icon.svg"
import useWindowSize from "../../hooks/useWindowSize"
import { device } from "../../styles/BreakPoints"

const CodeCardStyle = styled.div`
  right: 0;
  /* left: 30px; */
  /* left: 450px; */
  overflow: hidden;
  left: ${({ showCode }) => (showCode ? "30px" : "440px")};
  top: 0;
  bottom: 0;
  position: absolute;
  background: ${({ theme }) => theme.colors.white};
  padding: 15px;
  box-shadow: 0px 3px 15px #0000001f;
  border-radius: 5px;
  transition: all 0.2s linear;
  /* opacity: ${({ showCode }) => (showCode ? 1 : 0)}; */
  /* visibility: ${({ showCode }) => (showCode ? "visible" : "hidden")}; */
  @media ${device.tablet} {
    left: ${({ showCode, width }) => (showCode ? "3px" : `${width - 30}px`)};
    top: 15px;
    bottom: 3px;
    right: 3px;
  }
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Title = styled.h4`
  color: #5b5b5b;
  font-size: 18px;
  font-weight: bold;
`
const BackIconStyle = styled.div`
  cursor: pointer;
`

const Property = styled.span`
  color: #4a154b;
  font-size: 18px;
`

const Value = styled.span`
  color: #f67b00;
  font-size: 18px;
`

function CodeCard({ foreground, background, showCode, handleShowCode }) {
  const [width] = useWindowSize()

  return (
    <CodeCardStyle showCode={showCode} width={width}>
      <HeaderContainer>
        <Title>CSS</Title>
        <BackIconStyle onClick={handleShowCode}>
          <BackIcon />
        </BackIconStyle>
      </HeaderContainer>
      <pre>
        <code>
          <p>
            <Property>
              background: <Value>{background}</Value>
            </Property>
          </p>
          <p>
            <Property>
              color: <Value>{foreground}</Value>
            </Property>
          </p>
        </code>
      </pre>
    </CodeCardStyle>
  )
}

export default CodeCard
