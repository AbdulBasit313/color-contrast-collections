import styled, { createGlobalStyle } from "styled-components"
import { device } from "./BreakPoints"

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: ${props => props.theme.fonts.poppins}, sans-serif;
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
  /* max-width: 1280px; */
  max-width: 1640px;
  margin: 0 auto;
  padding: 0 15px;
`

export const AppBorder = styled.div`
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 5px;
`

export const mt24 = styled.div`
  margin-top: 24px;
  @media ${device.tablet} {
    margin-top: 13px;
  }
`

export const Divider = styled.div`
  display: grid;
  grid-template-columns: 20fr 80fr;
  grid-column-gap: 50px;
  @media ${device.tablet} {
    margin-bottom: 30px;
    display: block;
  }
`
