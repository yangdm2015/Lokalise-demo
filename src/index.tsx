import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import French from "./lang/fr.json"
import Arabic from "./lang/ar.json"
import English from "./lang/en.json"
import { IntlProvider } from "react-intl"

const locale = navigator.language
let lang
if (locale === "en") {
  lang = English
}
else {
  if (locale === "fr") {
    lang = French
  }
  else {
    lang = Arabic
  }
}

ReactDOM.render(
  <IntlProvider locale ={locale} messages={lang}>
    <App />
  </IntlProvider>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
