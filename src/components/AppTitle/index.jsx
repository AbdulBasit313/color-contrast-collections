import React, { useContext } from "react"
import styled from "styled-components"
import { ColorContext } from "../../context/colors/colorContext"
import { device } from "../../styles/BreakPoints"

const TitleStyle = styled.div`
  margin-top: 50px;
  /* margin-bottom: 40px; */
  margin-bottom: 10px;
  text-align: center;
  @media ${device.laptopL} {
    margin-top: 28px;
  }
  @media ${device.tablet} {
    margin-top: 28px;
    margin-bottom: 25px;
  }
`

const Title = styled.h1`
  color: ${(props) => props.theme.colors.textColor};
  font-size: 40px;
  font-weight: bold;
  @media ${device.laptopL} {
    font-size: 30px;
  }
  @media ${device.tablet} {
    font-size: 20px;
  }
`
const Subtitle = styled.div`
  margin-top: 12px;
  p {
    color: ${(props) => props.theme.colors.textColor};
    font-size: 14px;
    font-weight: normal;
    margin-top: 5px;
    @media ${device.tablet} {
      font-size: 11px;
    }
  }
`

const Highlight = styled.span`
  color: #212121;
  font-size: 15px;
`

function AppTitle() {
  const { colorsData } = useContext(ColorContext)

  console.log("length", colorsData?.length)

  return (
    <TitleStyle>
      <Title>Welcome to Contrast Picker</Title>
      <Subtitle>
        <p>
          <Highlight>{colorsData.length}</Highlight> curated{" "}
          <Highlight>"Background with Text"</Highlight> colors contrast
        </p>
        <p>
          We help you to pick best contrast for your landing pages, stores, and
          blogs
        </p>
      </Subtitle>
    </TitleStyle>
  )
}

export default AppTitle
