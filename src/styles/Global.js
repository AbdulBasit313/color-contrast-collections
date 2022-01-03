import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Poppins', sans-serif;
  } 
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  li,
  p {
    padding: 0;
    margin: 0;
}
`

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 15px;
`

export const AppBorder = styled.div`
  border: 2px solid #FEF7E5;
  border-radius: 5px;
`

export const mt24 = styled.div`
  margin-top: 24px;
  @media only screen and (max-width: 768px) {
    margin-top: 13px;
  }
`
export const ContrastCardsWrapper = styled.div`
  margin-bottom: 70px;
  @media only screen and (max-width: 768px) {
    margin-bottom: 30px;
  }
`
