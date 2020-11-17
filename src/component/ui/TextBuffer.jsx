import React from 'react'

import { TextBufferContext } from 'provider/TextBufferContext'
import { useTextBuffer } from 'hook/useTextBuffer'

const TextBuffer = () => {
  const context = useTextBuffer()
  return (
    <TextBufferContext.Provider context={context}>
      <span id='measure-text' />
    </TextBufferContext.Provider>
  )
}

export default TextBuffer
