import { ActionEnum } from 'enum/ActionEnum.js'

export const heartbeat = (payload) => ({
  type: ActionEnum.HEARTBEAT,
  payload,
})
