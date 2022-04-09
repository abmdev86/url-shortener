import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('renders learn react link', () => {

  render(<Header />);
  const h2Element = screen.getByText("URL Shortner");
  expect(h2Element).toBeInTheDocument();
});
