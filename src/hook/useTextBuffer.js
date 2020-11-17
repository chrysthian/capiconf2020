import { useState, useCallback } from 'react'

export const useTextBuffer = (current) => {
  const [text, setText] = useState('')
  const setCurrentText = useCallback((current) => { setText(current) }, [])
  return { text, setCurrentText }
}