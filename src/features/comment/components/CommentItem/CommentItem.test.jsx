import { render, screen } from '@testing-library/react';
import CommentItem from './CommentItem';
import { formatDate } from '@/utils/date';

vi.mock('@/utils/date', () => ({
  formatDate: vi.fn(),
}));

describe('CommentItem', () => {
  const mockDate = '2026-01-28T10:00:00.000Z';

  beforeEach(() => {
    formatDate.mockReturnValue('28 Jan 2026');
  });

  it('renders comment content', () => {
    render(
      <CommentItem
        content="This is a comment"
        createdAt={mockDate}
        author={{ username: 'minh' }}
      />
    );

    expect(screen.getByText('This is a comment')).toBeInTheDocument();
  });

  it('renders author username', () => {
    render(
      <CommentItem
        content="Hello"
        createdAt={mockDate}
        author={{ username: 'minh' }}
      />
    );

    expect(screen.getByText('@minh')).toBeInTheDocument();
  });

  it('renders formatted date', () => {
    render(
      <CommentItem
        content="Hello"
        createdAt={mockDate}
        author={{ username: 'minh' }}
      />
    );

    expect(formatDate).toHaveBeenCalledWith(mockDate);
    expect(screen.getByText('28 Jan 2026')).toBeInTheDocument();
  });

  it('sets correct datetime attribute', () => {
    render(
      <CommentItem
        content="Hello"
        createdAt={mockDate}
        author={{ username: 'minh' }}
      />
    );

    const timeElement = screen.getByText('28 Jan 2026');
    expect(timeElement).toHaveAttribute('datetime', mockDate);
  });

  it('does not crash when author is undefined', () => {
    render(<CommentItem content="No author" createdAt={mockDate} />);

    expect(screen.getByText('No author')).toBeInTheDocument();
  });
});
