import React from 'react'
import 'asset/css/app.css'
import 'antd/dist/antd.css'
import 'nes.css/css/nes.min.css'
import { RouteApp } from 'core/Route'
import { Provider } from 'react-redux'
import { store } from 'store'

const App = () => {
  return (
    <Provider store={store}>
      <RouteApp />
    </Provider>
  )
}

export default App
