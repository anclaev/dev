import { ConnectedRouter } from "connected-react-router"
import { Switch, Route } from "react-router-dom"

import { history } from "./store"

import { Hello } from "./pages/Hello"
import { NotFound } from "./pages/NotFound"

import { Header } from "./containers/Header"

export const App: React.FC = () => {
  return (
    <ConnectedRouter history={history}>
      <Header />
      <Switch>
        <Route exact path="/" component={Hello} />
        <Route render={() => <NotFound />}></Route>
      </Switch>
    </ConnectedRouter>
  )
}
