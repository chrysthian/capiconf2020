import Loading from 'component/ui/Loading'
import React, { Component } from 'react'
import Loadable from 'react-loadable'
import { HashRouter, Route, Switch } from 'react-router-dom'

function LoadingFunction(props) {
  if (props.error) {
    return (
      <div>
        Aconteceu um erro!
        <button onClick={props.retry}>Tentar novamente</button>
      </div>
    )
  } else {
    return <Loading />
  }
}

const Main = Loadable({
  loader: () => import(/* webpackChunkName: "Main" */ 'page/Main'),
  loading: LoadingFunction,
})

const Page404 = Loadable({
  loader: () => import(/* webpackChunkName: "Page404" */ 'page/Page404'),
  loading: LoadingFunction,
})

const Game = Loadable({
  loader: () => import(/* webpackChunkName: "Game" */ 'page/Game'),
  loading: LoadingFunction,
})

const Credits = Loadable({
  loader: () => import(/* webpackChunkName: "Credits" */ 'page/Credits'),
  loading: LoadingFunction,
})

export class RouteApp extends Component {
  render() {
    return (
      <HashRouter>
        <div id='hashrouter'>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/game' component={Game} />
            <Route exact path='/credits' component={Credits} />
            <Route component={Page404} />
          </Switch>
        </div>
      </HashRouter >
    )
  }
}
