import React from 'react';
import ReactDOM, { screen, render } from 'react-dom';
import App from './App';
import { fetchReservations } from '../apiCalls.js';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { waitFor } from '@testing-library/react';
jest.mock('../apiCalls.js');

describe('App', () => {
  it(`should allow the user to create a reservation,
  and then display it on screen`, async () => {
    fetchReservations.mockResolvedValueOnce([
      {
        id: 1,
        name: 'Christie',
        date: '12/29',
        time: '7:00',
        number: 12,
      },
    ]);

    render(<App />);

    userEvent.type(screen.getByPlaceholderText('Name'), 'Spud McButts');
    userEvent.type(screen.getByPlaceholderText('Date (mm/dd)'), '01/01');
    userEvent.type(screen.getByPlaceholderText('Time'), '12:00');
    userEvent.type(screen.getByPlaceholderText('Number of Guests'), '0');

    await waitFor(() => {
      userEvent.click(screen.getByText('Make Reservation'));
      expect(screen.getByText('Spud McButts')).toBeInTheDocument();
    });
  });
});
