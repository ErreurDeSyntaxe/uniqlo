import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { StoreContext } from '../contexts/StoreContext';
import Home from './Home';

function renderHomeWithStore(mockStore) {
  return render(
    <MemoryRouter>
      <StoreContext.Provider value={mockStore}>
        <Home />
      </StoreContext.Provider>
    </MemoryRouter>
  );
}

describe('Home component', () => {
  const mockProducts = [
    {
      id: 1,
      title: 'Mock Shirt',
      price: 29.99,
      image: '/mock-shirt.jpg',
      rating: { rate: 4.5, count: 10 },
    },
    {
      id: 2,
      title: 'Mock Pants',
      price: 49.99,
      image: '/mock-pants.jpg',
      rating: { rate: 4.2, count: 8 },
    },
    {
      id: 3,
      title: 'Mock Hat',
      price: 19.99,
      image: '/mock-hat.jpg',
      rating: { rate: 4.0, count: 5 },
    },
    {
      id: 4,
      title: 'Mock Shoes',
      price: 89.99,
      image: '/mock-shoes.jpg',
      rating: { rate: 5.0, count: 12 },
    },
  ];

  const mockStore = {
    products: mockProducts,
    cart: [],
    status: 'ready',
    dispatch: vi.fn(),
  };

  it('renders heading and subheading', () => {
    renderHomeWithStore(mockStore);

    expect(
      screen.getByRole('heading', { name: /welcome back, username!/i })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/revisit your favorite styles/i)
    ).toBeInTheDocument();
  });

  it('renders last browsed section with four products', () => {
    renderHomeWithStore(mockStore);

    // Section title
    expect(screen.getByText(/last time, you browsed/i)).toBeInTheDocument();

    // ProductCard titles
    const productTitles = mockProducts.map((p) => p.title);
    productTitles.forEach((title) =>
      expect(screen.getByText(title)).toBeInTheDocument()
    );
  });

  it('renders a "Shop Now" link', () => {
    renderHomeWithStore(mockStore);

    const shopNowLink = screen.getByRole('link', { name: /shop now/i });
    expect(shopNowLink).toBeInTheDocument();
    expect(shopNowLink).toHaveAttribute('href', '/shopping');
  });

  it('dispatches add-to-cart when button is clicked', () => {
    renderHomeWithStore(mockStore);
    const addBtn = screen.getAllByRole('button', { name: /add to cart/i })[0];
    addBtn.click();

    expect(mockStore.dispatch).toHaveBeenCalledWith({
      type: 'cart/addItem',
      payload: { id: 1, quantity: 1 },
    });
  });
});
