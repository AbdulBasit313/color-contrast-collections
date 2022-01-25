import * as React from "react"
import { ThemeProvider } from "styled-components"
import AppTitle from "../components/AppTitle"
import ContrastCardList from "../components/ContrastCardList"
import SdiebarFilters from "../components/Filters/SidebarFilters"
import SmallScreenFilter from "../components/Filters/SmallScreenFilter"
import TopFilter from "../components/Filters/TopFilter"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ColorState from "../context/colors/ColorState"
import useWindowSize from "../hooks/useWindowSize"
import { Container, Divider, GlobalStyles } from "../styles/Global"
import { theme } from "../styles/Theme"

const IndexPage = () => {
  const [width] = useWindowSize()

  return (
    <main>
      <ColorState>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Container>
            <GlobalStyles />
            <AppTitle />
            {width <= 768 && <SmallScreenFilter />}
            <TopFilter />
            <Divider>
              {width > 768 && <SdiebarFilters />}
              <ContrastCardList />
            </Divider>
          </Container>
          <Footer />
        </ThemeProvider>
      </ColorState>
    </main>
  )
}

export default IndexPage
