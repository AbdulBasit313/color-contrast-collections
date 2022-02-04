import React, { useState } from 'react'
import { checkLuminance } from '../../config/checkLuminance'
import { hexToRgb } from '../../config/colorFormat'
import { nearbyColors } from '../../config/nearbyColors'
import { data } from "../../data"
import { ColorContext } from "./colorContext"

const ColorState = ({ children }) => {
  const [activeTopFilter, setActiveTopFilter] = useState(1)
  const [colorsData, setColorsData] = useState(data)
  const [showImage, setShowImage] = useState(false)
  const [emptyFilter, setEmptyFilter] = useState(true)
  const [activeColor, setActiveColor] = useState(null)

  const [textColor, setTextColor] = useState({
    darkText: false,
    lightText: false,
    allTextSelected: false,
  })
  const [imagePostion, setImagePostion] = useState({
    imageOnRight: false,
    imageOnLeft: false,
    noImageSelected: false,
  })

  const [selectedColor, setSelectedColor] = useState(null)

  const [filters, setFilters] = useState({
    darkText: false,
    lightText: false,
    allTextSelected: false,
    selectedColor: null,
    imageOnRight: false,
    imageOnLeft: false,
  })

  const nearestColors = (color) => {
    const staticColor = hexToRgb(color)

    setColorsData((prevState) => prevState.filter((item) => {
      let comingColor = hexToRgb(item.background)

      let r = nearbyColors(staticColor.r, comingColor.r)
      let g = nearbyColors(staticColor.g, comingColor.g)
      let b = nearbyColors(staticColor.b, comingColor.b)

      if (r && g && b) {
        return true
      }
    }))
  }

  const applyFilters = () => {
    const { imageOnRight, imageOnLeft, noImageSelected } = imagePostion
    const { darkText, lightText, allTextSelected } = textColor

    setFilters({
      imageOnRight, imageOnLeft, noImageSelected,
      darkText, lightText, allTextSelected,
      selectedColor,
    })

    if (darkText && !selectedColor) {
      console.log('dark text runs')
      filterWithTextColors(false)
    }
    if (lightText && !selectedColor) {
      console.log('light text runs')
      filterWithTextColors(true)
    }
    if (allTextSelected && !selectedColor) {
      console.log('all text selected runs')
      setColorsData(data)
    }
    if (selectedColor && !darkText && !lightText && !allTextSelected) {
      console.log('selected color runs')
      setColorsData(data)
      nearestColors(selectedColor)
    }

    if (selectedColor && (darkText || lightText || allTextSelected)) {
      console.log('color and text selected runs')
      setColorsData(data)
      if (!allTextSelected) {
        filterWithTextColors(lightText ? true : false)
      }
      nearestColors(selectedColor)
    }

    if (imageOnLeft || imageOnRight) {
      setShowImage(true)
      setActiveTopFilter(4)
    }
    if (!imageOnLeft || !imageOnRight) {
      setActiveTopFilter(3)
    }
    if (noImageSelected) {
      setActiveTopFilter(3)
      setShowImage(false)
    }
  }

  const filterWithTextColors = (condition) => {
    // const filteringColors = colorsData.filter(item => (
    //   checkLuminance(item.foreground) === condition
    // ))
    if ((textColor.darkText || textColor.lightText) && !selectedColor) {
      setColorsData(data)
    }
    setColorsData((prevState) => prevState.filter(item => (
      checkLuminance(item.foreground) === condition
    )))
  }

  const onClickImageOnRight = () => {
    setImagePostion({
      imageOnRight: true,
      imageOnLeft: false,
      noImageSelected: false,
    })
    setEmptyFilter(false)
  }

  const onClickImageOnLeft = () => {
    setImagePostion({
      imageOnRight: false,
      imageOnLeft: true,
      noImageSelected: false,
    })
    setEmptyFilter(false)
  }
  const onClickNoImage = () => {
    setImagePostion({
      imageOnRight: false,
      imageOnLeft: false,
      noImageSelected: true,
    })
    setEmptyFilter(false)
  }

  const onClickDarkText = () => {
    setTextColor({
      darkText: true,
      lightText: false,
      allTextSelected: false,
    })
    setEmptyFilter(false)
  }

  const onClickLightText = () => {
    setTextColor({
      darkText: false,
      lightText: true,
      allTextSelected: false,
    })
    setEmptyFilter(false)
  }

  const onClickAll = () => {
    setTextColor({
      darkText: false,
      lightText: false,
      allTextSelected: true
    })
    setEmptyFilter(false)
  }

  const selectFilterColor = (color) => {
    setSelectedColor(color)
    setEmptyFilter(false)
  }

  const onRemoveImage = () => {
    setShowImage(false)
    setFilters({ ...filters, imageOnLeft: false, imageOnRight: false, noImageSelected: false })
  }

  const onShowImage = () => {
    setShowImage(true)
  }

  const resetFilters = () => {
    setFilters({
      darkText: false,
      lightText: false,
      allTextSelected: false,
      selectedColor: null,
      imageOnRight: false,
      imageOnLeft: false,
    })
    setSelectedColor(null)
    setTextColor({
      darkText: false,
      lightText: false,
      allTextSelected: false,
    })
    setImagePostion({
      imageOnRight: false,
      imageOnLeft: false,
      noImageSelected: false,
    })
    setShowImage(false)
    setEmptyFilter(true)
    setColorsData(data)
  }

  return (
    <ColorContext.Provider
      value={{
        activeTopFilter,
        setActiveTopFilter,
        setEmptyFilter,
        colorsData,
        showImage,
        filters,
        textColor,
        imagePostion,
        emptyFilter,
        applyFilters,
        onRemoveImage,
        onShowImage,
        onClickImageOnRight,
        onClickImageOnLeft,
        filterWithTextColors,
        onClickDarkText,
        onClickLightText,
        onClickAll,
        selectFilterColor,
        resetFilters,
        onClickNoImage,
        activeColor,
        setActiveColor,
      }}
    >
      {children}
    </ColorContext.Provider>
  )
}

export default ColorState
