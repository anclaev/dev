import { StrictMode } from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"

import "./styles/index.sass"
import { App } from "./App"
import { store } from "./store"

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementsByClassName("container")[0] || document.body
)
