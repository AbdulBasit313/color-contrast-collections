import React, { useState } from "react"
import styled from "styled-components"
import useWindowSize from "../../hooks/useWindowSize"
import { device } from "../../styles/BreakPoints"
import CodeCard from "../CodeCard"
import ColorCodeContainer from "../ColorCodeContainer"
import CopyButton from "../CopyButton"

const ContrastCardSpecsContainer = styled.div`
  padding: 0 30px 10px 30px;
  position: relative;
  overflow: hidden;
  @media ${device.laptopL} {
    padding: 0 14px 10px 14px;
  }
  @media ${device.tablet} {
    padding: 0 14px 10px 14px;
  }
`

const ContrastCardSpecs = ({ foreground, background }) => {
  const [width] = useWindowSize()
  const [showCode, setShowCode] = useState(false)

  const handleShowCode = () => {
    setShowCode(!showCode)
  }

  return (
    <ContrastCardSpecsContainer>
      <CodeCard
        background={background}
        foreground={foreground}
        showCode={showCode}
        handleShowCode={handleShowCode}
      />
      <div>
        <ColorCodeContainer title="Background Color" code={background} />
        <ColorCodeContainer title="Foreground Color" code={foreground} />
        <CopyButton
          handleShowCode={handleShowCode}
          text="Show Code"
          bold
          mt={width <= 768 ? "13px" : width <= 1440 ? "18px" : "24px"}
        />
      </div>
    </ContrastCardSpecsContainer>
  )
}

export default ContrastCardSpecs
