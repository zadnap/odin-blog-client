import { render, screen } from '@testing-library/react';
import LoginPage from './LoginPage';
import { vi } from 'vitest';

vi.mock('@/features/auth/components', () => ({
  AuthForm: ({ mode }) => <div data-testid="auth-form">mode: {mode}</div>,
}));

describe('LoginPage', () => {
  test('renders AuthForm with login mode', () => {
    render(<LoginPage />);

    const form = screen.getByTestId('auth-form');
    expect(form).toBeInTheDocument();
    expect(form).toHaveTextContent('mode: login');
  });
});
