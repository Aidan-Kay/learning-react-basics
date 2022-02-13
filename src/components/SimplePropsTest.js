import { Component } from "react";

export class SimplePropsTest extends Component {
  render() {
    return <div>Sum = {this.props.lambaFunc(10, 20)}</div>;
  }
}
