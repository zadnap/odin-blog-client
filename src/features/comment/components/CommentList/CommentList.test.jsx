import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { MemoryRouter } from 'react-router';
import CommentList from './CommentList';

vi.mock('@/features/auth/hooks/useAuth', () => ({
  default: vi.fn(),
}));

vi.mock('../CommentForm/CommentForm', () => ({
  default: () => <div data-testid="comment-form" />,
}));

vi.mock('../CommentItem/CommentItem', () => ({
  default: ({ content }) => <div>{content}</div>,
}));

vi.mock('@/components/ui', () => ({
  Pagination: ({ page, totalPages }) => (
    <div data-testid="pagination">
      Page {page} / {totalPages}
    </div>
  ),
}));

import useAuth from '@/features/auth/hooks/useAuth';

describe('CommentList', () => {
  const comments = [
    { id: '1', content: 'First comment' },
    { id: '2', content: 'Second comment' },
  ];

  const meta = {
    total: 2,
    totalPages: 2,
  };

  it('renders comment list when comments exist', () => {
    useAuth.mockReturnValue({ isAuthenticated: true });

    render(
      <CommentList page={1} setPage={vi.fn()} meta={meta} comments={comments} />
    );

    expect(screen.getByText('First comment')).toBeInTheDocument();
    expect(screen.getByText('Second comment')).toBeInTheDocument();
  });

  it('shows "No comment yet" when no comments', () => {
    useAuth.mockReturnValue({ isAuthenticated: true });

    render(
      <CommentList
        page={1}
        setPage={vi.fn()}
        meta={{ total: 0 }}
        comments={[]}
      />
    );

    expect(screen.getByText('No comment yet')).toBeInTheDocument();
  });

  it('renders pagination when totalPages > 0', () => {
    useAuth.mockReturnValue({ isAuthenticated: true });

    render(
      <CommentList page={1} setPage={vi.fn()} meta={meta} comments={comments} />
    );

    expect(screen.getByTestId('pagination')).toBeInTheDocument();
    expect(screen.getByText('Page 1 / 2')).toBeInTheDocument();
  });

  it('renders CommentForm when authenticated', () => {
    useAuth.mockReturnValue({ isAuthenticated: true });

    render(
      <CommentList page={1} setPage={vi.fn()} meta={meta} comments={comments} />
    );

    expect(screen.getByTestId('comment-form')).toBeInTheDocument();
  });

  it('shows sign-in message when not authenticated', () => {
    useAuth.mockReturnValue({ isAuthenticated: false });

    render(
      <MemoryRouter>
        <CommentList
          page={1}
          setPage={vi.fn()}
          meta={meta}
          comments={comments}
        />
      </MemoryRouter>
    );

    expect(screen.getByText(/sign in/i)).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /sign in/i })).toHaveAttribute(
      'href',
      '/auth/login'
    );
  });
});
