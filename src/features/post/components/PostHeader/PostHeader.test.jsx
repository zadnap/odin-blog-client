import { render, screen } from '@testing-library/react';
import PostHeader from './PostHeader';

describe('PostHeader', () => {
  const props = {
    title: 'How to Use Messaging Apps',
    createdAt: '2023-10-02',
    readTime: '8 min',
  };

  test('renders post title', () => {
    render(<PostHeader {...props} />);

    expect(
      screen.getByRole('heading', { name: /how to use messaging apps/i })
    ).toBeInTheDocument();
  });

  test('renders created date and read time', () => {
    render(<PostHeader {...props} />);

    expect(screen.getByText('2023-10-02')).toBeInTheDocument();
    expect(screen.getByText(/8 min read/i)).toBeInTheDocument();
  });

  test('renders time element with correct datetime attribute', () => {
    render(<PostHeader {...props} />);

    const timeElement = screen.getByText('2023-10-02');

    expect(timeElement.tagName).toBe('TIME');
    expect(timeElement).toHaveAttribute('datetime', '2023-10-02');
  });
});
