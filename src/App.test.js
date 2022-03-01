import { render, screen } from '@testing-library/react';
import App from './App';

// HEader
test('renders header, Sleepy App', () => {
  render(<App />);
  const headerElement = screen.getByText(/sleepy app/i);
  expect(headerElement).toBeInTheDocument();
});

// Sub HEader
test('renders sub-header', () => {
  render(<App />);
  const subHeaderElement = screen.getByText(/Please, select from below durations to calculate your sleepy-score/i);
  expect(subHeaderElement).toBeInTheDocument();
});

// Dropdown 1
test('renders dropdown, Duration asleep', () => {
  render(<App />);
  const dropDown1 = screen.getByText(/duration asleep/i);
  expect(dropDown1).toBeInTheDocument();
});

// Dropdown 2
test('renders dropdown, Duration in bed', () => {
  render(<App />);
  const dropDown2 = screen.getByText(/duration asleep/i);
  expect(dropDown2).toBeInTheDocument();
});

// TODO: Add more tests - functions, rest of the components