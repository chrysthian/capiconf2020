import { ActionEnum } from 'enum/ActionEnum'

export const createTimer = (payload) => ({
  type: ActionEnum.TIMER_CREATE,
  payload,
})

export const startTimer = (payload) => ({
  type: ActionEnum.TIMER_START,
  payload,
})

export const setTimer = (payload) => ({
  type: ActionEnum.TIMER_SET,
  payload,
})

export const setData = (payload) => ({
  type: ActionEnum.TIMER_SET_DATA,
  payload,
})

export const pauseTimer = (payload) => ({
  type: ActionEnum.TIMER_PAUSE,
  payload,
})

export const deleteTimer = (payload) => ({
  type: ActionEnum.TIMER_DELETE,
  payload,
})

export const updateTimers = (payload) => ({
  type: ActionEnum.TIMER_UPDATE,
  payload,
})

export const resetTimers = () => ({
  type: ActionEnum.TIMER_RESET,
})
