import React from 'react'
import { useState } from 'react'
import { checkLuminance } from '../../config/checkLuminance'
import { data } from "../../data"
import { ColorContext } from "./colorContext"

const ColorState = ({ children }) => {
  const [activeTopFilter, setActiveTopFilter] = useState(1)
  const [colorsData, setColorsData] = useState(data)
  const [showImage, setShowImage] = useState(false)

  const [textColor, setTextColor] = useState({
    darkText: false,
    lightText: false,
  })
  const [imagePostion, setImagePostion] = useState({
    imageOnRight: false,
    imageOnLeft: false,
  })

  const [filters, setFilters] = useState({
    darkText: false,
    lightText: false,
    selectedColor: null,
    imageOnRight: false,
    imageOnLeft: false,
  })

  const applyFilters = () => {
    setFilters({
      imageOnRight: imagePostion.imageOnRight,
      imageOnLeft: imagePostion.imageOnLeft,
      darkText: textColor.darkText,
      lightText: textColor.lightText,
    })
    if (textColor.darkText) {
      filterColros(false)
    }
    if (textColor.lightText) {
      filterColros(true)
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
    const filteringColors = colorsData.filter(item => (
      checkLuminance(item.foreground) === condition
    ))

    setColorsData(filteringColors)
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
    })
  }

  const onClickLightText = () => {
    setTextColor({
      darkText: false,
      lightText: true,
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
      }}
    >
      {children}
    </ColorContext.Provider>
  )
}

export default ColorState
