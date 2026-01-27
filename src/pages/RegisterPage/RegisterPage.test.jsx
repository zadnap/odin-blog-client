import { render, screen } from '@testing-library/react';
import RegisterPage from './RegisterPage';
import { vi } from 'vitest';

vi.mock('@/features/auth/components', () => ({
  AuthForm: ({ mode }) => <div data-testid="auth-form">mode: {mode}</div>,
}));

describe('RegisterPage', () => {
  test('renders AuthForm with register mode', () => {
    render(<RegisterPage />);

    const form = screen.getByTestId('auth-form');
    expect(form).toBeInTheDocument();
    expect(form).toHaveTextContent('mode: register');
  });
});
