import get from 'lodash/get'

export const getCurrent = (state) => get(state, 'sceneManager.current')

export const getScenes = (state) => get(state, 'sceneManager.scenes')