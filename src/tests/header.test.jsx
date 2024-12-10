import { expect, test } from 'vitest';
import Header from '../components/header';
import { render, screen } from '@testing-library/react';

test('Header component should display logo', () => {
  render(<Header />);

  const logo = screen.getByRole('img', { name: /logo/i });

  expect(logo).toBeInTheDocument();
});
