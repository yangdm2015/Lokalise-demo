import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import French from "./lang/fr.json"
// import Arabic from "./lang/ar.json"
// import English from "./lang/en.json"
// import English from "./lang/en.json"
// import {shouldPolyfill} from '@formatjs/intl-pluralrules/should-polyfill'
import { polyfill } from "./util/index";
import { IntlProvider } from "react-intl";
const English = require("./lang/en.json");
const French = require("./lang/fr.json");

// const locale = navigator.language
const locale = "en";

let lang: Record<string, string> = English;
if (locale === "en") {
  lang = English;
} else {
  if (locale === "fr") {
    lang = French;
  }
  // else {
  // lang = English
  // }
}
polyfill(locale).then((r) => {
  ReactDOM.render(
    <IntlProvider locale={locale} messages={lang}>
      <App />
    </IntlProvider>,
    document.getElementById("root")
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
