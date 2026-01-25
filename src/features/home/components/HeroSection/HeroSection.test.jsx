import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HeroSection from './HeroSection';

vi.mock('@/assets/images/logo.png', () => ({
  default: 'logo.png',
}));

describe('HeroSection', () => {
  it('renders the logo image', () => {
    render(<HeroSection />);

    const logo = screen.getByAltText("Hidden Progress's logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', 'logo.png');
  });

  it('renders the main heading', () => {
    render(<HeroSection />);

    const heading = screen.getByRole('heading', {
      name: /welcome to hidden progress/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders the description text', () => {
    render(<HeroSection />);

    expect(
      screen.getByText(/this blog is a small space where i capture my journey/i)
    ).toBeInTheDocument();
  });

  it('renders highlighted strong texts', () => {
    render(<HeroSection />);

    expect(screen.getByText('Shiki')).toBeInTheDocument();
    expect(screen.getByText('Hidden Progress')).toBeInTheDocument();
  });
});
