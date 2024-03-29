import React, { useContext, useState } from "react"
import styled from "styled-components"
import Star from "../../../assets/icons/star.svg"
import { topFilter } from "../../../config/filterr"
import { ColorContext } from "../../../context/colors/colorContext"
import { device } from "../../../styles/BreakPoints"

const TopFilterStyle = styled.div`
  /* padding-top: 60px; */
  text-align: center;
  @media ${device.tablet} {
    text-align: unset;
  }
  ul {
    text-decoration: none;
    @media ${device.tablet} {
      display: flex;
      justify-content: space-between;
    }
    li {
      display: inline-block;
      color: ${({ theme: { colors } }) => colors.grayText};
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
      margin-right: 80px;
      @media ${device.tablet} {
        font-size: 12px;
        margin-right: unset;
      }
    }
    .selected {
      background: ${({ theme: { colors } }) => colors.primary};
    }
    .box {
      border-radius: 5px;
      padding: 7px 14px;
      @media ${device.tablet} {
        padding: 5px 11px;
      }
    }
    .star-icon {
      margin-right: 6px;
      @media ${device.tablet} {
        width: 10px;
        height: 10px;
        margin-right: 4px;
      }
    }
    .filter-text {
      @media ${device.tablet} {
        margin-left: 4px;
      }
    }
  }
`

function TopFilter() {
  const { activeTopFilter, setActiveTopFilter, onRemoveImage, onShowImage } =
    useContext(ColorContext)

  const textOnlyFilter = (id) => {
    setActiveTopFilter(id)
    onRemoveImage()
  }

  const textWithImageFilter = (id) => {
    setActiveTopFilter(id)
    onShowImage()
  }

  // const onChangeFilter = (id) => {
  //   setActiveFilter((prevState) => {
  //     console.log('id  ==>', prevState)
  //     if (activeFilter === 3) {
  //       onRemoveImage()
  //     }
  //     if (activeFilter === 4) {
  //       onShowImage()
  //     }
  //   }, id)
  // }

  return (
    <TopFilterStyle>
      <ul>
        {topFilter.map(({ id, name }) => (
          <li
            key={id}
            className={id === activeTopFilter ? "box selected" : "box"}
            // onClick={() => onChangeFilter(id)}
            onClick={() =>
              id === 3 ? textOnlyFilter(id) : textWithImageFilter(id)
            }
          >
            {id === 1 && <Star className="star-icon" />}
            <span className="filter-text">{name}</span>
          </li>
        ))}
      </ul>
    </TopFilterStyle>
  )
}

export default TopFilter
