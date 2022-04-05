import { Link } from "gatsby"
import * as React from "react"
import styled, { ThemeProvider } from "styled-components"
import NoData from "../assets/images/no-data.svg"
import { Container, GlobalStyles, PageCenter } from "../styles/Global"
import { theme } from "../styles/Theme"

const SvgStyle = styled.div`
  svg {
    width: 100%;
  }
`

const Message = styled.h4`
  font-size: 24px;
  color: #1a1a1a;
  font-weight: 500;
  margin-top: 35px;
  margin-bottom: 35px;
  text-align: center;
  line-height: 1.3;
`

const BackToHomeBtn = styled.button`
  background: #f4b400;
  color: #ffffff;
  padding: 9px 30px;
  border-radius: 6px;
`

const NotFoundPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <PageCenter>
          <SvgStyle>
            <NoData />
          </SvgStyle>
          <Message>Sorry, we didn't find any match!</Message>
          <Link to="/">
            <BackToHomeBtn>Back to Home</BackToHomeBtn>
          </Link>
        </PageCenter>
      </Container>
    </ThemeProvider>
  )
}

export default NotFoundPage
