import { ActionEnum } from 'enum/ActionEnum.js'
import Vector3 from 'core/math/Vector3'

let keyboardInitialState = {
  pressed: {
    w: false,
    a: false,
    s: false,
    d: false,
    ' ': false,
  },
}

export const keyboard = (state = keyboardInitialState, action) => {
  switch (action.type) {
    case ActionEnum.KEYBOARD:
      return {
        ...state,
        pressed: action.payload,
      };
    default:
      return state;
  }
}

let mouseInitialState = {
  pressed: [],
  position: new Vector3(0, 0, 0)
}

export const mouse = (state = mouseInitialState, action) => {
  switch (action.type) {
    case ActionEnum.MOUSE_MOVE:
      return {
        ...state,
        position: action.payload
      };
    case ActionEnum.MOUSE_PRESSED:
      return {
        ...state,
        pressed: action.payload
      };
    default:
      return state;
  }
}
