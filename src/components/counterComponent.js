import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
  }

  state = {};

  render() {
    return (
      <div className="App">
        Counter Component
        <div>
          Count Value:- <pre>{JSON.stringify(this.props.count)}</pre>
        </div>
        <button onClick={this.props.incrementAction}>+</button>
        <br />
        <button onClick={this.props.decrementAction}>-</button>
      </div>
    );
  }
}

export default Counter;
