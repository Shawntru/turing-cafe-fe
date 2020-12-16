import React, { Component } from 'react';
import { fetchReservations } from '../apiCalls';
import Reservations from '../Reservations/Reservations';
import Form from '../Form/Form';
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

  addResy = (newResy) => {
    this.setState({ reservations: [...this.state.reservations, newResy] });
  };

  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <div className="resy-form">
          <Form addResy={this.addResy} />
        </div>
        <div className="resy-container">
          {/* {this.state.reservations.length && ( */}
          <Reservations reservations={this.state.reservations} />
          {/* )} */}
        </div>
      </div>
    );
  }
}

export default App;
