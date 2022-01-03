import React from 'react'
import styled from "styled-components"
import useWindowSize from '../../hooks/useWindowSize'
import ColorCodeContainer from '../ColorCodeContainer'
import CopyButton from '../CopyButton'

const ContrastCardSpecsContainer = styled.div`
  padding: 0 30px 10px 30px;
  @media only screen and (max-width: 768px) {
    padding: 0 14px 10px 14px;
  }
`

const ContrastCardSpecs = ({ foreground, background }) => {
  const [width] = useWindowSize()

  return (
    <ContrastCardSpecsContainer>
      <ColorCodeContainer title="Background Color" code={background} />
      <ColorCodeContainer title="Foreground Color" code={foreground} />
      <CopyButton text="Copy Code" bold mt={width <= 768 ? '13px' : '24px'} />
    </ContrastCardSpecsContainer>
  )
}

export default ContrastCardSpecs
