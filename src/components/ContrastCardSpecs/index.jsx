import React from 'react'
import styled from "styled-components"
import ColorCodeContainer from '../ColorCodeContainer'
import CopyButton from '../CopyButton'

const ContrastCardSpecsContainer = styled.div`
  padding: 0 30px 10px 30px;
`

function ContrastCardSpecs({ foreground, background }) {
  return (
    <ContrastCardSpecsContainer>
      <ColorCodeContainer title="Background Color" code={background} />
      <ColorCodeContainer title="Foreground Color" code={foreground} />
      <CopyButton text="Copy Code" bold mt='24px' />
    </ContrastCardSpecsContainer>
  )
}

export default ContrastCardSpecs
