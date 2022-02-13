import { Component } from "react";

export class Form extends Component {
  // initial values
  // on change, state is updated with the element's value
  // also, state values are reflected onto the elements themselves
  state = {
    textbox: "",
    select: "option2",
    checkbox: false,
  };

  // update state values when input has changed
  handleChange = (e) => {
    const isCheckBox = e.target.type === "checkbox";
    this.setState({
      [e.target.name]: isCheckBox ? e.target.checked : e.target.value,
    });
  };

  // preventDefault to disable the default functionality when submitting html forms
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            name="textbox"
            placeholder="name"
            value={this.state.textbox}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <select
            name="select"
            value={this.state.select}
            onChange={this.handleChange}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </select>
        </div>

        <div>
          <input
            name="checkbox"
            type="checkbox"
            checked={this.state.checkbox}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}
