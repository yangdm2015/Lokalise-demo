import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { FormattedMessage } from "react-intl";
const English = require("./lang/en.json");

function App() {
  return (
    <div className="App">
      {Object.keys(English).map((k) => {
        return (
          <p key={k}>
            <FormattedMessage id={k} />
          </p>
        );
      })}
    </div>
  );
}

export default App;
