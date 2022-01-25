import React from 'react'
import { useState } from 'react'
import { checkLuminance } from '../../config/checkLuminance'
import { data } from "../../data"
import { ColorContext } from "./colorContext"

const ColorState = ({ children }) => {
  const [colorsData, setColorsData] = useState(data)
  const [showImage, setShowImage] = useState(false)
  const [filters, setFilters] = useState({
    darkText: false,
    lightText: false,
    selectedColor: null,
    imageOnRight: false,
    imageOnLeft: false,
  })

  const filterColros = async (condition) => {
    const filteringColors = colorsData.filter(item => (
      checkLuminance(item.background) === condition
    ))

    // new Promise(() => {
    setColorsData(data)
    // }).then(() => {
    setColorsData(filteringColors)
    // })
  }

  const onClickImageOnRight = () => {
    setFilters({ ...filters, imageOnRight: true, imageOnLeft: false })
  }

  const onClickImageOnLeft = () => {
    setFilters({ ...filters, imageOnLeft: true, imageOnRight: false })
  }

  const onClickDarkText = () => {
    filterColros(false)
    setFilters({ ...filters, darkText: true })
  }

  const onClickLightText = () => {
    filterColros(true)
    setFilters({ ...filters, lightText: true })
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
        colorsData,
        showImage,
        filters,
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
