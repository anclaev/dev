import { createBrowserHistory } from "history"
import { combineReducers, createStore, applyMiddleware } from "redux"
import { connectRouter, routerMiddleware } from "connected-react-router"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

export const history = createBrowserHistory()

const rootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
  })

export const store = createStore(
  rootReducer(history),
  composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history)))
)
