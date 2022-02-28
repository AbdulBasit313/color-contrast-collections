import * as React from "react"
import { ThemeProvider } from "styled-components"
import AppTitle from "../components/AppTitle"
import ContrastCardList from "../components/ContrastCardList"
import SdiebarFilters from "../components/Filters/SidebarFilters"
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

  console.log("page render")

  return (
    <>
      <SEO title="Home" />
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <ColorState>
          {/* <Typography /> */}
          <Navbar />
          <Container>
            <AppTitle />
            {width <= 768 && <SmallScreenFilter />}
            {/* <TopFilter /> */}

            <Divider>
              {width > 768 && <SdiebarFilters />}
              <ContrastCardList />
            </Divider>

            {/* {width > 768 ? (
              <Divider>
                <SdiebarFilters />
                <ContrastCardList />
              </Divider>
            ) : (
              <Divider>
                <ContrastCardList />
              </Divider>
            )} */}
          </Container>
          <Footer />
        </ColorState>
      </ThemeProvider>
    </>
  )
}

export default HomePage
