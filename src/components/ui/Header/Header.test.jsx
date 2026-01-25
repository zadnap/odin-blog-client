import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Header from './Header';

describe('Header', () => {
  const renderHeader = () =>
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

  test('renders site name', () => {
    renderHeader();

    const logoText = screen.getByText(/hidden progress/i);
    expect(logoText).toBeInTheDocument();
  });

  test('renders motto text', () => {
    renderHeader();

    expect(screen.getByText(/dream big, start small\./i)).toBeInTheDocument();
  });
});
