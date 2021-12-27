import React from "react";
import "./App.css";
import Counter from "./components/counter";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <h1>Workshop state </h1>
        <Counter />
      </div>
    );
  }
}
export default App;
//ex
//im
//call 