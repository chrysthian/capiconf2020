
export const typewriter = (line = '', elapsedTime = 0, speed = 30, element) => {
  let rowLen = line.length
  let rowIndex = elapsedTime / speed

  if (element) {
    element.scrollTop = element.scrollHeight
  }

  return (rowIndex < rowLen) ? line.substring(0, rowIndex) : line
}
