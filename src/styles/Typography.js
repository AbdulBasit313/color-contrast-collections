import styled, { createGlobalStyle } from "styled-components"
import PoppinsBlack from "../assets/fonts/Poppins-Black.ttf"
import PoppinsBold from "../assets/fonts/Poppins-Bold.ttf"
import PoppinsExtraBold from "../assets/fonts/Poppins-ExtraBold.ttf"
import PoppinsExtraLight from "../assets/fonts/Poppins-ExtraLight.ttf"
import PoppinsLight from "../assets/fonts/Poppins-Light.ttf"
import PoppinsMedium from "../assets/fonts/Poppins-Medium.ttf"
import PoppinsRegular from "../assets/fonts/Poppins-Regular.ttf"
import PoppinsSemiBold from "../assets/fonts/Poppins-SemiBold.ttf"
import PoppinsThin from "../assets/fonts/Poppins-Thin.ttf"

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsBlack});
    font-style: normal;
    font-weight: 900;
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsExtraBold});
    font-style: normal;
    font-weight: 800;
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsBold});
    font-style: normal;
    font-weight: 700;
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsSemiBold});
    font-style: normal;
    font-weight: 600;
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsMedium});
    font-style: normal;
    font-weight: 500;
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsRegular});
    font-style: normal;
    font-weight: 400;
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsLight});
    font-style: normal;
    font-weight: 300;
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsExtraLight});
    font-style: normal;
    font-weight: 200;
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsThin});
    font-style: normal;
    font-weight: 100;
  }
`

const Headline = styled.h1`
  font-size: 3em;
  font-weight: 600;
`

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
`

const Subtitle = styled.h3`
  font-size: 1em;
  font-weight: 400;
  text-transofrm: uppercase;
`

const Paragraph = styled.p`
  font-size: 0.8em;
  font-weight: 400;
`

export { Typography, Headline, Title, Subtitle, Paragraph }
