import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReserveCard from './ReserveCard.js';

describe('ReserveCard', () => {
  it('should render correctly', () => {
    render(<ReserveCard />);

    expect(screen.getByTestId('card-container')).toBeInTheDocument();
  });
});
