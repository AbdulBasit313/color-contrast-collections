import * as React from "react"
import { ThemeProvider } from "styled-components"
import AppTitle from "../components/AppTitle"
import ContrastCard from "../components/ContrastCard"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { data } from "../data"
import { Container, ContrastCardsWrapper, GlobalStyles } from "../styles/Global"
import { theme } from "../styles/Theme"

const IndexPage = () => {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Container>
          <GlobalStyles />
          <AppTitle />
          <ContrastCardsWrapper>
            {data.map(({ background, foreground }) => (
              <ContrastCard foreground={foreground} background={background} />
            ))}
          </ContrastCardsWrapper>
        </Container>
        <Footer />
      </ThemeProvider>
    </main>
  )
}

export default IndexPage
