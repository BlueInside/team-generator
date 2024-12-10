import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

const Hello = () => <h1>Hello, Vite!</h1>;

test('renders hello message', () => {
  render(<Hello />);
  expect(screen.getByText('Hello, Vite!')).toBeInTheDocument();
});
