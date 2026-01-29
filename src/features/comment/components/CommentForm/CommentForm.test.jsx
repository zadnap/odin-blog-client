import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { vi } from 'vitest';
import CommentForm from './CommentForm';

vi.mock('@/components/ui', () => ({
  Textarea: (props) => <textarea {...props} />,
  Button: ({ children, ...props }) => <button {...props}>{children}</button>,
}));

describe('CommentForm', () => {
  it('renders comment form when authenticated', () => {
    const handleSubmit = vi.fn();

    render(<CommentForm isAuthenticated={true} onSubmit={handleSubmit} />);

    expect(
      screen.getByPlaceholderText('Share your thoughts')
    ).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument();
  });

  it('calls onSubmit when form is submitted', async () => {
    const handleSubmit = vi.fn((e) => e.preventDefault());

    render(<CommentForm isAuthenticated={true} onSubmit={handleSubmit} />);

    const form = screen.getByRole('button', { name: /send/i }).closest('form');

    form.dispatchEvent(
      new Event('submit', { bubbles: true, cancelable: true })
    );

    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  it('shows sign-in link when not authenticated', () => {
    render(
      <MemoryRouter>
        <CommentForm isAuthenticated={false} />
      </MemoryRouter>
    );

    expect(screen.getByText(/sign in/i)).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /sign in/i })).toHaveAttribute(
      'href',
      '/auth/login'
    );
  });
});
