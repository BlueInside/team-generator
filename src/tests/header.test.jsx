import { expect, test } from 'vitest';
import Header from '../components/header';
import { render, screen } from '@testing-library/react';

test('Header component should display logo', () => {
  render(<Header />);

  const src = `https://league-team-generator-assets.s3.eu-north-1.amazonaws.com/BannerLight.png`;
  const logo = screen.getByRole('img', { name: /league/i });

  expect(logo).toBeInTheDocument();
  expect(logo).toHaveAttribute('src', src);
});
