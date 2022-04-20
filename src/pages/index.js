import * as React from "react"
import { ThemeProvider } from "styled-components"
import AppTitle from "../components/AppTitle"
import ContrastCardList from "../components/ContrastCardList"
import SidebarFilters from "../components/Filters/SidebarFilters"
import SmallScreenFilter from "../components/Filters/SmallScreenFilter"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import SEO from "../components/SEO"
import ColorState from "../context/colors/ColorState"
import useWindowSize from "../hooks/useWindowSize"
import { Container, Divider, GlobalStyles } from "../styles/Global"
import { theme } from "../styles/Theme"
import { Typography } from "../styles/Typography"

const HomePage = () => {
  const [width] = useWindowSize()

  return (
    <>
      <SEO title="Home" />
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <ColorState>
          <Navbar />
          <Container>
            <AppTitle />
            <ContrastCardList />
          </Container>
          <Footer />
        </ColorState>
      </ThemeProvider>
    </>
  )
}

export default HomePage
