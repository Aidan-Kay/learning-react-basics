import { Component } from "react";

export const initailState = {
  username: "",
  usernameError: "",
  email: "",
  emailError: "",
  password: "",
  passwordError: "",
  isValid: false,
};

export class ValidatedForm extends Component {
  state = initailState;

  handleChange = (e) => {
    const isCheckBox = e.target.type === "checkbox";
    this.setState({
      [e.target.name]: isCheckBox ? e.target.checked : e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initailState);
    }
  };

  validate = () => {
    let usernameError = "";
    let emailError = "";
    let passwordError = "";

    if (!this.state.username) usernameError = "Username required";

    if (!this.state.email.includes("@")) emailError = "Invalid email";

    this.setState({
      usernameError,
      emailError,
      passwordError,
    });

    if (usernameError || emailError || passwordError) return false;
    return true;
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </div>
        <div
          style={
            this.state.usernameError
              ? { fontSize: 12, color: "red" }
              : { display: "none" }
          }
        >
          {this.state.usernameError}
        </div>

        <div>
          <input
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div
          style={
            this.state.emailError
              ? { fontSize: 12, color: "red" }
              : { display: "none" }
          }
        >
          {this.state.emailError}
        </div>

        <div>
          <input
            name="password"
            type="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        <div
          style={
            this.state.passwordError
              ? { fontSize: 12, color: "red" }
              : { display: "none" }
          }
        >
          {this.state.passwordError}
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}
