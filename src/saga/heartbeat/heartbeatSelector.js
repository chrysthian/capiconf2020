import get from 'lodash/get'

export const getFps = (state) => get(state, 'heartbeat.fps')

export const getElapsedMs = (state) => get(state, 'heartbeat.elapsedMs')
