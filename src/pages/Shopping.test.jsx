import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Shopping from './Shopping';
import { StoreContext } from '../contexts/StoreContext';

const mockProducts = [
  {
    id: 1,
    title: 'T-Shirt',
    price: 19.99,
    image: 'tshirt.jpg',
    rating: { rate: 4.5, count: 120 },
  },
];

function renderWithStore(custom = {}) {
  const store = {
    products: mockProducts,
    cart: [],
    dispatch: vi.fn(),
    status: 'ready',
    ...custom,
  };

  return {
    dispatch: store.dispatch,
    ...render(
      <StoreContext.Provider value={store}>
        <Shopping />
      </StoreContext.Provider>
    ),
  };
}

describe('Shopping page', () => {
  it('renders product cards from store', () => {
    renderWithStore();
    expect(screen.getByText(/t-shirt/i)).toBeInTheDocument();
  });

  it('dispatches add-to-cart when button is clicked', () => {
    const { dispatch } = renderWithStore();

    const addBtn = screen.getByRole('button', { name: /add to cart/i });
    fireEvent.click(addBtn);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'cart/addItem',
      payload: { id: 1, quantity: 1 },
    });
  });

  it('adds correct quantity when incremented', () => {
    const { dispatch } = renderWithStore();

    const incrementBtn = screen.getByRole('button', { name: '+' });
    fireEvent.click(incrementBtn); // quantity = 2 now

    const addBtn = screen.getByRole('button', { name: /add to cart/i });
    fireEvent.click(addBtn);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'cart/addItem',
      payload: { id: 1, quantity: 2 },
    });
  });

  it('does not allow quantity to go below 1', () => {
    const { dispatch } = renderWithStore();

    const decrementBtn = screen.getByRole('button', { name: '-' });
    const quantityDisplay = screen.getByDisplayValue('1');

    // Press the decrement button twice
    fireEvent.click(decrementBtn);
    fireEvent.click(decrementBtn);

    expect(quantityDisplay.value).toBe('1');

    expect(dispatch).not.toHaveBeenCalledWith(
      expect.objectContaining({
        payload: expect.objectContaining({ quantity: 0 }),
      })
    );
  });

  it('filters products based on search input', () => {
    const extraProducts = [
      ...mockProducts,
      {
        id: 2,
        title: 'Jeans',
        price: 49.99,
        image: 'jeans.jpg',
        rating: { rate: 4.0, count: 50 },
      },
    ];

    renderWithStore({ products: extraProducts });

    expect(screen.getByText(/t-shirt/i)).toBeInTheDocument();
    expect(screen.getByText(/jeans/i)).toBeInTheDocument();

    const searchInput = screen.getByPlaceholderText(/search products/i);
    fireEvent.change(searchInput, { target: { value: 'shirt' } });

    expect(screen.getByText(/t-shirt/i)).toBeInTheDocument();
    expect(screen.queryByText(/jeans/i)).not.toBeInTheDocument();
  });
});
