import React, { Component } from 'react';


class Users extends Component {
  state = {
    users: []
  }

  async componentDidMount() {
    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    // const url = 'http://127.0.0.1:8000/api/v1/users/';
    const url = 'https://hcradjango.herokuapp.com/api/v1/users/';
    // const url = 'http://hcradjango.herokuapp.com/api/v1/users/';
    try {
      const res = await fetch(url);
      const users = await res.json();

      this.setState({
        users
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <main className="main">
        <header>
            <h1>Drunks</h1>
        </header>

        <section>
            {this.state.users.map(user => (
              <div key={user.id} className="main-card--temp">
                <img src="https://via.placeholder.com/150" alt="user" />
                <h1>{user.id} - {user.username}</h1>
                <span>{user.username}</span>
              </div>
            ))}
          </section>

      </main>
    );
  }
}
export default Users;
