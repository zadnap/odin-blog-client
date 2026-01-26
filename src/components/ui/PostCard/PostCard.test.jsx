import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import PostCard from './PostCard';
import postFallback from '@/assets/images/post-fallback.jpg';

describe('PostCard', () => {
  const baseProps = {
    title: 'Test Post',
    description: 'This is a test description',
    slug: 'test-post',
  };

  const renderComponent = (props = {}) =>
    render(
      <MemoryRouter>
        <PostCard {...baseProps} {...props} />
      </MemoryRouter>
    );

  it('renders title and description', () => {
    renderComponent();

    expect(screen.getByText('Test Post')).toBeInTheDocument();
    expect(screen.getByText('This is a test description')).toBeInTheDocument();
  });

  it('uses fallback image when image prop is not provided', () => {
    renderComponent();

    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', postFallback);
  });

  it('uses provided image when image prop exists', () => {
    const imageUrl = '/test-image.jpg';
    renderComponent({ image: imageUrl });

    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', imageUrl);
  });

  it('links to correct post page', () => {
    renderComponent();

    const link = screen.getByRole('link', { name: /learn more/i });
    expect(link).toHaveAttribute('href', '/posts/slug/test-post');
  });
});
