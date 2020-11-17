import { combineReducers } from 'redux'

import { keyboard, mouse } from 'saga/input/inputReducer'
import { heartbeat } from 'saga/heartbeat/heartbeatReducer'
import { timer } from 'saga/timer/timerReducer'
import { score } from 'saga/score/scoreReducer'

export const reducer = combineReducers({
  keyboard,
  mouse,
  heartbeat,
  timer,
  score,
})
