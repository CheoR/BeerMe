import React, { Component } from 'react';

import Card from './Card';

class Beers extends Component {
  state = {
    beers: [],
    errorStatus: ''
  }

  async componentDidMount() {
    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    // const url = 'http://localhost:3000/beers';
    const url = 'https://beermeanother.herokuapp.com/api/v1/beers/';

    try {
      const res = await fetch(url);
      
      if (!res.ok) {
        throw new Error(res.statusText); // will take you to the catch below
      } else {
        await res.json()
          .then(beers => {
            this.setState({
              beers
            });
          });
      }
      // const beers = await res.json();

      // this.setState({
      //   beers
      // });

    } catch (e) {
      // res.status(400).send(); llook it up
      this.setState({
        errorStatus: e.message || e
      });
    }
  }

   render() {
    const { beers, errorStatus } = this.state;

    return (
      <main className="main">
        <header>
            <h1>Beers</h1>
        </header>
        { errorStatus
          ? ( <section>{ errorStatus }</section>)
          : (<section>
              { beers.map(beer => (
                  <Card key={beer.id} obj={beer} />
              ))}
            </section>)
        }

      </main>
    );
  }
}

export default Beers;