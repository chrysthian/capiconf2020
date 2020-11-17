import { ActionEnum } from 'enum/ActionEnum.js'

let initialState = {
  elapsedMs: 0,
  fps: 60,
}

export const heartbeat = (state = initialState, action) => {
  switch (action.type) {
    case ActionEnum.HEARTBEAT:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}
