import React, { Component } from "react";
import "./Users.css";

import UsersList from "./UsersList";

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  addUser = (event) => {
    event.preventDefault();

    let newUser = {
      id: Date.now(),
      name: this._inputName.value,
    };

    this.setState((state) => {
      return {
        users: state.users.concat(newUser),
      };
    });

    this._inputName.value = "";
  };

  removeUser = (userID) => {
    this.setState(state => {
      return {
        users: state.users.filter(user => {
          return user.id !== userID;
        }),
      };
    });
  };

  render() {
    return (
      <div className="users-main">
        <h1>What to do Today</h1>
        <form onSubmit={this.addUser}>
          <input
            ref={(element) => {
              this._inputName = element;
            }}
            type="text"
            placeholder="Enter your username"
          />
          <button type="submit">Add User</button>
        </form>
        <UsersList
          usersList={this.state.users}
          removeUserMethod={this.removeUser}
        />
      </div>
    );
  }
}

export default Users;
