import React, { Component } from 'react';


class Beers extends Component {
  state = {
    beers: []
  }

  async componentDidMount() {
    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    // const url = 'http://127.0.0.1:8000/api/v1/beers/';
    const url = 'https://hcradjango.herokuapp.com/api/v1/beers/';
    // const url = 'http://hcradjango.herokuapp.com/api/v1/beers/';
    try {
      const res = await fetch(url);
      const beers = await res.json();

      this.setState({
        beers
      });
    } catch (e) {
      console.log(e);
      // res.status(400).send(); llook it up
    }
  }

  render() {
    return (
      <main className="main">
        <header>
            <h1>Beers</h1>
        </header>

        <section>
            {this.state.beers.map(beer => (
              <div key={beer.id} className="main-card--temp">
                <img src="https://via.placeholder.com/150" alt="beer" />
                <h2>{beer.id} - {beer.name}</h2>
                <span>{beer.name}</span>
              </div>
            ))}
          </section>

      </main>
    );
  }
}
export default Beers;
