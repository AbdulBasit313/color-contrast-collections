import { StaticImage } from "gatsby-plugin-image"
import React, { useContext } from "react"
import styled, { css } from "styled-components"
import { ColorContext } from "../../context/colors/colorContext"
import { device } from "../../styles/BreakPoints"

const ContrastCardResultContainer = styled.div`
  background: ${({ background }) => background};
  border-radius: 5px;
  padding: 40px 50px;
  display: flex;
  flex-direction: ${({ imageOnLeft }) => (imageOnLeft ? "row-reverse" : null)};
  @media ${device.laptopL} {
    padding: 30px 35px;
  }
  @media ${device.tablet} {
    padding: 22px;
    display: block;
  }
  h2 {
    font-size: 20px;
    font-weight: 600;
    color: ${({ foreground }) => foreground};
    @media ${device.tablet} {
      font-size: 14px;
    }
  }
  h3 {
    font-size: 26px;
    font-weight: bold;
    color: ${({ foreground }) => foreground};
    margin-top: 18px;
    margin-bottom: 26px;
    @media ${device.laptopL} {
      margin-bottom: 16px;
    }
    @media ${device.tablet} {
      margin-bottom: 14px;
      margin-top: 8px;
      font-size: 16px;
    }
  }
  p {
    font-size: 14px;
    font-weight: normal;
    color: ${({ foreground }) => foreground};
    margin-bottom: 26px;
    line-height: 1.6;
    @media ${device.laptopL} {
      margin-bottom: 16px;
      line-height: 1.4;
    }
    @media ${device.tablet} {
      font-size: 12px;
      margin-bottom: 14px;
    }
  }
  button {
    outline: none;
    border: 1px solid ${({ foreground }) => foreground};
    color: ${({ foreground }) => foreground};
    background-color: transparent;
    padding: 8px 14px;
    border-radius: 20px;
    @media ${device.laptopL} {
      padding: 6px 10px;
      font-size: 12px;
    }
    @media ${device.tablet} {
      /* border-radius: 2px; */
      padding: 5px 8px;
      font-size: 12px;
    }
  }
  .card-image {
    width: 291px;
    height: 190px;
    margin-left: 20px;
    ${(props) =>
      props.imageOnLeft
        ? css`
            margin-left: unset;
            margin-right: 30px;
          `
        : css`
            margin-left: 20px;
            margin-right: unset;
          `}
    @media ${device.tablet} {
      /* width: 321px; */
      /* width: 100%; */
      /* height: 138px; */
      /* width: 100%; */
      /* height: 100%; */
      /* object-fit: contain; */
      width: unset;
      height: unset;
      /* height: 80%; */
      margin-top: 20px;
      margin-left: unset;
    }
  }
`

const TextContainerStyle = styled.div`
  max-width: 560px;
`

const ImageContainerStyle = styled.div`
  margin: auto;
  @media ${device.tablet} {
    justify-content: center;
    display: flex;
    margin: unset;
  }
`

function ContrastCardResult({ foreground, background }) {
  const { showImage, filters } = useContext(ColorContext)

  return (
    <ContrastCardResultContainer
      background={background}
      foreground={foreground}
      imageOnLeft={filters.imageOnLeft}
    >
      <TextContainerStyle>
        <h2>Primary Title</h2>
        <h3>There are many variations</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <button>Find More</button>
      </TextContainerStyle>
      {showImage && (
        <ImageContainerStyle imageOnLeft={filters.imageOnLeft}>
          {/* <Image className="card-image" /> */}
          <StaticImage
            src={"../../assets/images/image-1.png"}
            alt="Card Image"
            className="card-image"
          />
        </ImageContainerStyle>
      )}
    </ContrastCardResultContainer>
  )
}

export default ContrastCardResult
