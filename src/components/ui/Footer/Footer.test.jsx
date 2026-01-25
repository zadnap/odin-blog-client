import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  test('renders copyright text', () => {
    render(<Footer />);

    expect(
      screen.getByText(/© 2026 Hidden Progress. All rights reserved./i)
    ).toBeInTheDocument();
  });

  test('renders github link with correct attributes', () => {
    render(<Footer />);

    const githubLink = screen.getByRole('link', {
      name: /github/i,
    });

    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/zadnap');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('has accessible social list', () => {
    render(<Footer />);

    const list = screen.getByLabelText(/contact me on other platforms/i);

    expect(list).toBeInTheDocument();
  });
});
