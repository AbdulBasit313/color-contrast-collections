export function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}

// alert(hexToRgb("#0033ff").g); // "51";

export function componentToHex(c) {
  const hex = c.toString(16)
  return hex.length == 1 ? "0" + hex : hex
}

export function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b)
}

// alert(rgbToHex(0, 51, 255)); // #0033ff