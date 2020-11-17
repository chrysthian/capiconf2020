import React from 'react';

export const context = {
  text: '',
  setCurrentText: () => { },
}

export const TextBufferContext = React.createContext({
  context,
})

TextBufferContext.displayName = 'TextBufferContext';
