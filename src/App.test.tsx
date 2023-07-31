import React from 'react';
import { render, screen } from '@testing-library/react';
// import App from './App';
import AppWithReducer from './AppWithReducer';

test('renders learn react link', () => {
  // render(<App />);
  render(<AppWithReducer />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
