import "../App.css";
import { Component } from "react";
import { ValidatedForm } from "./ValidatedForm";
import { Form } from "./Form";
import { SimplePropsTest } from "./SimplePropsTest";
import { CounterWithState } from "./CounterWithState";

class Playground extends Component {
  add(a, b) {
    return a + b;
  }

  // toggling components on and off loses its state of course
  // can instead pass a visible prop and render accordingly inside the comp
  state = {
    counterVisible: true,
  };

  render() {
    const add = (a, b) => a + b;

    return (
      <div className="App" style={{ marginTop: 100 }}>
        <p className="Text-muted">
          Component with props (passing in a lambda function)
        </p>
        <SimplePropsTest
          text="hi"
          number={5}
          obj={{ prop: 5 }}
          arr={[1, 2, 3]}
          funcFromVariable={add}
          funcFromClass={this.add}
          lambaFunc={(a, b) => a + b}
        />

        <hr className="Separator"></hr>

        <p className="Text-muted">Functional component with props</p>
        <FunctionalCompWithProps text="Text from prop" />

        <hr className="Separator"></hr>

        <p className="Text-muted">
          State will be lost with the below counter as we are destroying the
          comp
        </p>
        {this.state.counterVisible ? (
          <CounterWithState initialCount={0} visible={true} />
        ) : null}

        <p className="Text-muted">
          State will be kept with the below counter as we are not destroying the
          comp
        </p>
        <div style={this.state.counterVisible ? {} : { display: "none" }}>
          <CounterWithState initialCount={0} visible={true} />
        </div>

        <button
          className="App-button"
          onClick={() =>
            this.setState({ counterVisible: !this.state.counterVisible })
          }
        >
          {this.state.counterVisible ? "Hide counters" : "Show counters"}
        </button>

        <hr className="Separator"></hr>

        <p className="Text-muted">Simple form (see console log)</p>
        <Form />

        <hr className="Separator"></hr>

        <p className="Text-muted">Simple form with validation</p>
        <ValidatedForm />
      </div>
    );
  }
}

const FunctionalCompWithProps = (props) => <div>{props.text}</div>;

export default Playground;
