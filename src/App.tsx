import { ConnectedRouter } from "connected-react-router"
import { Switch, Route } from "react-router-dom"

import { history } from "./store"

import { Hello } from "./pages/Hello"
import { WhoAreMe } from "./pages/WhoAreMe"
import { Crew } from "./pages/Crew"
import { Rules } from "./pages/Rules"
import { Tech } from "./pages/Tech"

import { NotFound } from "./pages/NotFound"

import { Header } from "./containers/Header"
import { Background } from "./containers/Background"

export const App: React.FC = () => {
  return (
    <ConnectedRouter history={history}>
      <Header />
      <Switch>
        <Route exact path="/" component={Hello} />
        <Route exact path="/about" component={WhoAreMe} />
        <Route exact path="/crew" component={Crew} />
        <Route exact path="/rules" component={Rules} />
        <Route exact path="/tech" component={Tech} />
        <Route render={() => <NotFound />}></Route>
      </Switch>
      <Background />
    </ConnectedRouter>
  )
}
