import { ActionEnum } from 'enum/ActionEnum'

const initialState = {
  scenes: [],
  current: -1,
}

export const sceneManager = (state = initialState, action) => {
  switch (action.type) {
    case ActionEnum.SCENE_MANAGER_SET_DATA:
      return {
        ...state,
        ...action.payload,
      }
    case ActionEnum.SCENE_MANAGER_RESET:
      return initialState
    default:
      return state
  }
}