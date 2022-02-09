import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { FormattedMessage,FormattedList } from "react-intl";

function App() {
  return (
    <div className="App">
       <h3>Declarative examples</h3>
        <FormattedMessage id="message.simple" />
        <br />
        <FormattedMessage id="message.argument" values={{ name: "John" }} />
        <br />
        <FormattedMessage id="message.plural" values={{ count: 6 }} />
        <br />
        <FormattedMessage id="message.select" values={{ gender: "female" }} />
        <br />
        <FormattedMessage id="message.text-format" values={{ b: (value:string) => <b>{value}</b> }} />
        <br />
        <FormattedMessage id="message.number-format" values={{ num: 7500 }} />
        <br />
        <FormattedMessage id="message.currency-format" values={{ amount: 7.5 }} />
        <br />
        <FormattedList type="conjunction" value={["foo", "bar", "baz"]} />
        {/* {Object.keys(English).map((k) => {
        let v = English[k];
        let defaultMessage =
          typeof v === "object"
            ? `{count,plural,one{${v['one']}.}other{${v['one']}}`
            : "";
            // const Cmp = typeof v === "object"?
        return (
          <p key={k}>
            <FormattedMessage id={k}  values={{ count: 6 }}/>
          </p>
        );
      })} */}
    </div>
  );
}

export default App;
