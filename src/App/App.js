import React, { Component } from 'react';
import { fetchReservations } from './apiCalls';
import Reservations from '../Reservations/Reservations';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      error: '',
    };
  }

  componentDidMount = () => {
    fetchReservations()
      .then((data) => this.setState({ reservations: data }))
      .catch((error) => this.setState({ error: error }));
  };

  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <div className="resy-form"></div>
        <div className="resy-container">
          {this.state.reservations.length && (
            <Reservations reservations={this.state.reservations} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
