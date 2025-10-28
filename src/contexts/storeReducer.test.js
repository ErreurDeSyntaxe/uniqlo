import { describe, it, expect, vi } from 'vitest';
import { reducer, useStore } from './storeReducer';
import { useContext } from 'react';

vi.mock('react', async () => {
  const actual = await vi.importActual('react');
  return {
    ...actual,
    useContext: vi.fn(),
  };
});

describe('storeReducer', () => {
  const baseState = {
    products: [],
    cart: [],
    status: 'ready',
  };

  it('sets status to "loading" on loading action', () => {
    const result = reducer(baseState, { type: 'loading' });
    expect(result.status).toBe('loading');
  });

  it('sets products and status to ready on "ready" action', () => {
    const payload = [{ id: 1, title: 'Mock Product' }];
    const result = reducer(baseState, { type: 'ready', payload });
    expect(result.status).toBe('ready');
    expect(result.products).toEqual(payload);
  });

  // CART TESTS
  it('adds new item to empty cart on "cart/addItem"', () => {
    const payload = { id: 1, quantity: 2 };
    const result = reducer(baseState, { type: 'cart/addItem', payload });
    expect(result.cart).toEqual([{ id: 1, quantity: 2 }]);
  });

  it('increments quantity when item already exists', () => {
    const state = {
      ...baseState,
      cart: [{ id: 1, quantity: 1 }],
    };
    const payload = { id: 1, quantity: 2 };
    const result = reducer(state, { type: 'cart/addItem', payload });
    expect(result.cart).toEqual([{ id: 1, quantity: 3 }]);
  });

  it('removes item from cart on "cart/removeItem"', () => {
    const state = {
      ...baseState,
      cart: [
        { id: 1, quantity: 1 },
        { id: 2, quantity: 1 },
      ],
    };
    const result = reducer(state, { type: 'cart/removeItem', payload: 1 });
    expect(result.cart).toEqual([{ id: 2, quantity: 1 }]);
  });

  it('increments item quantity on "cart/increment"', () => {
    const state = {
      ...baseState,
      cart: [{ id: 1, quantity: 2 }],
    };
    const result = reducer(state, { type: 'cart/increment', payload: 1 });
    expect(result.cart).toEqual([{ id: 1, quantity: 3 }]);
  });

  it('decrements item quantity on "cart/decrement"', () => {
    const state = {
      ...baseState,
      cart: [{ id: 1, quantity: 3 }],
    };
    const result = reducer(state, { type: 'cart/decrement', payload: 1 });
    expect(result.cart).toEqual([{ id: 1, quantity: 2 }]);
  });

  it('removes item entirely if decremented to 0', () => {
    const state = {
      ...baseState,
      cart: [{ id: 1, quantity: 1 }],
    };
    const result = reducer(state, { type: 'cart/decrement', payload: 1 });
    expect(result.cart).toEqual([]);
  });

  it('clears the entire cart on "cart/clear"', () => {
    const state = {
      ...baseState,
      cart: [{ id: 1, quantity: 5 }],
    };
    const result = reducer(state, { type: 'cart/clear' });
    expect(result.cart).toEqual([]);
  });

  //  Error cases
  it('sets status to "error" on "error" action', () => {
    const result = reducer(baseState, { type: 'error' });
    expect(result.status).toBe('error');
  });

  it('returns same state for unknown action type', () => {
    const result = reducer(baseState, { type: 'unknown' });
    expect(result).toEqual(baseState);
  });
});

describe('useStore hook', () => {
  it('returns context value when defined', () => {
    const mockContext = { cart: [], products: [] };
    useContext.mockReturnValue(mockContext);

    const result = useStore();
    expect(result).toBe(mockContext);
  });

  it('throws an error when context is undefined', () => {
    useContext.mockReturnValue(undefined);
    expect(() => useStore()).toThrowError(
      'StoreContext was used outside StoreProvider'
    );
  });
});
