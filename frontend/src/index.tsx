import * as React from "react"
import { render } from "react-dom"
import App from "./App"
import { store } from './store/store';
import { Provider } from "react-redux";

const rootElement = document.getElementById("root")
render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
)