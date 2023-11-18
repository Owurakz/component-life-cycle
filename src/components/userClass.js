import React, { Component } from "react";

class UserClass extends Component {
  constructor() {
    super();
    this.state = { Users: [] };
  }
  async getPosts() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();

      this.setState({ Users: data });
    } catch (error) {
      console.log(error);
    }
  }
  componentDidMount() {
    this.getPosts();
  }

  render() {
    return (
      <div key={this.state.Users.id}>
        <h1>Class components</h1>

        {this.state.Users.map((User) => {
          return (
            <div key={User.id}>
              <h1>{User.name}</h1>
              <h2>{User.username}</h2>
              <h3>{User.email}</h3>
            </div>
          );
        })}
      </div>
    );
  }
}

export default UserClass;
