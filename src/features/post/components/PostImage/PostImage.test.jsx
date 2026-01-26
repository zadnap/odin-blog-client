import { render, screen } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import PostImage from './PostImage';

vi.mock('@/assets/images/post-fallback.jpg', () => ({
  default: 'fallback-image.jpg',
}));

describe('PostImage', () => {
  test('renders image with provided src', () => {
    render(
      <PostImage
        image="post-image.jpg"
        alt="Post image"
        figcaption="Post image caption"
      />
    );

    const img = screen.getByRole('img', { name: /post image/i });

    expect(img).toHaveAttribute('src', 'post-image.jpg');
  });

  test('renders fallback image when image prop is missing', () => {
    render(
      <PostImage
        image={null}
        alt="Fallback image"
        figcaption="Fallback caption"
      />
    );

    const img = screen.getByRole('img', { name: /fallback image/i });

    expect(img).toHaveAttribute('src', 'fallback-image.jpg');
  });

  test('renders figcaption text', () => {
    render(
      <PostImage
        image="post-image.jpg"
        alt="Post image"
        figcaption="Teams collaborating using messaging applications"
      />
    );

    expect(
      screen.getByText(/teams collaborating using messaging applications/i)
    ).toBeInTheDocument();
  });
});
