import { render, screen } from '@testing-library/react';
import Testimonial from './Testimonial';

describe('Testimonial', () => {
  test('renders the quote text', () => {
    render(<Testimonial />);

    const quote = screen.getByText(/quiet work leads to real progress/i);
    expect(quote).toBeInTheDocument();
  });

  test('renders the author name', () => {
    render(<Testimonial />);

    const author = screen.getByText('Shiki');
    expect(author).toBeInTheDocument();
  });

  test('renders the author role', () => {
    render(<Testimonial />);

    const role = screen.getByText(/author of hidden progress/i);
    expect(role).toBeInTheDocument();
  });

  test('uses semantic elements', () => {
    const { container } = render(<Testimonial />);

    expect(container.querySelector('aside')).toBeInTheDocument();
    expect(container.querySelector('blockquote')).toBeInTheDocument();
    expect(container.querySelector('figure')).toBeInTheDocument();
    expect(container.querySelector('figcaption')).toBeInTheDocument();
  });
});
