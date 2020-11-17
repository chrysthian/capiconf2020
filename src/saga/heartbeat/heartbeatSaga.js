import {
  put,
  takeLatest,
} from 'redux-saga/effects'

import { ActionEnum } from 'enum/ActionEnum'

export function* update() {
  yield put({ type: ActionEnum.TIMER_UPDATE })
}

export default function* () {
  yield takeLatest(ActionEnum.HEARTBEAT, update)
}
