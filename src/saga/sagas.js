import { fork } from 'redux-saga/effects'

import timer from './timer/timerSaga'
import heartbeat from './heartbeat/heartbeatSaga'

export default function* () {
  yield fork(timer)
  yield fork(heartbeat)
}
