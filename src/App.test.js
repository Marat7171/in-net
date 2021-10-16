import { render, screen } from '@testing-library/react';
import MainJSApp from "./App";

test('renders learn react link', () => {
  render(<MainJSApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
