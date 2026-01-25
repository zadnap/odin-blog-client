import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Header from './Header';

describe('Header', () => {
  const renderHeader = () =>
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

  test('renders logo and site name', () => {
    renderHeader();

    const logoText = screen.getByText(/hidden progress/i);
    expect(logoText).toBeInTheDocument();

    const logoImage = screen.getByAltText(/hidden progress logo/i);
    expect(logoImage).toBeInTheDocument();
  });

  test('renders motto text', () => {
    renderHeader();

    expect(screen.getByText(/dream big, start small\./i)).toBeInTheDocument();
  });

  test('renders main navigation links', () => {
    renderHeader();

    const nav = screen.getByRole('navigation', {
      name: /primary navigation/i,
    });

    expect(within(nav).getByRole('link', { name: /home/i })).toHaveAttribute(
      'href',
      '/'
    );

    expect(
      within(nav).getByRole('link', { name: /about me/i })
    ).toHaveAttribute('href', '/posts/about-me');

    expect(within(nav).getByRole('link', { name: /contact/i })).toHaveAttribute(
      'href',
      '/posts/contact'
    );
  });

  test('renders auth actions', () => {
    renderHeader();

    expect(screen.getByRole('link', { name: /sign in/i })).toHaveAttribute(
      'href',
      '/auth/login'
    );

    expect(screen.getByRole('link', { name: /sign up/i })).toHaveAttribute(
      'href',
      '/auth/register'
    );
  });
});
