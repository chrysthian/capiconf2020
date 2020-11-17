import { ActionEnum } from 'enum/ActionEnum'

const initialState = {
  idleTimers: [],
  timers: []
}

export const timer = (state = initialState, action) => {
  switch (action.type) {
    case ActionEnum.TIMER_CREATE:
      return {
        ...state,
      }
    case ActionEnum.TIMER_START:
    case ActionEnum.TIMER_SET:
    case ActionEnum.TIMER_SET_DATA:
    case ActionEnum.TIMER_PAUSE:
    case ActionEnum.TIMER_DELETE:
    case ActionEnum.TIMER_UPDATE:
      return {
        ...state,
        ...action.payload,
      }
    case ActionEnum.TIMER_RESET:
      return initialState
    default:
      return state
  }
}
