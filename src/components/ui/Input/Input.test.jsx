import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';

describe('Input', () => {
  test('renders input with correct type', () => {
    render(<Input id="email" type="email" />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'email');
  });

  test('renders label when label prop is provided', () => {
    render(<Input id="email" label="Email address" />);

    const label = screen.getByText('Email address');
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute('for', 'email');
  });

  test('applies sr-only class when srOnly is true', () => {
    render(<Input id="email" label="Email address" srOnly />);

    const label = screen.getByText('Email address');
    expect(label.className).toMatch(/srOnly/);
  });

  test('renders placeholder text', () => {
    render(<Input id="email" placeholder="Your email address" />);

    expect(
      screen.getByPlaceholderText('Your email address')
    ).toBeInTheDocument();
  });

  test('calls onChange when typing', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(<Input id="email" onChange={handleChange} />);

    const input = screen.getByRole('textbox');
    await user.type(input, 'hello');

    expect(handleChange).toHaveBeenCalled();
  });
});
