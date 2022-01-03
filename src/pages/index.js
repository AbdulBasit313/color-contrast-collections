import * as React from "react"
import AppTitle from "../components/AppTitle"
import ContrastCard from "../components/ContrastCard"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { data } from "../data"
import { Container, ContrastCardsWrapper, GlobalStyles } from "../styles/Global"

const IndexPage = () => {
  return (
    <main>
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
    </main>
  )
}

export default IndexPage
