import { ActionEnum } from 'enum/ActionEnum.js'

let scoreInitialState = {
  value: 0,
}

export const score = (state = scoreInitialState, action) => {
  switch (action.type) {
    case ActionEnum.SCORE:
      return {
        value: action.payload,
      };
    default:
      return state;
  }
}