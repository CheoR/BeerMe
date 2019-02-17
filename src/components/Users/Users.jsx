import React, { Component } from 'react';

import Card from './Card';

class Users extends Component {
  state = {
    users: [],
    errorStatus: ''
  }

  async componentDidMount() {
    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    // const url = 'http://127.0.0.1:8000/api/v1/users/';
    const url = 'http://localhost:3001/users';
    // const url = 'https://beermeanother.herokuapp.com/api/v1/users/';

    try {
      const res = await fetch(url);
      
      if (!res.ok) {
        throw new Error(res.statusText); // will take you to the catch below
      } else {
        await res.json()
          .then(users => {
            this.setState({
              users
            });
          });
      }
      // const users = await res.json();

      // this.setState({
      //   users
      // });

    } catch (e) {
      // res.status(400).send(); llook it up
      this.setState({
        errorStatus: e.message || e
      });
    }
  }

   render() {
    const { users, errorStatus } = this.state;

    return (
      <main className="main">
        <header>
            <h1>Users</h1>
        </header>
        { errorStatus
          ? (<section className="main-error">{ errorStatus }</section>)
          : (<section>
              { users.map(user => (
                  <Card key={user.id} obj={user} />
              ))}
            </section>)
        }

      </main>
    );
  }
}

export default Users;