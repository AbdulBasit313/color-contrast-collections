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

  const [textColor, setTextColor] = useState({
    darkText: false,
    lightText: false,
    allTextSelected: false,
  })
  const [imagePostion, setImagePostion] = useState({
    imageOnRight: false,
    imageOnLeft: false,
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

    console.log('==> || staticColor', staticColor)

    setColorsData(data)

    setColorsData((prevState) => prevState.filter((item) => {
      let comingColor = hexToRgb(item.background)

      console.log('==> || comingColor', comingColor)

      let r = nearbyColors(staticColor.r, comingColor.r)
      let g = nearbyColors(staticColor.g, comingColor.g)
      let b = nearbyColors(staticColor.b, comingColor.b)

      console.log('==> || r', r)
      console.log('==> || g', g)
      console.log('==> || b', b)

      if (r && g && b) {
        console.log('==> nearest colors <==', color)
        return true
      }
    }))
  }

  const applyFilters = () => {
    setFilters({
      imageOnRight: imagePostion.imageOnRight,
      imageOnLeft: imagePostion.imageOnLeft,
      darkText: textColor.darkText,
      lightText: textColor.lightText,
      allTextSelected: textColor.allTextSelected,
      selectedColor: selectedColor
    })
    if (selectedColor) {
      console.log('this runs', selectedColor)
      nearestColors(selectedColor)
    }
    if (textColor.darkText) {
      filterWithTextColors(false)
    }
    if (textColor.lightText) {
      filterWithTextColors(true)
    }
    if (textColor.allTextSelected) {
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

  const filterWithTextColors = (condition) => {
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
    setEmptyFilter(false)
  }

  const onClickImageOnLeft = () => {
    setImagePostion({
      imageOnRight: false,
      imageOnLeft: true,
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
    console.log('color ==>>', color)
    setSelectedColor(color)
    setEmptyFilter(false)
  }

  console.log('selectedColor', selectedColor)

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
      }}
    >
      {children}
    </ColorContext.Provider>
  )
}

export default ColorState
