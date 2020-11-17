import {
  select,
  put,
  takeLatest,
} from 'redux-saga/effects'
import * as sceneManagerSelector from './sceneManagerSelector'

import { ActionEnum } from 'enum/ActionEnum'

export function* init() {
  yield put({ type: ActionEnum.SCENE_MANAGER_SET_DATA })
}

export function* goTo(action) {
  const { sceneId } = action.payload
  const scenes = yield select(sceneManagerSelector.getScenes)
  if (scenes[sceneId]) {
    yield put({
      type: ActionEnum.SCENE_MANAGER_SET_DATA,
      payload: { current: sceneId }
    })
  }
}

export default function* () {
  yield takeLatest(ActionEnum.SCENE_MANAGER_INIT, init)
  yield takeLatest(ActionEnum.SCENE_MANAGER_GO_TO, goTo)
}
