const colorDiff = 65

export function nearbyColors(staticColor, comingColor) {
    if (staticColor === comingColor) {
        return true
    }

    if (staticColor > comingColor) {
        comingColor = comingColor + colorDiff
        if (comingColor >= staticColor) {
            return true
        }
        return false
    }
    if (staticColor < comingColor) {
        comingColor = comingColor - colorDiff
        if (staticColor >= comingColor) {
            return true
        }
        return false
    }
}