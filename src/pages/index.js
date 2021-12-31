import * as React from "react"
import ContrastCard from "../components/ContrastCard"
import { Container, GlobalStyles } from "../styles/Global"

const IndexPage = () => {
  return (
    <main>
      <Container>
        <GlobalStyles />
        <h1>Contrast Picker</h1>
        <ContrastCard foreground="#000000" background='#FFCF51' />
        <ContrastCard foreground="#FCFCFC" background='#DB4437' />
        <ContrastCard foreground="#FCFCFC" background='#6967CE' />
        <ContrastCard foreground="#FCFCFC" background='#4A154B' />
        <ContrastCard foreground="#F3E7F3" background='#DB4437' />
      </Container>
    </main>
  )
}

export default IndexPage
