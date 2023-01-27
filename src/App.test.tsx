import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders initial header text', () => {
  render(<App />);
  const headerText = screen.getByText("Your navigation between sports and dish screen goes here");
  expect(headerText).toBeInTheDocument();
});
