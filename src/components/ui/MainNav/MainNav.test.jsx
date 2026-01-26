import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import MainNav from './MainNav';

describe('MainNav', () => {
  const renderMainNav = () =>
    render(
      <MemoryRouter>
        <MainNav />
      </MemoryRouter>
    );

  test('renders main navigation links', () => {
    renderMainNav();

    const nav = screen.getByRole('navigation', {
      name: /primary navigation/i,
    });

    expect(within(nav).getByRole('link', { name: /home/i })).toHaveAttribute(
      'href',
      '/'
    );

    expect(
      within(nav).getByRole('link', { name: /about me/i })
    ).toHaveAttribute('href', '/posts/slug/about-me');

    expect(within(nav).getByRole('link', { name: /contact/i })).toHaveAttribute(
      'href',
      '/posts/slug/contact'
    );
  });

  test('renders auth actions', () => {
    renderMainNav();

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
