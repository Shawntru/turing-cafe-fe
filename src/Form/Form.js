import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitResy = (event) => {
    event.preventDefault();
    if (
      this.state.name === '' ||
      this.state.date === '' ||
      this.state.time === '' ||
      this.state.number === ''
    ) {
      return;
    }
    const newResy = {
      id: Date.now(),
      ...this.state,
    };
    this.props.addResy(newResy);
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({ name: '', date: '', time: '', number: '' });
  };

  render() {
    return (
      <form>
        <input
          className="resy-form-input"
          type="text"
          placeholder="Name"
          name="name"
          value={this.state.name}
          onChange={(event) => this.handleChange(event)}
        />

        <input
          className="resy-form-input"
          type="text"
          placeholder="Date (mm/dd)"
          name="date"
          value={this.state.date}
          onChange={(event) => this.handleChange(event)}
        />

        <input
          className="resy-form-input"
          type="text"
          placeholder="Time"
          name="time"
          value={this.state.time}
          onChange={(event) => this.handleChange(event)}
        />

        <input
          className="resy-form-input"
          type="text"
          placeholder="Number of Guests"
          name="number"
          value={this.state.number}
          onChange={(event) => this.handleChange(event)}
        />

        <button
          onClick={(event) => this.submitResy(event)}
          className="resy-form-input"
        >
          Make Reservation
        </button>
      </form>
    );
  }
}

export default Form;
