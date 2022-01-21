import * as React from "react"
import { ThemeProvider } from "styled-components"
import AppTitle from "../components/AppTitle"
import ContrastCard from "../components/ContrastCard"
import SdiebarFilters from "../components/Filters/SidebarFilters"
import SmallScreenFilter from "../components/Filters/SmallScreenFilter"
import TopFilter from "../components/Filters/TopFilter"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { data } from "../data"
import useWindowSize from "../hooks/useWindowSize"
import { Container, ContrastCardsWrapper, Divider, GlobalStyles } from "../styles/Global"
import { theme } from "../styles/Theme"

const IndexPage = () => {
  const [width] = useWindowSize()

  return (
    <main>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Container>
          <GlobalStyles />
          <AppTitle />
          {width <= 768 && <SmallScreenFilter />}
          <TopFilter />
          <Divider>
            {width > 768 && <SdiebarFilters />}
            <ContrastCardsWrapper>
              {data.map(({ background, foreground }) => (
                <ContrastCard foreground={foreground} background={background} />
              ))}
            </ContrastCardsWrapper>
          </Divider>
        </Container>
        <Footer />
      </ThemeProvider>
    </main>
  )
}

export default IndexPage
