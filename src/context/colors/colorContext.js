import { createContext } from "react"
import { data } from "../../data"

const colorsData = data
const isImage = false

export const reducer = (state, action) => {
  switch (action) {
    case 'removeImage':
      return false

    default:
      return state
  }
}

export const ColorContext = createContext(colorsData)
export const ImageContext = createContext(isImage)
