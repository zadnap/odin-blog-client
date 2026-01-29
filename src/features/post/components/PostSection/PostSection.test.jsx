import { render, screen } from '@testing-library/react';
import PostSection from './PostSection';

describe('PostSection', () => {
  const baseProps = {
    title: 'Introduction',
    slug: 'introduction',
    content: 'This is the intro content',
    imageUrl: 'https://example.com/image.jpg',
  };

  test('renders title with anchor link', () => {
    render(<PostSection {...baseProps} />);

    const link = screen.getByRole('link', { name: /introduction/i });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#introduction');
  });

  test('renders content paragraph', () => {
    render(<PostSection {...baseProps} />);

    expect(screen.getByText('This is the intro content')).toBeInTheDocument();
  });

  test('renders image when imageUrl is provided', () => {
    render(<PostSection {...baseProps} />);

    const image = screen.getByRole('img');

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', baseProps.imageUrl);
    expect(image).toHaveAttribute('alt', "Introduction's image");
  });

  test('does not render title when title is missing', () => {
    render(<PostSection slug="no-title" content="Content only" />);

    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
  });

  test('does not render content when content is missing', () => {
    render(<PostSection title="Only title" slug="only-title" />);

    expect(screen.queryByText(/content/i)).not.toBeInTheDocument();
  });
});
