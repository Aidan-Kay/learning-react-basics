import { Component } from "react";

export class CounterWithState extends Component {
  // don't need to use constructor if only initialising state
  constructor(props) {
    super(props);

    this.state = {
      count: props.initialCount,
    };
  }

  //built-in React functions
  componentDidMount() {
    console.log("Component mounted");
  }

  componentWillUnmount() {
    console.log("Component unmounted - state is lost");
  }

  // these could have been called inline, inside of onClick
  // the downside of inlining it however is that a lambda is being created on every render
  increment = () => {
    console.log("increment clicked");

    // setState() is asyncronous, so we can add a callback to run once it has completed
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => console.log(this.state.count)
    );
  };

  decrement = () => {
    console.log("decrement clicked");
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return !this.props.visible ? null : (
      <div>
        <div>Count: {this.state.count}</div>
        <div>
          <button className="App-button" onClick={this.increment}>
            Increment
          </button>
          <button className="App-button" onClick={this.decrement}>
            Decrement
          </button>
        </div>
      </div>
    );
  }
}
