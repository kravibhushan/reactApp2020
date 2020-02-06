import React from "react";
import { simpleAction } from "./js/actions/simpleAction";
import { connect } from "react-redux";
import Home from "./components/homeComponent";
import Counter from "./components/counterComponent";

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

function App(props) {
  function simpleaction() {
    props.simpleaction();
  }
  return (
    <div className="App">
      This is App component
      <div>
        <pre>{JSON.stringify(props)}</pre>
      </div>
      <button onClick={simpleaction}>Test redux action</button>
      <Home />
      <div>
        <Counter />
      </div>
    </div>
  );
}

// export default App;
