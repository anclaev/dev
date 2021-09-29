import { StrictMode } from "react"
import { render } from "react-dom"

import "./styles/index.sass"
import { App } from "./App"

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementsByClassName("container")[0] || document.body
)
