import { render, screen } from '@testing-library/react';
import Container from './Container';

test('renders learn react link', () => {
  render(<Container />);
  const linkElement = screen.getByText(/URL Shortner/i);
  expect(linkElement).toBeInTheDocument();
});
