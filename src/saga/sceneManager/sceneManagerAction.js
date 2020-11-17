import { ActionEnum } from 'enum/ActionEnum.js'

export const init = () => ({
  type: ActionEnum.SCENE_MANAGER_INIT,
})

export const goTo = (payload) => ({
  type: ActionEnum.SCENE_MANAGER_GO_TO,
  payload,
})

export const setData = (payload) => ({
  type: ActionEnum.SCENE_MANAGER_SET_DATA,
  payload,
})

export const reset = () => ({
  type: ActionEnum.SCENE_MANAGER_RESET,
})