import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducer } from 'reducer'
import createSagaMiddleware from 'redux-saga'
import sagas from 'saga/sagas'

function create() {
  const sagaMiddleware = createSagaMiddleware()
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware, sagaMiddleware /* , logger */)))

  sagaMiddleware.run(sagas)

  return store
}

export const store = create()