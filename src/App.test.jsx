import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { StoreProvider } from './contexts/StoreContext';
import App from './App';

// Helper to render with context provider
function renderApp() {
  return render(
    <StoreProvider>
      <App />
    </StoreProvider>
  );
}

describe('App component', () => {
  it('renders a nav bar', async () => {
    renderApp();
    expect(await screen.findByRole('navigation')).toBeInTheDocument();
  });

  it('renders a heading with the brand name', async () => {
    renderApp();
    expect(
      await screen.findByRole('heading', { name: /uniqlo/i })
    ).toBeInTheDocument();
  });

  it('renders a spinner while fetching data', async () => {
    renderApp();
    expect(
      await screen.findByLabelText(/loading spinner/i)
    ).toBeInTheDocument();
  });

  it('renders a footer', async () => {
    renderApp();
    expect(await screen.findByText(/erreur de syntaxe/i)).toBeInTheDocument();
  });
});
