import { useEffect, useRef, useState } from 'react'
import debounce from 'lodash/debounce'

const useWindowSize = (sizeHandler, debounceInterval = 50) => {
  const initialValue = sizeHandler(window)

  const [result, setResult] = useState(initialValue)
  const resultRef = useRef(initialValue)

  const handleResize = () => {
    const newResult = sizeHandler(window)
    if (newResult !== resultRef.current) {
      resultRef.current = newResult
      setResult(newResult)
    }
  }

  useEffect(() => {
    // By default we'll use a tiny interval, to update the value when the resize
    // is finished, instead of multiple times while the window is being resized
    const resizeHandler = debounceInterval
      ? debounce(handleResize, debounceInterval)
      : handleResize

    window.addEventListener('resize', resizeHandler)
    return () => window.removeEventListener('resize', resizeHandler)
  }, [])

  return result
}

export default useWindowSize

/** Usage example
 *
 * const isRowLayout = useWindowSize(
 *   ({ innerWidth }) => innerWidth > 994
 * )
 *
 */
