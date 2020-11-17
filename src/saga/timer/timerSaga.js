import {
  put,
  select,
  takeLatest,
} from 'redux-saga/effects'

import { ActionEnum } from 'enum/ActionEnum'
import TimerStatus from 'enum/TimerStatus'

import * as timerAction from './timerAction'
import * as timerSelector from './timerSelector'
import * as heartbeatSelector from 'saga/heartbeat/heartbeatSelector'

export function* createTimer(action) {
  const { targetTime } = action.payload
  let idle = 0
  const timers = yield select(timerSelector.getTimers)
  const idleTimers = yield select(timerSelector.getIdleTimers)

  timers.forEach(t => {
    if (t && t.status === TimerStatus.TIMER_IDLE) {
      idle = t.id
    }
  })

  idle = timers.length
  timers.push({
    idle,
    totalTime: 0,
    targetTime,
    status: TimerStatus.TIMER_IDLE,
  })

  idleTimers.push(idle)

  yield put(timerAction.setData({
    idleTimers,
    timers,
  }))
}

export function* startTimer(action) {
  const id = action.payload
  const timers = yield select(timerSelector.getTimers)
  const idleTimers = yield select(timerSelector.getIdleTimers)

  timers[id].status = TimerStatus.TIMER_RUNNING
  idleTimers.splice(idleTimers.indexOf(id), 1)

  yield put(timerAction.setData({
    timers,
    idleTimers,
  }))
}

export function* setTimer(action) {
  const { id, time } = action.payload
  const timers = yield select(timerSelector.getTimers)
  timers[id].totalTime = time

  yield put(timerAction.setData({ timers }))
}

export function* pauseTimer(action) {
  const id = action.payload
  const timers = yield select(timerSelector.getTimers)
  timers[id].status = TimerStatus.TIMER_STOPPED

  yield put(timerAction.setData({ timers }))
}

export function* deleteTimer(action) {
  const id = action.payload
  const timers = yield select(timerSelector.getTimers)
  const idleTimers = yield select(timerSelector.getIdleTimers)
  const timer = timers[id]

  timer.status = TimerStatus.TIMER_IDLE
  timer.totalTime = 0
  timer.targetTime = -1

  idleTimers.push(id)

  yield put(timerAction.setData({
    idleTimers,
    timers,
  }))
}

export function* updateTimers() {
  const timers = yield select(timerSelector.getTimers)
  const elapsedMs = yield select(heartbeatSelector.getElapsedMs)

  timers.forEach(timer => {
    if (timer.status === TimerStatus.TIMER_RUNNING) {
      timer.totalTime += elapsedMs

      if (timer.targetTime > -1 && timer.totalTime > timer.targetTime) {
        timer.status = TimerStatus.TIMER_FINISHED
      }
    }
  })

  yield put(timerAction.setData({ timers }))
}

export default function* () {
  yield takeLatest(ActionEnum.TIMER_CREATE, createTimer)
  yield takeLatest(ActionEnum.TIMER_START, startTimer)
  yield takeLatest(ActionEnum.TIMER_SET, setTimer)
  yield takeLatest(ActionEnum.TIMER_PAUSE, pauseTimer)
  yield takeLatest(ActionEnum.TIMER_DELETE, deleteTimer)
  yield takeLatest(ActionEnum.TIMER_UPDATE, updateTimers)
}
