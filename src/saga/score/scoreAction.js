import { ActionEnum } from 'enum/ActionEnum.js';

export const score = (payload) => {
  return {
    type: ActionEnum.SCORE,
    payload,
  }
}
