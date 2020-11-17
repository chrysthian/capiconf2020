import get from 'lodash/get'

export const getTimers = (state) => get(state, 'timer.timers')

export const getIdleTimers = (state) => get(state, 'timer.idleTimers')