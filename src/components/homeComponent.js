import React from "react";

class Home extends React.Component {
  constructor() {
    super();
    this.simpleaction = this.simpleaction.bind(this);
  }
  state = {};

  simpleaction() {
    alert("callme");
  }
  render() {
    return (
      <div className="App">
        Home Component
        <div>
          <pre>{JSON.stringify(this.props)}</pre>
        </div>
        <button onClick={this.props.simpleAction}>Home Action</button>
      </div>
    );
  }
}

export default Home;
