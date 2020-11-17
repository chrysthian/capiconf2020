const DEG2RAD = Math.PI / 180
const RAD2DEG = 180 / Math.PI

export const degToRad = degrees => {
  return degrees * DEG2RAD
}

export const radToDeg = radians => {
  return radians * RAD2DEG
}

export const clamp = (value, min, max) => {
  return Math.max(min, Math.min(max, value))
}
