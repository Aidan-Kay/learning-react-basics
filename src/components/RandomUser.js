import { Component } from "react";

export class RandomUser extends Component {
  state = {
    loading: true,
    users: null,
  };

  url = "https://api.randomuser.me?results=5";

  // load data when component initialises
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true });
    const response = await fetch(this.url);
    const data = await response.json();
    this.setState({ users: data.results, loading: false });
  };

  render() {
    return (
      <div>
        {!this.state.loading && this.state.users ? (
          <table
            style={{
              width: 500,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <thead>
              <tr>
                <th>Title</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user) => (
                <tr key={user.login.uuid}>
                  <td>{user.name.title}</td>
                  <td>{user.name.first}</td>
                  <td>{user.name.last}</td>
                  <td>{user.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>Loading...</div>
        )}
        <div>
          <button onClick={this.fetchData} className="App-button">
            Refresh data
          </button>
        </div>
      </div>
    );
  }
}
