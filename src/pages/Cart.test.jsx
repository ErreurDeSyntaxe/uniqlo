import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { StoreContext } from '../contexts/StoreContext';
import Cart from './Cart';

function renderCartWithStore(mockStore) {
  return render(
    <StoreContext.Provider value={mockStore}>
      <Cart />
    </StoreContext.Provider>
  );
}

describe('Cart component', () => {
  const mockProducts = [
    {
      id: 1,
      title: 'Mock Shirt',
      price: 20,
      image: '/shirt.jpg',
    },
    {
      id: 2,
      title: 'Mock Pants',
      price: 40,
      image: '/pants.jpg',
    },
  ];

  const mockCart = [
    { id: 1, quantity: 2 },
    { id: 2, quantity: 1 },
  ];

  const mockDispatch = vi.fn();

  it('renders empty cart message when cart is empty', () => {
    renderCartWithStore({
      products: mockProducts,
      cart: [],
      dispatch: mockDispatch,
    });

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
  });

  it('renders cart items and total correctly', () => {
    renderCartWithStore({
      products: mockProducts,
      cart: mockCart,
      dispatch: mockDispatch,
    });

    expect(screen.getByText(/mock shirt/i)).toBeInTheDocument();
    expect(screen.getByText(/mock pants/i)).toBeInTheDocument();
    expect(screen.getByText('$80.00')).toBeInTheDocument();
  });

  it('dispatches increment action when "+" is clicked', () => {
    renderCartWithStore({
      products: mockProducts,
      cart: mockCart,
      dispatch: mockDispatch,
    });

    const incrementButtons = screen.getAllByRole('button', { name: '+' });
    fireEvent.click(incrementButtons[0]);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'cart/increment',
      payload: 1,
    });
  });

  it('dispatches decrement action when "−" is clicked', () => {
    renderCartWithStore({
      products: mockProducts,
      cart: mockCart,
      dispatch: mockDispatch,
    });

    const decrementButtons = screen.getAllByRole('button', { name: '−' });
    fireEvent.click(decrementButtons[0]);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'cart/decrement',
      payload: 1,
    });
  });

  it('dispatches removeItem when "Remove" is clicked', () => {
    renderCartWithStore({
      products: mockProducts,
      cart: mockCart,
      dispatch: mockDispatch,
    });

    const removeButtons = screen.getAllByRole('button', { name: /remove/i });
    fireEvent.click(removeButtons[0]);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'cart/removeItem',
      payload: 1,
    });
  });

  it('dispatches cart/clear when "Clear Cart" is clicked', () => {
    renderCartWithStore({
      products: mockProducts,
      cart: mockCart,
      dispatch: mockDispatch,
    });

    const clearButton = screen.getByRole('button', { name: /clear cart/i });
    fireEvent.click(clearButton);

    expect(mockDispatch).toHaveBeenCalledWith({ type: 'cart/clear' });
  });
});
