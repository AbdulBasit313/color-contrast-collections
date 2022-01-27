import React from 'react'
import { useState } from 'react'
import { checkLuminance } from '../../config/checkLuminance'
import { hexToRgb } from '../../config/colorFormat'
import { data } from "../../data"
import { ColorContext } from "./colorContext"

const ColorState = ({ children }) => {
  const [activeTopFilter, setActiveTopFilter] = useState(1)
  const [colorsData, setColorsData] = useState(data)
  const [showImage, setShowImage] = useState(false)

  const [textColor, setTextColor] = useState({
    darkText: false,
    lightText: false,
    allText: true,
  })
  const [imagePostion, setImagePostion] = useState({
    imageOnRight: false,
    imageOnLeft: false,
  })

  const [filters, setFilters] = useState({
    darkText: false,
    lightText: false,
    allText: true,
    selectedColor: null,
    imageOnRight: false,
    imageOnLeft: false,
  })

  const nearestColors = (color) => {
    const givenColor = hexToRgb(color)

    console.log('givenColor', givenColor)

    // const filterColors = colorsData.filter((item) => {
    //   let changeColor = hexToRgb(item.background)
    //   // console.log('changeColor', changeColor)
    //   if (givenColor.r >= changeColor.r) {
    //     return (
    //       (givenColor.r >= changeColor.r + 40 || givenColor.r >= changeColor.r - 40)
    //       &&
    //       (givenColor.g >= changeColor.g + 40 || givenColor.g >= changeColor.g - 40)
    //       &&
    //       (givenColor.b >= changeColor.b + 40 || givenColor.b >= changeColor.b - 40)
    //     )
    //   }
    // })
    setColorsData(data)

    setColorsData((prevState) => prevState.filter((item) => {
      let changeColor = hexToRgb(item.background)
      // console.log('changeColor', changeColor)
      if (givenColor.r >= changeColor.r) {
        return (
          (givenColor.r >= changeColor.r + 40 || givenColor.r >= changeColor.r - 40)
          &&
          (givenColor.g >= changeColor.g + 40 || givenColor.g >= changeColor.g - 40)
          &&
          (givenColor.b >= changeColor.b + 40 || givenColor.b >= changeColor.b - 40)
        )
      }
    }))
  }

  const applyFilters = () => {
    setFilters({
      imageOnRight: imagePostion.imageOnRight,
      imageOnLeft: imagePostion.imageOnLeft,
      darkText: textColor.darkText,
      lightText: textColor.lightText,
      allText: textColor.allText,
    })
    if (textColor.darkText) {
      filterColros(false)
    }
    if (textColor.lightText) {
      filterColros(true)
    }
    if (textColor.allText) {
      setColorsData(data)
    }
    if (imagePostion.imageOnLeft || imagePostion.imageOnRight) {
      setShowImage(true)
      setActiveTopFilter(4)
    }
    if (!imagePostion.imageOnLeft || !imagePostion.imageOnRight) {
      setActiveTopFilter(3)
    }
  }

  const filterColros = (condition) => {
    // const filteringColors = colorsData.filter(item => (
    //   checkLuminance(item.foreground) === condition
    // ))
    setColorsData(data)
    setColorsData((prevState) => prevState.filter(item => (
      checkLuminance(item.foreground) === condition
    )))
  }

  const onClickImageOnRight = () => {
    setImagePostion({
      imageOnRight: true,
      imageOnLeft: false,
    })
  }

  const onClickImageOnLeft = () => {
    setImagePostion({
      imageOnRight: false,
      imageOnLeft: true,
    })
  }

  const onClickDarkText = () => {
    setTextColor({
      darkText: true,
      lightText: false,
      allText: false,
    })
  }

  const onClickLightText = () => {
    setTextColor({
      darkText: false,
      lightText: true,
      allText: false,
    })
  }

  const onClickAll = () => {
    setTextColor({
      darkText: false,
      lightText: false,
      allText: true
    })
  }

  const onRemoveImage = () => {
    setShowImage(false)
    setFilters({ ...filters, imageOnLeft: false, imageOnRight: false })
  }

  const onShowImage = () => {
    setShowImage(true)
  }

  return (
    <ColorContext.Provider
      value={{
        activeTopFilter,
        setActiveTopFilter,
        colorsData,
        showImage,
        filters,
        applyFilters,
        onRemoveImage,
        onShowImage,
        onClickImageOnRight,
        onClickImageOnLeft,
        filterColros,
        onClickDarkText,
        onClickLightText,
        onClickAll,
        nearestColors,
      }}
    >
      {children}
    </ColorContext.Provider>
  )
}

export default ColorState
